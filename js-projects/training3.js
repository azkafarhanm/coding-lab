// Contoh Program Penggunaan Metode Array .forEach()

const daftarSiswa = ["Andi", "Budi", "Siti", "Joko"];

console.log("Memulai iterasi menggunakan .forEach():");

// .forEach() menerima sebuah fungsi callback yang akan dijalankan
// untuk setiap elemen dalam array.
daftarSiswa.forEach(function(nama, indeks) {
  // Argumen pertama (nama): Nilai elemen saat ini
  // Argumen kedua (indeks, opsional): Indeks elemen saat ini
  console.log('Indeks ${indeks}: Siswa bernama ${nama}');
});

console.log("Iterasi selesai.");

// --- Contoh menggunakan Arrow Function (lebih ringkas) ---

const angka = [10, 20, 30, 40];
let total = 0;

console.log("\nMenghitung total elemen array menggunakan .forEach() (Arrow Function):");

angka.forEach(nilai => {
  total += nilai;
});

console.log("Array Angka:", angka);
console.log("Total keseluruhan nilai:", total);