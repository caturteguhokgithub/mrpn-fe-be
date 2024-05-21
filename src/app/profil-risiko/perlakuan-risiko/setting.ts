export type PerlakuanType = {
 sasaran: string;
 is_uraian: string;
 is_target: string;
 is_fisik: string;
 peristiwa: string;
 pemilik: string;
 ada_tidak: string;
};

export const data: PerlakuanType[] = [
 {
  sasaran: "-",
  is_uraian: "-",
  is_target: "-",
  is_fisik: "-",
  peristiwa: "-",
  pemilik: "-",
  ada_tidak: "-",
 },
];

export const listPeristiwaRisiko = [
 { id: "1", value: "1", label: "Peristiwa risiko 1" },
 { id: "2", value: "2", label: "Peristiwa risiko 2" },
 { id: "3", value: "3", label: "Peristiwa risiko 3" },
 { id: "4", value: "4", label: "Peristiwa risiko 4" },
 { id: "5", value: "5", label: "Peristiwa risiko 5" },
];
