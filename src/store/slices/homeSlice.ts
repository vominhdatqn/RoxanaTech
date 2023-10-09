import { create, StateCreator } from 'zustand'

interface HomeType {
    banner: string[];
}

interface HomeSlice {
    home: HomeType
}

const createHomeSlice: StateCreator<HomeSlice,
    [],
    []
> = (set) => ({
    home: { banner: [] }
})

export { createHomeSlice }

export type { HomeSlice }