export enum ListPermission {
    TEMA_LIST       = "tema.list",
    TEMA_ADD        = "tema.add",
    TEMA_UPDATE     = "tema.update",
    TEMA_DELETE     = "tema.delete",
    EXSUM_LIST      = "exsum.list",
    EXSUM_SWOT_ADD       = "exsum.swot.add",
    EXSUM_SWOT_UPDATE    = "exsum.swot.update",
    EXSUM_SWOT_DELETE    = "exsum.swot.delete",
    EXSUM_GOALS_ADD       = "exsum.goals.add",
    EXSUM_GOALS_UPDATE    = "exsum.goals.update",
    EXSUM_GOALS_DELETE    = "exsum.goals.delete",
    EXSUM_TAGGING_ADD       = "exsum.tagging.add",
    EXSUM_TAGGING_UPDATE    = "exsum.tagging.update",
    EXSUM_TAGGING_DELETE    = "exsum.tagging.delete",
    EXSUM_SEGMENT_ADD       = "exsum.penerimaManfaat.add",
    EXSUM_SEGMENT_UPDATE    = "exsum.penerimaManfaat.update",
    EXSUM_SEGMENT_DELETE    = "exsum.penerimaManfaat.delete",
}

export function checkPermission(
    listPermission:string[],
    permission:string
){
    return listPermission.indexOf(permission) !== -1
}