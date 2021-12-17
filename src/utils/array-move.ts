export function ArrayMoveMutable(array: any, fromIndex: any, toIndex: any) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex

    const [item] = array.splice(fromIndex, 1)
    array.splice(endIndex, 0, item)
  }
}

export function ArrayMoveImmutable(array: any, fromIndex: any, toIndex: any) {
  array = [...array]
  ArrayMoveMutable(array, fromIndex, toIndex)
  return array
}
