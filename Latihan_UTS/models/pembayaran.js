const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema({
    produk_id :{
        type : mongoose.Schema.Types.ObjectID,
        ref :'Transaksi',
        required: true,
    },
    metode_pembayaran :{
        type : String,
    },
    jumlah :{
        type : Number,
    },
    tanggal_pembayaran :{
        type : Date,
    },
    status :{
        type : String,
    },

});

const Pembayaran = mongoose.model('Pembayaran', pembayaranSchema);
module.exports = Pembayaran;