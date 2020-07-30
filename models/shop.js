// const mongoose = require("mongoose");
// const modelResponse = require("../helpers/modelResponse");
// const shopSchema = require("./schemas/shopSchema");

// const Shop = mongoose.model("Shop", shopSchema);
// const messages = require('../helpers/constants_variables').messages;

// Shop.save_shop = async function(data) {
// 	try {
// 		let shop = new this({
//       name: data.name
// 		});
// 		const saved_shop = await shop.save();
// 		return modelResponse.success(saved_shop);
// 	} catch (err) {
// 		return modelResponse.failure(err);
// 	}
// };

// Shop.findShops = async function(data, namesOnly=false) {
// 	let query = {};
// 	let options = {};
// 	let total_results = 0;
// 	let results = null;
// 	let {page, limit, name} = data;

// 	try {
// 		if (name) {
// 			query.name = {$regex: new RegExp('^'+ data.name, 'i')};
// 		}
// 		if (namesOnly) {
// 			options.name = 1;
// 		}
// 		total_results = await this.countDocuments(query);
// 	} catch (err) {
// 		//console.log(err.message);
// 		return modelResponse.failure(err);
// 	}

// 	if (total_results < 1) {
// 		//return modelResponse.failure({message: messages.NoRecordsFound})
// 		return modelResponse.success({
// 			total_results,
// 			results: []
// 		});
// 	}
// 	if (!page) {
// 		try {
			
// 			results = await this.find(query, options).exec();
// 		} catch (err) {
// 			return modelResponse.failure(err);
// 		}
// 	} else {
// 		// if (page > Math.ceil(total_results / limit)) {
			
// 		// 	return modelResponse.failure({
// 		// 		message: messages.invalidPageNo
// 		// 	});
// 		// }

// 		try {
// 			let to_be_skipped = parseInt( ( page - 1 ) * limit );
// 			results = await this.find(query, options)
// 			.skip(to_be_skipped).limit(parseInt(limit)).exec();
// 		} catch (err) {
// 			return modelResponse.failure(err);
// 		}
// 	}
// 	return modelResponse.success({
// 		total_results,
// 		results
// 	});
// };

// module.exports = Shop;