export type RegistrasiType = {
 sasaran: string;
 is_uraian: string;
 is_target: string;
 is_fisik: string;
 peristiwa: string;
 pemilik: string;
};

export const data: RegistrasiType[] = [
 {
  sasaran: "-",
  is_uraian: "-",
  is_target: "-",
  is_fisik: "-",
  peristiwa: "-",
  pemilik: "-",
 },
];

export const riskCategory = [
 "Risiko Lingkungan",
 "Risiko Sosial",
 "Risiko Geopolitik",
 "Risiko Ekonomi",
 "Risiko Teknologi",
];
