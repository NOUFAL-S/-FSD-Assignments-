const express = require('express');
const ProductData = require('./src/model/productdata');
const cors = require('cors');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Orgin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    ProductData.find()
                .then(function(products){
                    res.send(products);
                });

});
 app.post('/insert',function(req,res){
     res.header("Access-Control-Allow-Orgin","*")
     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
     console.log(req.body);
     var product ={
         productId : req.body.product.productId,
         productName : req.body.product.productName,
         productCode : req.body.product.productcode,
         releaseDate : req.body.product.releaseDate,
         description : req.body.product.description,
         price : req.body.product.price,
         starRating : req.body.product.starRating,
         imageUrl : req.body.product.imageUrl,
         
     }
     var product = new ProductData(product);
     product.save();
 });

 app.put('/edit',function(req,res,next){
    res.header("Access-Control-Allow-Orgin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    const id = req.body.product._id
    var product ={
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productcode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
        
    }
   console.log(product)

   ProductData.findByIdAndUpdate(id,{$set:product},(err,doc)=>{
       if(!err){res.send(doc)}
       else{console.log("Error")}
   })
});


app.delete('/products/:id',(req, res, next)=>{
    product.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }

    });

});




 app.listen(3000,function(){
     console.log('listening to port 3000');
 });
