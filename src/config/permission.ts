export enum ListPermission {
    TEMA_LIST     = "tema.list",
    TEMA_ADD      = "tema.add",
    TEMA_UPDATE   = "tema.update",
    TEMA_DELETE   = "tema.delete",
}

export function checkPermission(
    listPermission:string[],
    permission:string
){
    return listPermission.indexOf(permission) !== -1
}