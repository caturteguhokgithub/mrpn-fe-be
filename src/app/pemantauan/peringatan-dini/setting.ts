export const listTindakLanjut = [
 { id: "1", value: "1", label: "Belum ditindaklanjuti" },
 { id: "2", value: "2", label: "Proses tindaklanjut" },
 { id: "3", value: "3", label: "Selesai ditindaklanjuti" },
];

export type PeringatanType = {
 peristiwa: string;
 konteks: string;
 nilai: number;
 pengendalian: number;
 tindaklanjut: number;
};

export const data: PeringatanType[] = [
 {
  peristiwa: "Peristiwa risiko 1",
  konteks: "Konteks strategis 1",
  nilai: 3,
  pengendalian: 1,
  tindaklanjut: 2,
 },
 {
  peristiwa: "Peristiwa risiko 2",
  konteks: "Konteks strategis 2",
  nilai: 3,
  pengendalian: 2,
  tindaklanjut: 3,
 },
 {
  peristiwa: "Peristiwa risiko 3",
  konteks: "Konteks strategis 3",
  nilai: 3,
  pengendalian: 1,
  tindaklanjut: 1,
 },
 {
  peristiwa: "Peristiwa risiko 4",
  konteks: "Konteks strategis 4",
  nilai: 3,
  pengendalian: 2,
  tindaklanjut: 3,
 },
];
