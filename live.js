function hitunganTotalBelanja(items) {
    let total = 0;

    for (let item of items) {
        total +=item.harga * item.jumlah;
    }
    return total;
}
console.log(hitunganTotalBelanja([
  { nama: "Buku", harga: 50000, jumlah: 2 },
  { nama: "Pulpen", harga: 15000, jumlah: 3 },
]));