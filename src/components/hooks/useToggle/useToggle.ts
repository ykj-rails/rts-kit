import { useCallback, useState } from 'react'

export const useToggle = (initialState = false) => {
  const [active, setActive] = useState(initialState)

  const toggleActive = useCallback(() => setActive(!active), [active])

  return [active, toggleActive] as const
}
