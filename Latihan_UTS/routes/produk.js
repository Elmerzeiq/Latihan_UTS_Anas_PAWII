const express = require("express");
const router = express.Router();
const produkController = require("../controllers/controllerProduk");
//Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB
router.get("/produk", produkController.produkIndex);
router.post("/tambah/produk", produkController.produkInsert);
module.exports = router;