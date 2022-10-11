class Jadwal{
    constructor(jadwal_id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id, tanggal, harga){
        this.jadwal_id = jadwal_id;
        this.bandara_kode_keberangkatan = bandara_kode_keberangkatan;
        this.bandara_kode_tujuan = bandara_kode_tujuan;
        this.maskapai_id = maskapai_id;
        this.tanggal = tanggal;
        this.harga = harga;
    }
}

export default Jadwal;