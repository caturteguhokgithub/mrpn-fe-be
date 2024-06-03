import { Task } from "frappe-gantt";

export type Konstra = {
 tahun: number | string;
 lokasi: string;
 nama_pkppr: string;
 latar_belakang: string;
 ruang_lingkup: string;
 kl_utama: string;
};

export const data: Konstra[] = [
 {
  tahun: "-",
  lokasi: "-",
  nama_pkppr: "-",
  kl_utama: "-",
  latar_belakang:
   "Munculnya kompetitor beberapa negara Asia yang sedang menyiapkan kawasan industri baru, untuk menarik investor yang akan keluar dari China, maka Indonesia ingin membangun kawasan industri yang menarik dan ramah investasi",
  ruang_lingkup:
   "Penyediaan Lahan, Pembangunan Infrastruktur, Investasi Industri, Operasional dan Pemeliharaan Kawasan",
 },
];

export const tasks = [
 {
  id: "Task 1",
  name: "Sistem penyediaan air minum, pengelolaan limbah",
  start: "2025-12-28",
  end: "2029-12-31",
  // progress: 10,
  // dependencies: "",
 },
 {
  id: "Task 2",
  name: "Redesign website",
  start: "2025-12-28",
  end: "2029-12-31",
  // progress: 90,
  // //   dependencies: "Task 1",
  // dependencies: "",
 },
 {
  id: "Task 3",
  name: "Redesign website",
  start: "2025-12-28",
  end: "2029-12-31",
  // progress: 50,
  // //   dependencies: "Task 2, Task 1",
  // dependencies: "",
 },
 {
  id: "Task 4",
  name: "Redesign website",
  start: "2025-12-28",
  end: "2029-12-31",
  // progress: 20,
  // //   dependencies: "Task 2, Task 1",
  // dependencies: "",
 },
 {
  id: "Task 5",
  name: "Redesign website",
  start: "2025-12-28",
  end: "2028-12-31",
  // progress: 70,
  // //   dependencies: "Task 2, Task 1",
  // dependencies: "",
 },
] as Task[];
