// PROGRAM RESTORAN

class Restoran{
    nama
    menu
    totalBayar

    constructor(nama){
        this.nama = nama
        this.totalBayar = 0
        
        this.menu =
    		[
        		{
            		makanan: "ayam bakar",
            		harga: 10_000
        		},
        		{
            		makanan: "nasi bakar",
            		harga: 12_000
        		}
    		
    		]
    }

    welcome(){
        console.log(`Selamat datang di restoran ${this.nama}`)
        this.tampilkanMenu()
    }

    tampilkanMenu(){
    	console.log("=======================================")
        for(let i = 0; i <= this.menu.length-1; i++){
            console.log(`${i}. ${this.menu[i].makanan} - Rp. ${this.menu[i].harga}`)
        }

        this.berikanPilihan()
    }

    berikanPilihan(){
    	console.log("=======================================")
        let pilihan = prompt(`Apa yang ingin anda pesan? `)
		console.log("=======================================")
		
        if(this.menu[pilihan]){
            this.totalBayar += this.menu[pilihan].harga
            console.log(`Terima kasih telah memesan ${this.menu[pilihan].makanan}`)
            console.log(`Harga pesanan adalah Rp. ${this.menu[pilihan].harga}`)
            console.log("=======================================")

            let pesanLagi = prompt(`Apakah anda ingin memesan makanan lagi? (y/n) `)
            
            if(pesanLagi == "y") return this.tampilkanMenu()
            return this.total()
        }

        console.log("Mohon berikan pesanan yang masuk akal!" )
        this.berikanPilihan()
    }

    total(){
        console.log(`Terima kasih telah makan di restoran ${this.nama}`)
        console.log(`Silahkan membayar Rp. ${this.totalBayar}`)
        console.log("=======================================")
        console.log(`Terima kasih`)
        return
    }

}

const alelResto = new Restoran("Awal")
alelResto.welcome()

