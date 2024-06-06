export enum ListPermission {
    TEMA_LIST       = "tema.list",
    TEMA_ADD        = "tema.add",
    TEMA_UPDATE     = "tema.update",
    TEMA_DELETE     = "tema.delete",
    EXSUM_LIST      = "exsum.list",
    EXSUM_SWOT_ADD       = "exsum.swot.add",
    EXSUM_SWOT_UPDATE    = "exsum.swot.update",
    EXSUM_SWOT_DELETE    = "exsum.swot.delete",
}

export function checkPermission(
    listPermission:string[],
    permission:string
){
    return listPermission.indexOf(permission) !== -1
}