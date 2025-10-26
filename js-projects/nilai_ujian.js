// Program Manajemen Nilai Ujian dalam JavaScript

// Inisialisasi array statis dengan nilai ujian
const nilaiSiswa = [85, 92, 78, 95, 88];

// Fungsi untuk menampilkan semua nilai
function tampilkanNilai() {
    console.log("\nDaftar Nilai Ujian:");
    nilaiSiswa.forEach((nilai, index) => {
        console.log(`Siswa ${index + 1}: ${nilai}`);
    });
}

// Fungsi untuk menghitung rata-rata
function hitungRataRata() {
    const total = nilaiSiswa.reduce((sum, nilai) => sum + nilai, 0);
    return total / nilaiSiswa.length;
}

// Fungsi untuk mencari nilai tertinggi dan terendah
function cariNilaiTertinggiTerendah() {
    const nilaiTertinggi = Math.max(...nilaiSiswa);
    const nilaiTerendah = Math.min(...nilaiSiswa);
    return { nilaiTertinggi, nilaiTerendah };
}

// Program Utama
console.log("Program Manajemen Nilai Ujian");
console.log("============================");

// 1. Menampilkan semua nilai yang tersimpan
tampilkanNilai();

// 2. Menghitung dan menampilkan rata-rata
const rataRata = hitungRataRata();
console.log(`\nRata-rata nilai: ${rataRata.toFixed(2)}`);

// 3. Menampilkan nilai tertinggi dan terendah
const { nilaiTertinggi, nilaiTerendah } = cariNilaiTertinggiTerendah();
console.log(`\nNilai tertinggi: ${nilaiTertinggi}`);
console.log(`Nilai terendah: ${nilaiTerendah}`);