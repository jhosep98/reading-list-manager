'use client'

import { useEntryStore } from '@/context/entry-store-provider'
import { MainCard } from './main-card'

export function EntriesList() {
  const { entries } = useEntryStore((state) => state)

  return (
    <>
      {entries.map((entry) => (
        <MainCard
          key={entry.id}
          title={entry.title}
          description={entry.description}
          tag={entry.status}
        />
      ))}
    </>
  )
}
