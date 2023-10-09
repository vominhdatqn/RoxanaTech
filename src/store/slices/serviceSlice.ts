import { create, StateCreator } from 'zustand'
import { HomeSlice } from './homeSlice';
import { immer } from 'zustand/middleware/immer'

interface ServiceType {
	id: string;
	image: string;
	gallery?: string[];
	name: string;
	description: string;
	alt: string;
}

interface ServiceSlice {
	services: ServiceType[];
	addService: (service: ServiceType) => void
}

const createServiceSlice: StateCreator<ServiceSlice & HomeSlice,
	[],
	[["zustand/immer", never]],
	ServiceSlice
> = immer((set) => ({
	services: [],
	addService: (service: ServiceType) => set((state) => {
		state.services.push(service)
	})
}))

export { createServiceSlice }

export type { ServiceSlice }