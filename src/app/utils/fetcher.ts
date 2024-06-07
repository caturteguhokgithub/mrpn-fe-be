import useSWRMutation from "swr/mutation";

export async function getter(url: string) {
    return await fetch(url,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then(res => res.json())
        .then(data => {
            if (data.meta.code != 200){
                throw new Error(data.meta.message);
            }
            return data.data;
        })
}

export async function getRequest(url: string, { arg }: { arg: any }) {
    return await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(arg)
    })
    .then(res => res.json())
    .then(data => {
        if (data.meta.code != 200){
            throw new Error(data.meta.message);
        }
        return data.data;
    })
}

export async function postRequest(url: string, { arg }: { arg: any }) {
    return await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(arg)
        })
        .then(res => res.json())
        .then(data => {
            if (data.meta.code != 200){
                throw new Error(data.meta.message);
            }
            return data.data;
        })
}

export const CrudRepository = (
{
    showUri,
    createUri,
    updateUri,
    deleteUri
} : {
    showUri:string;
    createUri:string;
    updateUri:string;
    deleteUri:string;
}
) => {
    const showData = () => {
        const {
            trigger,
            isMutating
        } = useSWRMutation(
            showUri,
            postRequest
        );
        return { triggerShowData:trigger, showDataMutating:isMutating };
    };
    
    const createData = () => {
        const {
            trigger,
            isMutating
        } = useSWRMutation(
            createUri,
            postRequest
        );
        return { triggerCreateData: trigger, createDataMutating:isMutating };
    };
    
    const updateData = () => {
        const {
            trigger,
            isMutating
        } = useSWRMutation(
            updateUri,
            postRequest
        );
        return { triggerUpdateData: trigger, updateDataMutating:isMutating };
    };
    
    const deleteData = () => {
        const {
            trigger,
            isMutating
        } = useSWRMutation(
            deleteUri,
            postRequest
        );
        return { triggerDeleteData: trigger, deleteDataMutating:isMutating };
    };

    return {showData,createData,updateData,deleteData}
}