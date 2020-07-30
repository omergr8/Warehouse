// const mongoose = require("mongoose");
// const typesEnum = require('../../helpers/constants_variables').enums.types;

// const Schema = mongoose.Schema;
// const shopSchema = new Schema({
// 	_id: {
// 		type: mongoose.Types.ObjectId,
// 		auto: true
// 	},
// 	name: {
// 		type: String
// 	},

// 	added_on: {
// 		type: Date,
// 		default: Date.now
// 	}
// },
// {
//   toObject: {
//   virtuals: true
//   },
//   toJSON: {
//   virtuals: true 
// 	},
// 	id: false
// });

// shopSchema.virtual("type").get(function(){
// 	return 'shop';
// });
// module.exports = shopSchema;