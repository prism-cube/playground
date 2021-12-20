import { useState, useEffect } from 'react'
import { DropResult } from '@mndzielski/react-smooth-dnd'
import { Team } from '@/types/predictions'
import { ArrayMoveImmutable } from '@/utils/array-move'

const useOnDrop = (teams: Team[]) => {
  const [items, setItems] = useState(teams)

  const onDrop = (dropResult: DropResult) => {
    const { removedIndex, addedIndex } = dropResult
    const updater = (itemsArray: Team[]) =>
      ArrayMoveImmutable(itemsArray, removedIndex, addedIndex).map(
        (item: Team, idx: number) => {
          return { ...item, order: idx }
        }
      )
    setItems(updater)
  }

  return [items, onDrop] as const
}

export default useOnDrop
