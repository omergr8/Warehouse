var express = require('express');
const request=require('request')
const mongoose = require('mongoose');
ObjectID = mongoose.Types.ObjectId;
var router = express.Router();
const csv=require('csvtojson')
const Product = require('../models/Product');
const Category = require('../models/category');
const ProductCategory = require('../models/productCategory')
/* GET home page. */
// router.get('/', async function(req, res, next) {
//   const categories = [ObjectID("5f1407832516012ba41b338d"),
//                       ObjectID("5f14078f2516012ba41b338f"),
//                     ObjectID("5f1407952516012ba41b3391"),
//                   ObjectID("5f1408182516012ba41b3392"),
//                 ObjectID("5f1408202516012ba41b3393"),
//               ObjectID("5f1408482516012ba41b3394")];
//     const parent_id = ObjectID("5f1e5a52f303932c9c39fa3d");
//     const wh_id = ObjectID("5f0df5e97b22072ffc9457c9");
//   let j = 0;
//   csv()
//     .fromStream(request.get('http://agile-refuge-37570.herokuapp.com/products/d91/csv'))
//     .subscribe(async function(json){
//       var data = JSON.parse(JSON.stringify(json));
//       j = j + 1;
//       if (j>200 && j <300) {
//         let images = [data['images 1'], data['images 2'], data['images 3'], data['images 4'], data['images 5']];
//         let images_final = [];
//         for (i = 0; i<images.length; i++) {
//           if (images[i] !='' && images[i] !=' ')
//             images_final.push(images[i])
//         }
//         data.images = images_final;
//         data.price = data.price.replace(',','');
//         data.cluster = data.collection;
//         let dat_arr = data.name.split('/');

//         data.title = String(dat_arr[dat_arr.length-2] + " "+ dat_arr[dat_arr.length-1]);
//         console.log(data.category);
//         data.warehouse = '5f0df5e97b22072ffc9457c9';
//         let response = await Product.save_product(data);
//         if (response.isExecuted) {
//           data = {};
//           data.warehouse_product_id = response.data._id;
      
//         //   if (j == 6) {
//         //     j = 0
//         //   }
//         //   j = j+1;
//         }
//         // let res2 = await Category.find_one({name: String(data.category), parents: parent_id, warehouse:wh_id});
//         // if(res2.isExecuted && res2.data) {
//         //   data.category_id = ObjectID(res2.data._id);
//         // } else {
//         //   res2 = await Category.save_category({name: String(data.category), parent_id: parent_id, warehouse: wh_id});
//         //   if (res2.isExecuted) {
//         //     data.category_id = ObjectID(res2.data._id);
//         //   }
//         // }
//         data.category_id = ObjectID("5f1ec3f7a6184823f47f7100")
//         response = await ProductCategory.save_product(data);
//         console.log('aa');
//         console.log(data.category_id);
//       }
      
//     });
    
//     res.status(200).send('aaaa');
// });

module.exports = router;
