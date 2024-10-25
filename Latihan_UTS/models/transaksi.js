const mongoose = require ("mongoose");

const transaksiSchema = new mongoose.Schema({
    produk_id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    pengguna_id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    jumlah:{
        type: Number,
    },
    total_harga:{
        type: Number,
    },
    tanggal_transaksi:{
        type: Date,

    }
});

const Transaksi = mongoose.model('Transaksi', transaksiSchema);
module.exports = Transaksi;