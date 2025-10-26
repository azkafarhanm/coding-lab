//Program Manajemen Nilai Ujian dalam JavaScript

//Inisialisasi array statis dengan nilai ujian
const nilaiSiswa = [85, 92, 78, 95, 88];

//Fungsi untuk menampilkan semua nilai
function tampilkanNilai() {
    console.log("\nDaftar Nilai Ujian:");
    nilaiSiswa.forEach((nilai, index) => {
        console.log(`Siswa ${index + 1}; ${nilai}`);
    })}

    //Fungsi untuk menghitung rata-rata
function hitungRataRata() {
    const total = nilaiSiswa.reduce((sum, nilai) => sum + nilai, 0);
    return total / nilaiSiswa.length;
}