const Produk = require("../models/produk");

const produkIndex = async (req, res) => {
    try {
        const produk = await Produk.find({});
        res.status(200).json({ message: 'Success', data: produk });
    } catch (error) {
        res.status(400).json({ message: "Failed", error: error.message }); // Tampilkan error message yang lebih spesifik
    }
}

const produkInsert = async (req, res) => {
    try {
        const { nama, deskripsi, harga, stok  } = req.body;

        // Validasi data jika diperlukan (contoh: kategori_id harus diisi)
        

        const produk = new Produk({
            nama,
            deskripsi,
            harga,
            stok
            
        });

        // Simpan produk ke database
        await produk.save();
        res.status(201).json({ message: 'Success', data: produk });
    } catch (error) {
        res.status(400).json({ message: "Failed", error: error.message }); // Tampilkan error message yang lebih spesifik
    }
}

module.exports = { produkIndex, produkInsert };
