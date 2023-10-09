import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import { ServiceSlice, createServiceSlice } from './slices/serviceSlice';
import { HomeSlice, createHomeSlice } from './slices/homeSlice';

export const useStore = create(
    devtools(
        persist<ServiceSlice & HomeSlice>(
            (...a) => ({
                ...createServiceSlice(...a),
                ...createHomeSlice(...a),
            }),
            {
                name: 'mardoll-store',
                // partialize: (state) => ({ services: state.services })
                // partialize: (state) =>
                //     Object.fromEntries(
                //         Object.entries(state).filter(([key]) => !['services'].includes(key))
                //     ),
            }
        )
    )
)

export default useStore;
