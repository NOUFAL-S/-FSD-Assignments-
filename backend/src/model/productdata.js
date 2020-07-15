const mongoose= require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ProductDb',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('Database Connectected'))
    .catch((error)=>console.error(error));

const Schema = mongoose.Schema;
var NewProductSchema = new Schema({
    productId : Number,
    productName: {
        type: String,
        required:true
    },
    productCode: String,
    releaseDate: String,
    description: String,
    price: Number,
    starRating: Number,
    imageUrl: String
});
var productdata = mongoose.model('product',NewProductSchema);

module.exports = productdata;