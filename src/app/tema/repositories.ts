import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import {getter, postRequest} from '@/utils/fetcher'

export type TemaRequest = {
    id?:number;
    code:string;
    value:string;
    ap_ids:number[]
}

export function UseDataTema(){
    const {
        mutate,
        isValidating,
        data,
        isLoading,
        error
    } = useSWR(
        '/api/tema/tema-list',
        getter,
        {
            revalidateWhenStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    return { revalidateTema:mutate, dataTemaIsValidating:isValidating, dataTema: data, dataTemaLoading:isLoading, dataTemaLoadingError:error };
}

export function UseCreateTema(){
    const {
        trigger,
        isMutating,
        error
    } = useSWRMutation('/api/tema/tema-add', postRequest)

    return { createTema: trigger, createTemaIsMutating:isMutating, createTemaError:error }
}

export function UseDeleteTema(){
    const {
        trigger,
        isMutating,
        error
    } = useSWRMutation('/api/tema/tema-delete', postRequest)

    return { deleteTema: trigger, deleteTemaIsMutating:isMutating, deleteTemaError:error }
}

export function UseUpdateTema(){
    const {
        trigger,
        isMutating,
        error
    } = useSWRMutation(
            '/api/tema/tema-update',
            postRequest
        )

    return { updateTema: trigger, updateTemaIsMutating:isMutating, updateTemaError:error }
}

export function UseDataRKP(){
    const {
        data,
        isLoading,
        error
    } = useSWR(
        '/api/misc/rkp-list',
        getter,
        {
            revalidateWhenStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    return { dataRKP: data, dataRKPLoading:isLoading, dataRKPLoadingError:error };
}