import React from "react";
import "gantt-task-react/dist/index.css";
import dayjs from "dayjs";

export type TaskType = "task" | "milestone" | "project";

export interface Task {
    start: Date;
    end: Date;
    name: string;
    id: string;
    type: TaskType;
    progress: number;
    dependencies: string[];
    styles?: React.ReactNode | any;
    pj:string;
    sumber_anggaran:string;
}

export const TasksCriticalStunting = [
    {
        id: "tcst-1",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Suplementasi gizi mikro pada balita",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcst-2",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name:
            "Penyediaan PMT bagi balita bermasalah gizi (termasuk balita dengan BB tidak bertambah sesuai usia/ (weight faltering)",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcst-3",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Tata laksana balita gizi buruk",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcst-4",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Penanggulangan kurang energi kronik (KEK) pada ibu hamil",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcst-5",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Pendampingan pada setiap keluarga 1000 HPK",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcst-6",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Infrakstruktur air minum berbasis Masyarakat",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcst-7",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Bantuan pangan bagi keluarga 1000 HPK",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcst-8",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Pendampingan terhadap Ibu hamil dan Ibu Pasca melahirkan",
        type: "task",
        progress: 0,
        dependencies: []
    }
] as Task[];

export const TasksCriticalSampah = [
    {
        id: "tcsp-1",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2025-12-31").toDate(),
        name: "Proyek/RO O (tidak ada keterkaitan dengan lanjutannya)",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcsp-2",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2025-12-31").toDate(),
        name: "Penguatan regulasi pengelolaan sampah",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-3"]
    },
    {
        id: "tcsp-3",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2025-12-31").toDate(),
        name: "Pengembangan data dan sistem informasi pengelolaan persampahan",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-2"]
    },
    {
        id: "tcsp-4",
        start: dayjs("2026-1-1").toDate(),
        end: dayjs("2026-12-31").toDate(),
        name: "Peningkatan kapasitas dan pendanaan mendorong persampahan",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-5", "tcsp-7"]
    },
    {
        id: "tcsp-5",
        start: dayjs("2026-1-1").toDate(),
        end: dayjs("2026-12-31").toDate(),
        name: "Penguatan regulasi pengelolaan sampah",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-4", "tcsp-6", "tcsp-9"]
    },
    {
        id: "tcsp-6",
        start: dayjs("2026-1-1").toDate(),
        end: dayjs("2026-12-31").toDate(),
        name: "Penyediaan data sampah yang aktual dan akurat",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-6"]
    },
    {
        id: "tcsp-7",
        start: dayjs("2027-1-1").toDate(),
        end: dayjs("2027-12-31").toDate(),
        name: "Pengembangan perangkat pendukung terkait kualifikasi SDM persampahan",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-10"]
    },
    {
        id: "tcsp-8",
        start: dayjs("2027-1-1").toDate(),
        end: dayjs("2027-12-31").toDate(),
        name: "Pengembangan kerjasama dan investasi pendanaan pengelolaan sampah ",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-10"]
    },
    {
        id: "tcsp-9",
        start: dayjs("2027-1-1").toDate(),
        end: dayjs("2027-12-31").toDate(),
        name: "Pembinaan dan pengawasan sistem pengelolaan sampah",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-11"]
    },
    {
        id: "tcsp-10",
        start: dayjs("2028-1-1").toDate(),
        end: dayjs("2028-12-31").toDate(),
        name:
            "Pengembangan skema insentif untuk mendorong pemanfaatan teknologi tepat guna",
        type: "task",
        progress: 0,
        dependencies: ["tcsp-12"]
    },
    {
        id: "tcsp-11",
        start: dayjs("2028-1-1").toDate(),
        end: dayjs("2028-12-31").toDate(),
        name: "Pembinaan dan pengawasan sistem pengelolaan sampah",
        type: "task",
        progress: 0,
        dependencies: []
    },
    {
        id: "tcsp-12",
        start: dayjs("2029-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Pengembangan sirkular ekonomi persampahan",
        type: "task",
        progress: 0,
        dependencies: []
    }
] as Task[];

export const TasksCriticalPariwisata = [
    {
        id: "tcpw-1",
        start: dayjs("2025-1-1").toDate(),
        end: dayjs("2025-12-31").toDate(),
        name: "Penyusunan IPRO dan Identifikasi Peluang Investasi",
        type: "task",
        progress: 0,
        dependencies: ["tcpw-2"]
    },
    {
        id: "tcpw-2",
        start: dayjs("2026-1-1").toDate(),
        end: dayjs("2026-12-31").toDate(),
        name: "Pengembangan Strategi Promosi Investasi",
        type: "task",
        progress: 0,
        dependencies: ["tcpw-3"]
    },
    {
        id: "tcpw-3",
        start: dayjs("2027-1-1").toDate(),
        end: dayjs("2027-12-31").toDate(),
        name: "Penguatan infrastruktur pariwisata di destinasi prioritas",
        type: "task",
        progress: 0,
        dependencies: ["tcpw-4"]
    },
    {
        id: "tcpw-4",
        start: dayjs("2028-1-1").toDate(),
        end: dayjs("2028-12-31").toDate(),
        name:
            "Pengembangan produk pariwisata unggulan dan diversifikasi pengalaman wisata",
        type: "task",
        progress: 0,
        dependencies: ["tcpw-5"]
    },
    {
        id: "tcpw-5",
        start: dayjs("2029-1-1").toDate(),
        end: dayjs("2029-12-31").toDate(),
        name: "Evaluasi dan Peningkatan Berkelanjutan",
        type: "task",
        progress: 0,
        dependencies: []
    }
] as Task[];
