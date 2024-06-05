import { useState, useMemo } from "react";
import { TemaType } from "@/app/api/tema/tema-list/route";
import { TreeViewBaseItem } from "@mui/x-tree-view/models";
import {
    TemaRequest,
    UseDataTema,
    UseDataRKP,
    UseCreateTema,
    UseDeleteTema,
    UseUpdateTema
} from "@/app/tema/repositories";
import {useGlobalStore} from "@/provider";

export default function UseTemaHook() {

    const {setSnackbar} = useGlobalStore((state) => state)
    
    function showError(msg:string){
        setSnackbar({
            showSnackbar:true,
            message:msg,
            severity:"error"
        })
    }

    function showSuccess(msg:string){
        setSnackbar({
            showSnackbar:true,
            message:msg,
            severity:"success"
        })
    }

    const { dataRKP, dataRKPLoading } = UseDataRKP();

    const { dataTema, dataTemaLoading, revalidateTema, dataTemaIsValidating } = UseDataTema()

    // detail tema
    const [showTemaDetail, setShowTemaDetail] = useState(false);
    const [dataTemaDetail, setDataTemaDetail] = useState<TemaType>({id:0,code:"",value:"", ap:[]});
    const generateTemaDetailItem = (data:TemaType) => {
        let result: TreeViewBaseItem[] = []
        data.ap.map((ap:any) => {
            let apData:TreeViewBaseItem = {
                id:`ap-${ap.id}`,
                label:`${ap.ref.code} - ${ap.ref.value}`,
                children: []
            }
            ap.pp.map((pp:any) => {
                let ppData:TreeViewBaseItem = {
                    id:`pp-${pp.id}`,
                    label:`${pp.ref.code} - ${pp.ref.value}`,
                    children: []
                }
                pp.kp.map((kp:any) => {
                    let kpData:TreeViewBaseItem = {
                        id:`kp-${kp.id}`,
                        label:`${kp.ref.code} - ${kp.ref.value}`
                    }
                    ppData.children?.push(kpData)
                })
                apData.children?.push(ppData)
            })

            result.push(apData)
        })
        return result
    }
    const dataTemaDetailItem = useMemo(
        () => generateTemaDetailItem(dataTemaDetail),
        [dataTemaDetail]
    );

    // dialog mutation tema
    const [openTemaMutationDialog, setOpenTemaMutationDialog] = useState<boolean>(false);
    const [apSearchValue, setApSearchValue] = useState<string>("");

    const displayData = useMemo(
        () => {
            if (apSearchValue === "") {
                return dataRKP
            }
            return dataRKP.filter((x:any) => {
                return x.value.toLowerCase().includes(apSearchValue.toLowerCase());
            })
        },
        [apSearchValue,dataRKP]
    );

    const initialRequest:TemaRequest = {code:"",value:"",ap_ids:[]}
    const [requestTema, setRequestTema] = useState<TemaRequest>(initialRequest);

    // create tema
    const { createTema, createTemaIsMutating, createTemaError } = UseCreateTema();
    const submitCreateTema = async () => {
        try {
            await createTema(requestTema)
            showSuccess("Tema berhasil ditambahkan")
        } catch (e) {
            const error = e as Error
            showError(error.message)
        } finally {
            setRequestTema(initialRequest)
            setOpenTemaMutationDialog(false)
            revalidateTema()
        }
    }

    // delete tema
    const { deleteTema, deleteTemaIsMutating, deleteTemaError } = UseDeleteTema();
    const [ openConfirmation, setOpenConfirmation] = useState<boolean>(false);
    const submitDeleteTema = async () => {
        try {
            await deleteTema(requestTema)
            showSuccess("Tema berhasil dihapus")
        } catch (e) {
            const error = e as Error
            showError(error.message)
        } finally {
            setRequestTema(initialRequest)
            setOpenConfirmation(false)
            await revalidateTema()
        }
    }

    // update tema
    const { updateTema, updateTemaIsMutating, updateTemaError } = UseUpdateTema();
    const submitUpdateTema = async () => {
        try {
            await updateTema(requestTema)
            showSuccess("Tema berhasil diubah")
        } catch (e) {
            const error = e as Error
            showError(error.message)
        } finally {
            setRequestTema(initialRequest)
            setOpenTemaMutationDialog(false)
            await revalidateTema()
        }
    }

    return {
        dataTema,
        dataTemaLoading,
        dataTemaIsValidating,
        showTemaDetail,
        setShowTemaDetail,
        dataTemaDetail,
        setDataTemaDetail,
        dataTemaDetailItem,
        dataRKPLoading, 
        displayData,
        openTemaMutationDialog,
        setOpenTemaMutationDialog, 
        setApSearchValue, 
        requestTema,
        setRequestTema,
        submitCreateTema,
        createTemaIsMutating,
        createTemaError,
        deleteTemaIsMutating,
        deleteTemaError,
        openConfirmation,
        setOpenConfirmation,
        submitDeleteTema,
        updateTema, 
        updateTemaIsMutating,
        updateTemaError,
        submitUpdateTema,
    }

}