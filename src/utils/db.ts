import Dexie, { Table } from 'dexie'
import { Memo } from '@/types/memo'

export class MySubClassedDexie extends Dexie {
  memos!: Table<Memo>

  constructor() {
    super('playgroundDB')
    this.version(1).stores({
      memos: '++id, content, updatedAt',
    })
  }
}

export const db = new MySubClassedDexie()
