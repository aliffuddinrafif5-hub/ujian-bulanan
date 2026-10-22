// Soal JS-1: Variabel, Tipe Data & Operator

// 1. Membuat variabel untuk menyimpan data toko
let namaToko = "Makmur Jaya";
let tahunBerdiri = 2012;
let sedangBuka = true;
let alamat = null;

// 2. Menampilkan tipe data masing-masing menggunakan typeof
console.log("Tipe data namaToko:", typeof namaToko);
console.log("Tipe data tahunBerdiri:", typeof tahunBerdiri);
console.log("Tipe data sedangBuka:", typeof sedangBuka);
console.log("Tipe data alamat:", typeof alamat);

// 3. Menghitung umur toko (tahun sekarang - tahunBerdiri)
const tahunSekarang = 2026;
let umurToko = tahunSekarang - tahunBerdiri;

// 4. Menggunakan template literal untuk menampilkan informasi toko
console.log(`Toko ${namaToko} sudah beroperasi selama ${umurToko} tahun.`);

function cekStatusPesanan(statusKode) {
  switch (statusKode) {
    case 1:
      return "Menunggu Pembayaran";
    case 2:
      return "Pembayaran Dikonfirmasi";
    case 3:
      return "Sedang Dikemas";
    case 4:
      return "Sedang Dikirim";
    case 5:
      return "Pesanan Diterima";
    default:
      return "Kode Status Tidak Valid";
  }
}

// Menguji fungsi dengan beberapa kode status
console.log(cekStatusPesanan(1));  // Output: Menunggu Pembayaran
console.log(cekStatusPesanan(3));  // Output: Sedang Dikemas
console.log(cekStatusPesanan(5));  // Output: Pesanan Diterima
console.log(cekStatusPesanan(99)); // Output: Kode Status Tidak Valid

// ============================================================
// Analisis Harga Produk
// Jalankan dengan: node analisis_harga_produk.js
// ============================================================

// Array berisi 10 harga produk
const hargaProduk = [45000, 120000, 75000, 550000, 89000, 340000, 620000, 25000, 95000, 450000];

// ------------------------------------------------------------
// a) for loop: hitung total dan rata-rata harga
// ------------------------------------------------------------
let total_Harga = 0;
for (let i = 0; i < hargaProduk.length; i++) {
  total_Harga += hargaProduk[i];
}
const rataRata = total_Harga / hargaProduk.length;

console.log("=== a) Total dan Rata-rata ===");
console.log(`Total harga seluruh produk: ${total_Harga}`);
console.log(`Rata-rata harga produk: ${rataRata}`);

// ------------------------------------------------------------
// b) while loop: cari produk pertama yang harganya di atas 500000
// ------------------------------------------------------------
let index = 0;
let produkDitemukan = false;

console.log("\n=== b) Produk Pertama di Atas 500000 ===");
while (index < hargaProduk.length) {
  if (hargaProduk[index] > 500000) {
    console.log(`Produk > 500000 pertama ada di indeks ${index} dengan harga ${hargaProduk[index]}`);
    produkDitemukan = true;
    break; // Berhenti setelah menemukan yang pertama
  }
  index++;
}

if (!produkDitemukan) {
  console.log("Tidak ada produk dengan harga di atas 500000.");
}

// ------------------------------------------------------------
// c) for...of: tampilkan semua harga di bawah 100000
// ------------------------------------------------------------
console.log("\n=== c) Harga di Bawah 100000 ===");
for (const harga of hargaProduk) {
  if (harga < 100000) {
    console.log(harga);
  }
}

// Membuat array daftarProduk berisi 8 item string
let daftarProduk = ["Kemeja", "Celana Jeans", "Sepatu", "Tas Ransel", "Topi", "Jaket", "Jam Tangan", "Kacamata"];
console.log("Daftar produk awal:", daftarProduk);

// a) Tambahkan 2 produk baru di akhir array (push)
daftarProduk.push("Dompet", "Ikat Pinggang");

// b) Tambahkan 1 produk di awal array (unshift)
daftarProduk.unshift("Kaos Polos");

// c) Hapus produk terakhir (pop) dan tampilkan produk yang dihapus
let produkDihapusAkhir = daftarProduk.pop();
console.log(`Produk terakhir yang dihapus: ${produkDihapusAkhir}`);

// d) Hapus produk pertama (shift) dan tampilkan produk yang dihapus
let produkDihapusAwal = daftarProduk.shift();
console.log(`Produk pertama yang dihapus: ${produkDihapusAwal}`);

// e) Cek apakah "Laptop" ada di dalam array (includes)
let adaLaptop = daftarProduk.includes("Laptop");
console.log(`Apakah "Laptop" ada di dalam array? ${adaLaptop}`);

// f) Cari posisi indeks "Sepatu" di array (indexOf)
let indexSepatu = daftarProduk.indexOf("Sepatu");
console.log(`Posisi indeks "Sepatu": ${indexSepatu}`);

// g) Ambil 3 produk dari indeks ke-2 tanpa mengubah array asli (slice)
let produkSlice = daftarProduk.slice(2, 5);
console.log("3 produk dari indeks ke-2 (slice):", produkSlice);

// h) Sisipkan produk baru "Mouse Wireless" di posisi indeks ke-3 (splice)
daftarProduk.splice(3, 0, "Mouse Wireless");
console.log("Daftar produk setelah disisipkan 'Mouse Wireless':", daftarProduk);

// i) Tampilkan jumlah total produk saat ini (.length)
console.log(`Jumlah total produk saat ini: ${daftarProduk.length}`);

// a) Function Declaration hitungDiskon(harga, persen)
function hitungDiskon(harga, persen) {
  let besarDiskon = harga * (persen / 100);
  return harga - besarDiskon;
}

// b) Function Expression hitungPPN dengan default parameter tarif PPN 11% (0.11)
const hitungPPN = function(harga, tarifPPN = 0.11) {
  return harga + (harga * tarifPPN);
};

// c) Arrow Function hitungOngkir berdasarkan jarak
const hitungOngkir = (jarak) => {
  if (jarak <= 10) {
    return 10000;
  } else if (jarak <= 25) {
    return 25000;
  } else {
    return 50000;
  }
};

// d) Arrow Function ringkas kuadrat
const kuadrat = (angka) => angka * angka;

// e) Menggabungkan fungsi a, b, dan c untuk menghitung total belanja
let hargaAwal = 200000;
let persenDiskon = 10; // 10%
let jarakKirim = 15;   // 15 km

// Perhitungan:
// 1. Hitung harga setelah diskon
let hargaSetelahDiskon = hitungDiskon(hargaAwal, persenDiskon);

// 2. Hitung harga setelah ditambah PPN dari harga diskon
let hargaDenganPPN = hitungPPN(hargaSetelahDiskon);

// 3. Hitung ongkir berdasarkan jarak
let biayaOngkir = hitungOngkir(jarakKirim);

// 4. Total belanja keseluruhan
let totalBelanja = hargaDenganPPN + biayaOngkir;

// Menampilkan hasil
console.log(`Harga Awal: Rp ${hargaAwal}`);
console.log(`Harga Setelah Diskon (${persenDiskon}%): Rp ${hargaSetelahDiskon}`);
console.log(`Harga + PPN 11%: Rp ${hargaDenganPPN}`);
console.log(`Biaya Ongkir (${jarakKirim} km): Rp ${biayaOngkir}`);
console.log(`Total Belanja Keseluruhan: Rp ${totalBelanja}`);

// Contoh uji fungsi kuadrat (d)
console.log(`Kuadrat dari 5 adalah: ${kuadrat(5)}`);

// Membuat object produkUnggulan
let produkUnggulan = {
  nama: "Smartphone Pro Max",
  kategori: "Elektronik",
  harga: 12000000,
  stok: 15,
  rating: 4.8,
  
  // i) Method tampilkanInfo() menggunakan this
  tampilkanInfo: function() {
    console.log(`Detail Produk: ${this.nama} (${this.kategori}) - Harga: Rp ${this.harga}, Stok: ${this.stok}`);
  }
};

// a) Akses properti "nama" menggunakan dot notation
console.log("a) Nama produk (dot notation):", produkUnggulan.nama);

// b) Akses properti "harga" menggunakan bracket notation dengan variabel
let kunciHarga = "harga";
console.log("b) Harga produk (bracket notation):", produkUnggulan[kunciHarga]);

// c) Tambahkan properti baru "diskon" (boolean)
produkUnggulan.diskon = true;
console.log("c) Properti diskon ditambahkan:", produkUnggulan.diskon);

// d) Hapus properti "rating" menggunakan delete
delete produkUnggulan.rating;
console.log("d) Properti 'rating' setelah dihapus:", produkUnggulan.rating); // Output: undefined

// e) Cek apakah properti "stok" ada menggunakan operator "in"
let cekStok = "stok" in produkUnggulan;
console.log("e) Apakah properti 'stok' ada?", cekStok);

// f) Iterasi seluruh properti menggunakan for...in
console.log("f) Iterasi properti dengan for...in:");
for (let key in produkUnggulan) {
  console.log(`   - ${key}: ${produkUnggulan[key]}`);
}

// g) Tampilkan semua key menggunakan Object.keys()
console.log("g) Semua key:", Object.keys(produkUnggulan));

// h) Tampilkan semua value menggunakan Object.values()
console.log("h) Semua value:", Object.values(produkUnggulan));

// i) Memanggil method tampilkanInfo()
console.log("i) Memanggil method tampilkanInfo():");
produkUnggulan.tampilkanInfo();

// a) Buat array warna dan iterasi menggunakan for...of
const warna = ["Merah", "Hijau", "Biru", "Kuning", "Ungu"];
console.log("a) Iterasi array warna menggunakan for...of:");
for (let itemWarna of warna) {
  console.log(itemWarna);
}

// b) Buat object mahasiswa dan iterasi menggunakan for...in
const mahasiswa = {
  nama: "Budi Santoso",
  nim: "2024001",
  jurusan: "Teknik Informatika",
  ipk: 3.85
};

console.log("\nb) Iterasi object mahasiswa menggunakan for...in:");
for (let key in mahasiswa) {
  console.log(`${key}: ${mahasiswa[key]}`);
}

// c) Iterasi string "JavaScript" karakter per karakter menggunakan for...of
console.log("\nc) Iterasi string 'JavaScript' karakter per karakter:");
for (let karakter of "JavaScript") {
  console.log(karakter);
}

const inputEmail = "  Budi.Santoso@GMAIL.COM  ";
const inputHarga = "250000.75";
const kalimat = "Selamat datang di Toko Elektronik Online";

// a) Bersihkan dan normalisasi email (trim + toLowerCase)
const emailNormal = inputEmail.trim().toLowerCase();
console.log("a) Email normal:", emailNormal);

// b) Cek apakah email mengandung "@gmail" (includes)
const mengandungGmail = emailNormal.includes("@gmail");
console.log("b) Apakah mengandung '@gmail'?", mengandungGmail);

// c) Cek apakah email diawali "budi" setelah dinormalisasi (startsWith)
const diawaliBudi = emailNormal.startsWith("budi");
console.log("c) Apakah diawali 'budi'?", diawaliBudi);

// d) Potong domain dari email (gunakan indexOf dan slice)
const indexAt = emailNormal.indexOf("@");
const domainEmail = emailNormal.slice(indexAt + 1);
console.log("d) Domain email:", domainEmail);

// e) Pecah kalimat menjadi array kata-kata (split)
const arrayKata = kalimat.split(" ");
console.log("e) Pecahan kata-kata:", arrayKata);

// f) Ganti kata "Elektronik" menjadi "Digital" (replace)
const kalimatBaru = kalimat.replace("Elektronik", "Digital");
console.log("f) Kalimat setelah diganti:", kalimatBaru);

// g) Konversi inputHarga ke Number menggunakan parseFloat
const hargaNumber = parseFloat(inputHarga);
console.log("g) Konversi ke Number:", hargaNumber, `(Tipe data: ${typeof hargaNumber})`);

// h) Tampilkan harga dengan 2 angka desimal (toFixed)
const hargaDesimal = hargaNumber.toFixed(2);
console.log("h) Harga dengan 2 desimal:", hargaDesimal);

// i) Tampilkan panjang kalimat (.length)
console.log(`i) Panjang kalimat: ${kalimat.length} karakter`);

// ==========================================
// a) Global Scope, Local Scope, & Block Scope
// ==========================================

// Global Scope
let globalVar = "Aku ada di Global Scope (bisa diakses di mana saja)";

function tesScope() {
  // Local Scope (Function Scope)
  let localVar = "Aku ada di Local Scope (hanya di dalam fungsi ini)";
  console.log(globalVar); // Berhasil: global diakses di dalam fungsi
  console.log(localVar);  // Berhasil: lokal diakses di dalam fungsinya sendiri
}
tesScope();

// console.log(localVar); // ERROR! localVar tidak bisa diakses di luar fungsi

// Block Scope (menggunakan let/const di dalam blok {})
if (true) {
  let blockVar = "Aku ada di Block Scope (hanya di dalam blok if ini)";
  const blockConst = "Aku juga block scope";
  var notBlockScoped = "Aku menggunakan var, jadi bocor keluar blok!";
  
  console.log(blockVar); // Berhasil
}

// console.log(blockVar); // ERROR! blockVar tidak bisa diakses di luar blok if
console.log(notBlockScoped); // Berhasil (karena 'var' tidak memiliki block scope)


// ==========================================
// b) Demonstrasi Hoisting
// ==========================================

// 1. Function Declaration (Berhasil karena di-hoist sepenuhnya)
sapa("Budi"); 

function sapa(nama) {
  console.log(`Halo, ${nama}! (Demonstrasi Hoisting Function)`);
}

// 2. Variabel var sebelum deklarasi (Menghasilkan undefined)
console.log("Nilai varSebelumDeklarasi:", varSebelumDeklarasi); // Output: undefined
var varSebelumDeklarasi = "Variabel var berhasil di-hoist";

// 3. Variabel let sebelum deklarasi (Menghasilkan ReferenceError)
try {
  // console.log(letSebelumDeklarasi); // Baris ini jika dibuka akan melempar error
  let letSebelumDeklarasi = "Variabel let";
} catch (error) {
  console.log("Error let hoisting:", error.message);
  // Penjelasan: Variabel let/const mengalami hoisting, tetapi berada di "Temporal Dead Zone" (TDZ)
  // sehingga JavaScript melarang mengaksesnya sebelum baris deklarasinya dieksekusi.
}


// ==========================================
// c) Closure & Data Independen
// ==========================================

function buatKeranjang() {
  // Variabel privat (tertutup dalam closure)
  let items = [];
  let totalHarga = 0;

  return {
    tambahItem: function(nama, harga) {
      items.push({ nama, harga });
      totalHarga += harga;
      console.log(`Berhasil menambahkan ${nama} ke keranjang.`);
    },
    hapusItem: function(nama) {
      let index = items.findIndex(item => item.nama === nama);
      if (index !== -1) {
        totalHarga -= items[index].harga;
        console.log(`Menghapus ${nama} dari keranjang.`);
        items.splice(index, 1);
      } else {
        console.log(`Item ${nama} tidak ditemukan di keranjang.`);
      }
    },
    lihatKeranjang: function() {
      console.log("--- Isi Keranjang ---");
      if (items.length === 0) {
        console.log("Keranjang kosong.");
      } else {
        items.forEach((item, i) => {
          console.log(`${i + 1}. ${item.nama} - Rp ${item.harga}`);
        });
      }
      console.log(`Total Harga: Rp ${totalHarga}\n`);
    }
  };
}

// Membuat dua instance keranjang yang independen
const keranjang1 = buatKeranjang();
const keranjang2 = buatKeranjang();

console.log("=== Keranjang 1 ===");
keranjang1.tambahItem("Buku Tulis", 5000);
keranjang1.tambahItem("Pulpen", 3000);
keranjang1.lihatKeranjang();

console.log("=== Keranjang 2 ===");
keranjang2.tambahItem("Tas Sekolah", 150000);
keranjang2.lihatKeranjang();

// Membuktikan bahwa data keranjang1 tidak terpengaruh oleh keranjang2
console.log("=== Cek Kembali Keranjang 1 (Data Independen) ===");
keranjang1.lihatKeranjang();

// a) Membuat Date object untuk waktu saat ini dan menampilkan tanggal lengkap format Indonesia
const sekarang = new Date(); // Karena tahun sistem adalah 2026

const opsiFormat = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};

// Menggunakan locale 'id-ID' untuk format bahasa Indonesia
const tanggalLengkap = sekarang.toLocaleDateString('id-ID', opsiFormat);
console.log("a) Tanggal hari ini:", tanggalLengkap);


// b) Menghitung berapa hari lagi menuju Tahun Baru (1 Januari tahun depan)
const tahunDepan = sekarang.getFullYear() + 1;
const tahunBaru = new Date(`January 1, ${tahunDepan} 00:00:00`);
const selisihWaktu = tahunBaru - sekarang;
const selisihHari = Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24));

console.log(`b) Menuju Tahun Baru ${tahunDepan}: ${selisihHari} hari lagi.`);


// c) Fungsi formatTanggalIndonesia(date) yang mengembalikan "DD/MM/YYYY"
function formatTanggalIndonesia(date) {
  let hari = String(date.getDate()).padStart(2, '0');
  let bulan = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
  let tahun = date.getFullYear();

  return `${hari}/${bulan}/${tahun}`;
}

console.log("c) Contoh formatTanggalIndonesia:", formatTanggalIndonesia(sekarang));


// d) Membuat Date object untuk tanggal lahir dan menghitung umur dalam hari
// Contoh tanggal lahir: 15 Agustus 2000
const tanggalLahir = new Date("2000-08-15");
const selisihLahirMs = sekarang - tanggalLahir;
const umurDalamHari = Math.floor(selisihLahirMs / (1000 * 60 * 60 * 24));

console.log(`d) Umur dalam hari (lahir 15 Agustus 2000): ${umurDalamHari} hari.`);

// ==========================================
// a) Object Destructuring
// ==========================================
const pesanan = {
  idPesanan: "ORD-001",
  pelanggan: "Budi",
  totalHarga: 750000,
  statusBayar: true,
  alamatKirim: "Jl. Merdeka No. 10"
};

// 1. Destructure idPesanan, pelanggan, dan totalHarga
const { idPesanan, pelanggan, totalHarga } = pesanan;
console.log(`a) Pesanan ${idPesanan} oleh ${pelanggan} dengan total Rp ${totalHarga}`);

// 2. Destructure dengan rename: statusBayar menjadi sudahBayar
const { statusBayar: sudahBayar } = pesanan;
console.log(`   Status bayar (sudahBayar): ${sudahBayar}`);

// 3. Destructure dengan default value: kurirPengiriman = "JNE"
const { kurirPengiriman = "JNE" } = pesanan;
console.log(`   Kurir pengiriman: ${kurirPengiriman}`);

// 4. Destructure langsung di parameter fungsi
function cetakPesanan({ idPesanan, pelanggan }) {
  console.log(`   [cetakPesanan] ID: ${idPesanan}, Pelanggan: ${pelanggan}`);
}
cetakPesanan(pesanan);


// ==========================================
// b) Array Destructuring
// ==========================================
const koordinat = [106.8456, -6.2088, "Jakarta", "Indonesia"];

// 1. Ambil elemen pertama dan kedua (longitude, latitude)
const [longitude, latitude] = koordinat;
console.log(`\nb) Longitude: ${longitude}, Latitude: ${latitude}`);

// 2. Lewati elemen ketiga, ambil elemen keempat (negara) menggunakan koma kosong
const [, , , negara] = koordinat;
console.log(`   Negara (elemen ke-4): ${negara}`);

// 3. Tukar nilai dua variabel menggunakan array destructuring
let a = 10;
let b = 20;
console.log(`   Sebelum ditukar: a = ${a}, b = ${b}`);
[a, b] = [b, a];
console.log(`   Setelah ditukar: a = ${a}, b = ${b}`);


// ==========================================
// c) Spread Operator
// ==========================================
// 1. Salin array tanpa referensi (independent copy)
const buahOriginal = ["Apel", "Mangga", "Jeruk"];
const buahSalinan = [...buahOriginal];
buahSalinan.push("Anggur");
console.log("\nc) Array original:", buahOriginal);
console.log("   Array salinan (dengan tambahan):", buahSalinan);

// 2. Gabungkan 2 array produk dengan elemen baru di tengah
const kategoriA = ["Kemeja", "Celana"];
const kategoriB = ["Topi", "Sepatu"];
const gabunganProduk = [...kategoriA, "Jaket Baru", ...kategoriB];
console.log("   Gabungan produk:", gabunganProduk);

// 3. Salin object dan timpa salah satu properti (update harga)
const produkAsli = { nama: "Mouse", harga: 150000, stok: 10 };
const produkUpdate = { ...produkAsli, harga: 175000 };
console.log("   Produk asli:", produkAsli);
console.log("   Produk setelah update harga:", produkUpdate);

// 4. Gunakan spread untuk menemukan nilai max dari array angka
const deretAngka = [45, 12, 89, 34, 67];
const nilaiMax = Math.max(...deretAngka);
console.log(`   Nilai max dari array [${deretAngka}] adalah: ${nilaiMax}`);


// ==========================================
// d) Rest Parameter
// ==========================================
// 1. Fungsi hitungRataRata(...angka)
function hitungRataRata(...angka) {
  if (angka.length === 0) return 0;
  let total = angka.reduce((akumulator, nilai) => akumulator + nilai, 0);
  return total / angka.length;
}
console.log(`\nd) Rata-rata (80, 90, 75, 85): ${hitungRataRata(80, 90, 75, 85)}`);

// 2. Fungsi buatPesanan(namaPemesan, ...daftarMenu)
function buatPesanan(namaPemesan, ...daftarMenu) {
  console.log(`   Pesanan atas nama: ${namaPemesan}`);
  console.log(`   Jumlah menu dipesan: ${daftarMenu.length} item`);
  console.log("   Daftar menu:");
  daftarMenu.forEach((menu, index) => {
    console.log(`     ${index + 1}. ${menu}`);
  });
}
buatPesanan("Siti", "Nasi Goreng", "Es Teh Manis", "Ayam Bakar");