"use client";
import { useEffect, useState } from "react";
import ContentPage from "@/app/components/contents";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {CircularProgress} from "@mui/material";
import AddButton from "../components/buttonAdd";
import UseTemaHook from "@/app/tema/hooks";
import Tema from "@/app/tema/partials/tema"
import TemaDetail from "@/app/tema/partials/tema-detail"
import TemaMutation from "@/app/tema/partials/tema-mutation";
import ListRKP from "@/app/tema/partials/tema-mutation-ap";
import TemaDeleteConfirmation from "@/app/tema/partials/tema-mutation-confirmation";
import {useGlobalStore} from "@/provider"
import {ListPermission, checkPermission} from "@/config/permission";

export default function PageTema() {

    const {userdata} = useGlobalStore((state) => state)
    const {permission} = userdata

    const {
        dataTema,
        dataTemaLoading,
        dataTemaIsValidating,
        dataRKPLoading,
        showTemaDetail,
        setShowTemaDetail,
        setDataTemaDetail,
        dataTemaDetail,
        dataTemaDetailItem,
        displayData,
        openTemaMutationDialog,
        setOpenTemaMutationDialog, 
        setApSearchValue,
        requestTema,
        setRequestTema,
        submitCreateTema,
        createTemaIsMutating,
        openConfirmation,
        setOpenConfirmation,
        submitDeleteTema,
        deleteTemaIsMutating,
        updateTemaIsMutating,
        submitUpdateTema,
    } = UseTemaHook()

    const [isMutating, setIsMutating] = useState<boolean>(false)
    useEffect(() => {
        if (dataTemaLoading || createTemaIsMutating || deleteTemaIsMutating || updateTemaIsMutating) {
            return setIsMutating(true)
        }
        return setIsMutating(false)
    },[createTemaIsMutating, deleteTemaIsMutating, dataTemaLoading, dataTemaIsValidating])

    return (
        <>
            <DashboardLayout>
                <ContentPage
                    withCard={false}
                    addButton={
                        checkPermission(permission, ListPermission.TEMA_ADD) &&
                        !dataRKPLoading && (
                            <AddButton
                                title="Tambah Tema"
                                filled
                                noMargin
                                onclick={() => setOpenTemaMutationDialog(true)}
                            />
                        )
                    }
                >
                    {
                        (dataTemaLoading || isMutating) ? (
                            <EmptyState
                                icon={<CircularProgress color="inherit" />}
                                title="Sedang memuat data"
                                description=""
                            />
                        ) : (
                            dataTema && dataTema.length == 0 ? (
                                <EmptyState
                                    icon={<IconEmptyPage />}
                                    title="Halaman Tema Kosong"
                                    description="Silahkan isi konten halaman ini"
                                />
                            ) : (
                                <Tema
                                    data={dataTema}
                                    setDataTemaDetail={setDataTemaDetail} 
                                    setShowTemaDetail={setShowTemaDetail} 
                                />
                            )
                        )
                    }
                </ContentPage>
            </DashboardLayout>

            <TemaDetail 
                showTemaDetail={showTemaDetail}
                setShowTemaDetail={setShowTemaDetail}
                setRequestTema={setRequestTema}
                tema={dataTemaDetail}
                data={dataTemaDetailItem} 
                setOpenConfirmationDialog={setOpenConfirmation}
                setOpenTemaMutationDialog={setOpenTemaMutationDialog}        
            />
            
            <TemaMutation 
                openTemaMutationDialog={openTemaMutationDialog}
                setOpenTemaMutationDialog={setOpenTemaMutationDialog} 
                setRequestTema={setRequestTema}
                submitCreateTema={submitCreateTema}
                submitUpdateTema={submitUpdateTema}
                isMutating={isMutating}
                requestTema={requestTema}
            >
                <ListRKP 
                    data={displayData}
                    requestTema={requestTema}
                    setRequestTema={setRequestTema}
                    setApSearchValue={setApSearchValue}
                />
            </TemaMutation>

            <TemaDeleteConfirmation
                isMutating={isMutating}
                open={openConfirmation}
                setOpen={setOpenConfirmation}
                submit={submitDeleteTema}
            />
        </>
    );
}
