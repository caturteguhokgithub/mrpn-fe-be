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