# Program Manajemen Nilai Ujian
# Inisialisasi array statis dengan nilai ujian
nilai_siswa = [85, 92, 78, 95, 88]

def tampilkan_nilai():
    print("\nDaftar Nilai Ujian:")
    for i, nilai in enumerate(nilai_siswa, 1):
        print(f"Siswa {i}: {nilai}")

def hitung_rata_rata():
    total = sum(nilai_siswa)
    rata_rata = total / len(nilai_siswa)
    return rata_rata

def cari_nilai_tertinggi_terendah():
    nilai_tertinggi = max(nilai_siswa)
    nilai_terendah = min(nilai_siswa)
    return nilai_tertinggi, nilai_terendah

# Program Utama
print("Program Manajemen Nilai Ujian")
print("============================")

# 1. Menampilkan semua nilai yang tersimpan
tampilkan_nilai()

# 2. Menghitung dan menampilkan rata-rata
rata_rata = hitung_rata_rata()
print(f"\nRata-rata nilai: {rata_rata:.2f}")

# 3. Menampilkan nilai tertinggi dan terendah
nilai_max, nilai_min = cari_nilai_tertinggi_terendah()
print(f"\nNilai tertinggi: {nilai_max}")
print(f"Nilai terendah: {nilai_min}")