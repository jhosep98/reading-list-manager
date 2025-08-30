import { createStore } from 'zustand/vanilla'

type Status = 'backlog' | 'todo' | 'in-progress' | 'done' | 'canceled'

type Entry = {
  title: string
  category: string
  author: string
  url: string
  status: Status
  id: string
  createdAt: string
  updatedAt: string
  notes: string
  rankingScore: number
  description: string
}

export type EntryState = {
  entries: Array<Entry>
}

export type EntryActions = {
  addEntry: (entry: EntryState) => void
  updateEntry: (entry: EntryState) => void
  deleteEntry: (id: string) => void
  fetchEntries: () => void
}

export type EntryStore = EntryState & EntryActions

export const initEntryStore = (): EntryState => {
  return {
    entries: [
      {
        title: 'One Piece',
        description:
          'Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.',
        category: 'Shounen',
        author: 'Eiichiro Oda',
        url: 'https://myanimelist.net/anime/21/One_Piece',
        status: 'backlog',
        id: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        notes:
          'The airing time was Wednesdays 19:00 between October 20, 1999 - March 2001. The airing time was changed to Sundays 19:30 between April 2001 - December 2004. The airing time was changed to Sundays 9:30 between October 6, 2006 - October 13, 2024. The airing time was again changed to Sundays 23:15 on April 6, 2025.',
        rankingScore: 0,
      },
    ],
  }
}

export const defaultEntryState: EntryState = {
  entries: [
    {
      title: '',
      category: '',
      author: '',
      url: '',
      status: 'backlog',
      id: '',
      createdAt: '',
      updatedAt: '',
      notes: '',
      rankingScore: 0,
      description: '',
    },
  ],
}

export const createEntryStore = (initState: EntryState = defaultEntryState) => {
  return createStore<EntryStore>()((set) => ({
    ...initState,
    addEntry: (entry) => set((state) => ({ ...state, ...entry })),
    updateEntry: (entry) => set((state) => ({ ...state, ...entry })),
    deleteEntry: (id) => set((state) => ({ ...state, id })),
    fetchEntries: () => set((state) => ({ ...state })),
  }))
}
