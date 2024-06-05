import { createContext, ReactNode, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import { createStore } from 'zustand/vanilla'

export type ExsumState = {
    id:number;
    level:string;
    ref_id:number;
}

export type ExsumAction = {
    setExsum: (params:ExsumState) => void
    destroyExsum: () => void
}

export type ExsumStore = ExsumState & ExsumAction

export const defaultExsumState:ExsumState = {
    id:0,
    level:"",
    ref_id:0
}

export const createExsumStore = (
    initState:ExsumState = defaultExsumState,
) => {
    return createStore<ExsumStore>()((set) => ({
        ...initState,
        setExsum: (params:ExsumState) => set((state) => state = {...state, ...params}),
        destroyExsum: () => set(() => (defaultExsumState)),
    }))
}

export const ExsumStoreContext = createContext<StoreApi<ExsumStore> | null>(
    null,
)

export interface ExsumStoreProviderProps {
    children: ReactNode,
    state:ExsumState
}

export const ExsumStoreProvider = (
    {
        children,
        state,
    }: ExsumStoreProviderProps
) => {
    const storeRef = useRef<StoreApi<ExsumStore>>()
    if (!storeRef.current) {
        storeRef.current = createExsumStore(state)
    }

    return (
        <ExsumStoreContext.Provider value={storeRef.current}>
            {children}
        </ExsumStoreContext.Provider>
    )
}

export const useExsumStore = <T,>(
    selector: (store: ExsumStore) => T,
): T => {
    const exsumStoreContext = useContext(ExsumStoreContext)

    if (!exsumStoreContext) {
        throw new Error(`useExsumStore must be use within ExsumStoreProvider`)
    }

    return useStore(exsumStoreContext, selector)
}