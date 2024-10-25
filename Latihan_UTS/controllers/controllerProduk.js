const Produk = require ("../models/produk")

const produkIndex = async (req, res) => {
    try{
        const produk = await Produk.find({});
        res.status(200).json({message: 'Success', data: produk});
    } catch (error) {
        res.status(400).json({ message: "Failed"});
    }
}

const produkInsert = async (req, res) => {
    try{
        const { name, deskripsi, harga, stok, kategori_id } = req.body;
        const produk = new Produk({
            name,
            deskripsi,
            harga,
            stok,
            kategori_id,

        }) 
        await produk.save();
        res.status(200).json({message: 'Success', data: produk});
    } catch (error) {
        res.status(400).json({ message: "Failed"});
    }
}
module.exports = { produkIndex, produkInsert }