import { atom, selector } from 'recoil'

const initialState = 'Hello World!'

export const sampleState = atom({
  key: 'sampleState', // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
})

export const getSamlpeState = selector({
  key: 'getSamlpeState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(sampleState)

    return text
  },
})
