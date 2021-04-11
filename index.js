let Kubus = {
    sisi: 10,
    tampilkanVolume(sisiMasukan = this.sisi){
        // sisiMasukan merupakan variable dinamis atau
        // biasa disebut parameter, yang nilainya sesuai
        // dengan inputan user ketika memasukan data di dalam kurung
        // sisiMasukan = this.sisi berarti parameter sisi masukan akan
        // diisi default dengan nilai sisi apabila user tidak mengirimkan
        // argumen ke dalam parameter
        this.sisi = sisiMasukan

        // Definisikan rumus
        let rumus = this.sisi * this.sisi * this.sisi,

        // Tampilkan rumus
        console.log('Volume kubus tersebut adalah ', rumus)
    }
}

console.log(Kubus.tampilkanVolume())
// Kode diatas akan menghasilkan output: 1000
// karena kita tidak mengirimkan argumen ke parameter
// sehingga nilai default sisi adalah 10

console.log(Kubus.tampilkanVolume(12))
// Kode diatas mengirimkan data 12 dimana di dalam
// method tampilkanVolume, data tersebut akan ditampung
// di parameter sisiMasukan
// Sehingga outputnya adalah 1728

