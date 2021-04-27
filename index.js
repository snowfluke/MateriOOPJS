const baca = require('readline-sync')
const daftarOrang = ['diky','wily','munib','resti','tia']

class Arisan{
    constructor(daftarMember){
        this.daftarPemenang = []
        this.daftarMember = daftarMember
    }

    main(){
        console.log("=============");
        console.log("Selamat datang di program arisan")
        console.log("=============");
        console.log("1. Tampilkan member arisan")
        console.log("2. Tambah member")
        console.log("3. Undi")
        console.log("4. Tampilkan daftar pemenang")
        console.log("=============");
        this.tangkapUser()
    }

    tangkapUser(){
        let inputan = baca.question("Masukkan pilihan: ")
        console.log("=============");

        switch(parseInt(inputan)){
            case 1:
                this.tampilkanMember()
                break;
            case 2:
                this.tambahMember()
                break;
            case 3:
                this.undi()
                break;
            case 4:
                this.tampilkanDaftarPemenang()
                break;
            default:
                console.log("Mohon masukkan inputan yang valid!")
                break;
        }
    }

    tampilkanMember(){
        console.log("=============");
        this.daftarMember.forEach((el, id) => console.log(`${id+1}. ${el}`))
        return this.main()
    }

    tambahMember(){
        let namaBaru = baca.question("Masukkan nama member baru: ")
        this.daftarMember.push(namaBaru)
        console.log(`Berhasil menambahkan member ${namaBaru}`);
        return this.main()
    }

    undi(){
        let nomorUndian = Math.floor(Math.random() * (this.daftarMember.length-1))
        let pemenang = this.daftarMember[nomorUndian]

        console.log(`Pemenang arisan hari ini adalah ${pemenang}`)
        this.daftarPemenang.push(pemenang)

        this.daftarMember[nomorUndian] = undefined;
        this.daftarMember = this.daftarMember.filter(el => el != undefined)

        return this.main()
    }

    tampilkanDaftarPemenang(){
        console.log("=============");
        this.daftarPemenang.forEach((el, id) => console.log(`${id+1}. ${el}`))
        return this.main()
    }

}

const ArisanPKK = new Arisan(daftarOrang)
ArisanPKK.main()