require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const server = express();
const productRouter = require('./routes/product')


//db connection

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log('database connected')
}
main().catch(err => console.log(err));








//bodyParser
server.use(express.json());
server.use(morgan('default'));
//server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
//server.use('/users',userRouter.router);




server.listen(process.env.PORT, () => {
  console.log('server started');
});