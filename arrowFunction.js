// Penulisan pertama
// Langsung menuliskan parameter (jika ada) dalam kurung lalu diikuti
// dengan tanda => dan kurung kurawal
// Apabila kode dalam blok program lebih dari satu baris
// harus menuliskan kurung kurawal dan return (opsional)
const salam = () => {
    let halo = `Halo!` //baris pertama
    return halo //baris kedua
}
console.log(salam())

// Penulisan kedua
// apabila satu parameter, kurung () tidak perlu
// apabila kode dalam { } hanya satu baris maka tanpa kurung { }
// Otomatis return tanpa keyword return
const salam2 = nama => `Halo, ${nama}`
console.log(salam2("awal"))

// Penulisan ketiga
// apabila lebih dari satu parameter
// maka wajib dikurung
const salam3 = (nama,waktu) => `Selamat ${waktu}, ${nama}!`
console.log(salam3("Rafiq", "Malam"))

