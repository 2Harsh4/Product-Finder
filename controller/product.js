const model = require('../model/product')
const Product = model.Product;
// const path = require('path');


// Create
exports.createProduct = (req, res) => {
  const product =  new Product(req.body);
  product.save()
  .then(doc =>{res.status(201).json(doc)})
  .catch(err =>{ console.log(err)
    res.status(404).json(err)});

  
};

// Get All products (Get)
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
 // console.log(products);
};


//Get single product (Get)
exports.getProduct = async (req, res) => {
  const id = req.params.id;
    console.log({id})
    const product = await Product.findById(id);
  res.json(product);
};

//Replace product (Put)
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};

//Update product (Patch)
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};

//Delete product (Delete)
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndDelete({_id:id})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};