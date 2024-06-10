"use client"

import { type ReactNode, createContext, useContext, useRef } from "react";
import {createStore} from 'zustand/vanilla'
import { type StoreApi, useStore } from 'zustand'
import { OverridableStringUnion } from '@mui/types';
import { UserData } from "@/config/authentication";

type AlertColor = 'success' | 'info' | 'warning' | 'error';

interface AlertPropsColorOverrides {}

export type Project = {
    level:string;
    id:number;
    code:string;
    value:string;
}

export type KonteksStrategis = {
    id:number;
    value:string;
}

export type SnackbarType = {
    showSnackbar:boolean,
    message:string;
    severity:OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
}

export type GlobalState = {
    userdata:UserData;
    project:Project;
    konteksStrategis:KonteksStrategis;
    kebijakanOption:string[];
    rpjmn:number[];
    snackbar:SnackbarType;
}

export type GlobalActions = {
    setUserData: (params:UserData) => void
    setProject: (params:Project) => void
    setKonteksStrategis: (params:KonteksStrategis) => void
    setKebijakanOption: (params:string[]) => void
    setSnackbar: (params:SnackbarType) => void
    destroyState: () => void
}

export type GlobalStore = GlobalState & GlobalActions

export const defaultInitGlobalState: GlobalState = {
    userdata:{
        id:"",
        name: "",
        email: "",
        role:"",
        menus: [],
        permission: [],
        token:""
    },
    project:{
        level:"",
        id:0,
        code:"",
        value:""
    },
    konteksStrategis:{
        id:0,
        value:""
    },
    kebijakanOption:[],
    snackbar:{
        showSnackbar: false,
        message: "",
        severity: "success"
    },
}

export const createGlobalStore = (
  initState: GlobalState = defaultInitGlobalState,
) => {
    return createStore<GlobalStore>()((set) => ({
        ...initState,
        setUserData: (params:UserData) => set((state) => state = {...state,userdata:params}),
        setProject: (params:Project) => set((state) => state = {...state,project:params}),
        setKonteksStrategis: (params:KonteksStrategis) => set((state) => state = {...state,konteksStrategis:params}),
        setKebijakanOption: (params:string[]) => set((state) => state = {...state,kebijakanOption:params}),
        setSnackbar: (params:SnackbarType) => set((state) => state = {...state,snackbar:params}),
        destroyState: () => set(() => (defaultInitGlobalState)),
    }))
}

export const GlobalStoreContext = createContext<StoreApi<GlobalStore> | null>(
  null,
)

export interface GlobalStoreProviderProps {
    children: ReactNode,
    state:GlobalState
}

export const GlobalStoreProvider = (
  {
      children,
      state,
  }: GlobalStoreProviderProps
) => {
    const storeRef = useRef<StoreApi<GlobalStore>>()
    if (!storeRef.current) {
        storeRef.current = createGlobalStore(state)
    }

    return (
      <GlobalStoreContext.Provider value={storeRef.current}>
          {children}
      </GlobalStoreContext.Provider>
    )
}

export const useGlobalStore = <T,>(
  selector: (store: GlobalStore) => T,
): T => {
    const globalStoreContext = useContext(GlobalStoreContext)

    if (!globalStoreContext) {
        throw new Error(`useGlobalStore must be use within GlobalStoreProvider`)
    }

    return useStore(globalStoreContext, selector)
}