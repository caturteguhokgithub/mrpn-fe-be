import { argv } from 'process';
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url, {method: "POST"}).then((res) => res.json()).then((data) => data.data)

const getter = (url:string, arg?:any) => {
    return useSWR(url, fetcher, 
        {
            ...arg,
            onError: () => {
                window.location.href = "/"
            }
        }
    );
}

export default getter