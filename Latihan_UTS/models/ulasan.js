const mongoose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
    product_id :{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Produk',
        required: true,

    },
    pengguna_id :{
        type : mongoose.Schema.Types.ObjectID,
        ref:'Produk',
        required : true,
    },
    rating :{
        type : Number,
    },
    komentar :{
        type : String,
    },
    tanggal_ulasan :{
        type : Date,
    },

});

const Ulasan = mongoose.model('Ulasan', ulasanSchema);
module.exports = Ulasan;