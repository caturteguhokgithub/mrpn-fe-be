export enum ListPermission {
    TEMA_ADD        = "tema.add",
    TEMA_UPDATE     = "tema.update",
    TEMA_DELETE     = "tema.delete",
    EXSUM_SWOT_ADD       = "exsum.swot.add",
    EXSUM_SWOT_UPDATE    = "exsum.swot.update",
    EXSUM_SWOT_DELETE    = "exsum.swot.delete",
    EXSUM_GOALS_ADD       = "exsum.goals.add",
    EXSUM_GOALS_UPDATE    = "exsum.goals.update",
    EXSUM_GOALS_DELETE    = "exsum.goals.delete",
    EXSUM_TAGGING_ADD       = "exsum.tagging.add",
    EXSUM_TAGGING_DELETE    = "exsum.tagging.delete",
    EXSUM_SEGMENT_ADD       = "exsum.penerimaManfaat.add",
    EXSUM_SEGMENT_UPDATE    = "exsum.penerimaManfaat.update",
    EXSUM_SEGMENT_DELETE    = "exsum.penerimaManfaat.delete",
    EXSUM_STAKEHOLDER_ADD       = "exsum.stakeholder.add",
    EXSUM_STAKEHOLDER_UPDATE    = "exsum.stakeholder.update",
    EXSUM_STAKEHOLDER_DELETE    = "exsum.stakeholder.delete",
    EXSUM_PENDANAAN_ADD       = "exsum.pendanaan.add",
    EXSUM_PENDANAAN_UPDATE    = "exsum.pendanaan.update",
    EXSUM_PENDANAAN_DELETE    = "exsum.pendanaan.delete",
    EXSUM_CRITICAL_PATH_ADD       = "exsum.criticalPath.add",
    EXSUM_CRITICAL_PATH_UPDATE    = "exsum.criticalPath.update",
    EXSUM_CRITICAL_PATH_DELETE    = "exsum.criticalPath.delete",
}

export function checkPermission(
    listPermission:string[],
    permission:string
){
    return listPermission.indexOf(permission) !== -1
}