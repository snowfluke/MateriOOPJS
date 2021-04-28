// Program hitung nilai akhir(kehadiran, tugas, uts, uas), grade, saran menggunakan percabangan
let rl = require("readline-sync")

class Mahasiswa{
    nim
    nama 
    absen
    nilaiAkhir

    constructor(nim, nama, absen, nilaiAkhir){
        this.nim = nim
        this.nama = nama
        this.absen = absen
        this.nilaiAkhir = nilaiAkhir

        this.daftarMhs =
        [
            {
                nim: "12312",
                nama: "Imam Fahrudin",
                kelas: "19.TI.A",
            },
            {
                nim:"12322",
                nama: "Awal Ariansyah",
                kelas: "19.TI.A",
            },
            {
                nim:"12355",
                nama: "Maknum Munib",
                kelas: "19.TI.A",
            },
            {
                nim:"11311",
                nama: "Nur Khamidah",
                kelas: "19.SI.A",
            },
            {
                nim:"11322",
                nama: "Ajeng Diana Sukma",
                kelas: "19.SI.A",
            },
            {
                nim:"11355",
                nama: "Novita Fitri Yani",
                kelas: "19.SI.A"
            }
        ]
    }
    mulai(){
        console.log(`Selamat datang di program penghitung nilai akhir ${this.namaDosen}`)
        this.tampilkanMhs()
    }

    tampilkanMhs(){
        console.log("=================================")
        for(let i= 0; i <= this.daftarMhs.length-1; i++){
            console.log(`${i}. ${this.daftarMhs[i].nim} . ${this.daftarMhs[i].nama} . ${this.daftarMhs[i].kelas}`)
        }
        this.inputNilaiMhs()
    }
    inputNilaiMhs(){
        console.log("=================================")
        let Mhs = rl.question(`Silahkan masukkan NIM Mahasiswa`)
        console.log("=================================")
        
        let cariMhs = this.daftarMhs.filter(cariMhs => Mhs.nim == Mhs)
        if(cariMhs){
            this.nilaiAkhir += this.daftarMhs[cariMhs].nim
            console.log(`Ingin input mahasiswa dengan NIM ${this.daftarMhs[cariMhs].nim}`)
            console.log(`Atas nama ${this.daftarMhs[cariMhs].nama}`)
            console.log(`Kelas : ${this.daftarMhs[cariMhs].kelas}`)
            console.log("==================================")

            let inputLagi = rl.question(`Apakah ingin memasukkan nilai lagi? (y/n)`)

            if(inputLagi == "y") return this.daftarMhs()
            return this.nilaiAkhir
        }
    }


    tampilkanHitung(){
        let absen = ((this.absen/14)*0.1)*100;
        let tugas = 0.2*this.tugas;
        let uts = 0.3*this.uts;
        let uas = 0.4*this.uas;
        let total = absen+tugas+uts+uas;

        var grade;
        if(total >= 80)
        {grade = "A";}
        else if(total >= 70)
        {grade = "B";}
        else if(total >= 60)
        {grade = "C";}
        else if(total >= 50)
        {grade = "D";}
        else
        {grade = "E"}
    }
    // Niatnya bikin program yang input Absen, Tugas, UTS, UAS
    // Setelah itu baru muncul nilaiAkhir, itu gimana?
    // Sudah cek tutor, tp kebanyakan yang HTML, kurang paham untuk diubah di sini
    masukanNilai(){
        let nilaiMhs = this.absen + this.tugas + this.uts + this.uas
    }
    nilaiAkhir(){
        console.log(`Mahasiswa dengan NIM ${this.nim}`)
        console.log(`Atas nama ${this.nama}`)
        console.log(`Kelas : ${this.kelas}`)
        return
        }

}
const Fahrudin = new Mahasiswa("Fahrudin")
Fahrudin.mulai
    
