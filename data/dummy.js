import Bandara from "../models/Bandara";
import Maskapai from "../models/Maskapai";
import Jadwal from "../models/Jadwal";

export const BANDARA = [
    new Bandara("CGK", "Soekarno Hatta"),
    new Bandara("DPS", "Ngurah Rai"),
    new Bandara("SUB", "Juanda"),
    new Bandara("BTH", "Hang Nadim"),
    new Bandara("PLM", "Sultan Mahmud Badaruddin II"),
    new Bandara("PKU", "Sultan Syarif Kasim II"),
    new Bandara("MES", "Polonia"),
    new Bandara("UPG", "Hasanuddin"),
    new Bandara("PDG", "Minangkabau"),
    new Bandara("KNO", "Kualanamu"),
    new Bandara("KOE", "El Tari"),
    new Bandara("DJB", "Sultan Thaha"),
    new Bandara("BDO", "Husein Sastranegara"),
    new Bandara("SRG", "Achmad Yani"),
    new Bandara("JOG", "Adisutjipto"),
    new Bandara("SOC", "Adi Sumarmo"),
    new Bandara("MLG", "Abdul Rachman Saleh"),
    new Bandara("BPN", "Sepinggan"),
    new Bandara("PNK", "Supadio"),
    new Bandara("TKG", "Radin Inten II")
];

export const MASKAPAI = [
    new Maskapai("GA", "Garuda Indonesia", "GA.png"),
    new Maskapai("SJ", "Sriwijaya Air", "SJ.png"),
    new Maskapai("QG", "Citilink", "QG.png"),
    new Maskapai("JT", "Lion Air", "JT.png"),
    new Maskapai("QZ", "Air Asia", "QZ.png"),
    new Maskapai("IW", "Wings Air", "IW.png"),
    new Maskapai("ID", "Batik Air", "ID.png"),
];

export const JADWAL = [
    new Jadwal(1, "CGK", "DPS", "GA", "2022-10-12", "1.000.000"),
    new Jadwal(2, "CGK", "DPS", "SJ", "2022-10-12", "850.000"),
    new Jadwal(3, "CGK", "DPS", "QG", "2022-10-12", "900.000"),
    new Jadwal(4, "CGK", "DPS", "JT", "2022-10-12", "600.000"),
    new Jadwal(5, "CGK", "DPS", "QZ", "2022-10-12", "550.000"),
    new Jadwal(6, "CGK", "DPS", "IW", "2022-10-12", "700.000"),
    new Jadwal(7, "CGK", "DPS", "ID", "2022-10-12", "600.000"),
    new Jadwal(8, "CGK", "TKG", "GA", "2022-10-12", "900.000"),
    new Jadwal(9, "CGK", "TKG", "SJ", "2022-10-12", "800.000"),
    new Jadwal(10, "CGK", "TKG", "QG", "2022-10-12", "650.000"),
    new Jadwal(11, "CGK", "TKG", "JT", "2022-10-12", "650.000"),
    new Jadwal(12, "CGK", "TKG", "QZ", "2022-10-12", "550.000"),
    new Jadwal(13, "CGK", "TKG", "IW", "2022-10-12", "790.000"),
    new Jadwal(14, "CGK", "TKG", "ID", "2022-10-12", "680.000")
];


