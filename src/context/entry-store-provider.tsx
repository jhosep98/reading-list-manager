'use client'

import * as React from 'react'
import { useStore } from 'zustand'
import {
  createEntryStore,
  type EntryStore,
  initEntryStore,
} from '@/stores/entry-store'

export type EntryStoreApi = ReturnType<typeof createEntryStore>

export const EntryStoreContext = React.createContext<EntryStoreApi | undefined>(
  undefined,
)

export interface EntryStoreProviderProps {
  children: React.ReactNode
}

export const EntryStoreProvider = ({ children }: EntryStoreProviderProps) => {
  const storeRef = React.useRef<EntryStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createEntryStore(initEntryStore())
  }

  return (
    <EntryStoreContext.Provider value={storeRef.current}>
      {children}
    </EntryStoreContext.Provider>
  )
}

export const useEntryStore = <T,>(selector: (store: EntryStore) => T): T => {
  const entryStoreContext = React.useContext(EntryStoreContext)

  if (!entryStoreContext) {
    throw new Error('useEntryStore must be used within EntryStoreProvider')
  }

  return useStore(entryStoreContext, selector)
}
