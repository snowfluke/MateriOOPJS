// Program hitung nilai akhir(kehadiran, tugas, uts, uas), grade, saran menggunakan percabangan
let rl = require("readline-sync")
let mhs = [
            {
                nim: "12312",
                nama: "Imam Fahrudin",
                kelas: "19.TI.A"
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

class Penilaian{
    constructor(dosen, mapel, daftarMhs){
        this.dosen = dosen || false
        this.mapel = mapel || false

        this.daftarMhs = daftarMhs
    }
    
    mulai(){
        console.log(`Selamat datang di program penghitung nilai akhir!`)
        return this.tampilkanMhs()
    }

    tampilkanMhs(){
        console.log("=================================")
        for(let i= 0; i <= this.daftarMhs.length-1; i++){
            console.log(`${i}. ${this.daftarMhs[i].nim} . ${this.daftarMhs[i].nama} . ${this.daftarMhs[i].kelas}`)
        }
        
        return this.inputNilaiMhs()
    }
    
    inputNilaiMhs(){
        console.log("=================================")
        let cariNim = rl.question(`Silahkan masukkan NIM Mahasiswa: `)
        console.log("=================================")
        
        let arrayNim = this.daftarMhs.map( mhs => mhs.nim )
        
        let indexByNim = arrayNim
        	.map( (nim, id) => nim == cariNim ? id : 'kosong')
        	.filter(n => n != 'kosong')[0]
        
        let cariMhs = this.daftarMhs[indexByNim]
        
        if(cariMhs){
        
            console.log(`NIM: ${cariMhs.nim}`)
            console.log(`Nama: ${cariMhs.nama}`)
            console.log(`Kelas: ${cariMhs.kelas}`)
            console.log("==================================")

            let inputLagi = rl.question(`Apakah ingin memasukkan nilai? (y/n)`)

            if(inputLagi == "y") return this.tampilkanHitung(cariMhs.nim)
            
            return this.end()
        }
        
        console.log("Mahasiswa dengan NIM tersebut tidak ada!")
        console.log("==============================")
        return this.mulai()
    }


    tampilkanHitung(nim){
    	let nimMhs = nim
    	
    	let nAbsen = rl.question(`Masukan jumlah kehadiran 1 semester: `)
    	let nTugas = rl.question(`Masukan nilai tugas: `)
    	let nUts = rl.question(`Masukan nilai UTS: `)
    	let nUas = rl.question(`Masukan nilai UAS: `)
    	
    	console.log("==============================")
    	
        let absen = ((nAbsen/14)*0.1)*100;
        let tugas = 0.2*nTugas;
        let uts = 0.3*nUts;
        let uas = 0.4*nUas;
        let total = absen+tugas+uts+uas;
        let grade;
        
		if(total >= 80) grade = "A"
		if(total >= 70) grade = "B"
		if(total >= 60) grade = "C"
		if(total >= 50) grade = "D"
		if(total >= 80) grade = "E"
		
		return this.tampilkanHasil(total, grade)
    }
    
    tampilkanHasil(nilaiAkhir, kategori){
    	console.log(`Mata kuliah: ${this.mapel}`)
    	console.log(`Dosen: ${this.dosen}`)
    	console.log(`Nilai Akhir: ${nilaiAkhir}`)
    	console.log(`Kategori: ${kategori}`)
    	console.log("==============================")
    	let again = rl.question(`Apakah ingin menghitung nilai lagi? (y/n)`)
    	if(again == "y") return this.mulai()
    	
    	return this.end()
    }
        
    end(){
    	console.log("Terima kasih telah menggunakan program")
    }

}
const PBO = new Penilaian("Beny Riswanto", "PBO", mhs)
PBO.mulai()
    
