const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/eCommCompany', { useNewUrlParser: true });
const schema  = {
    "order_id":{
        required: [true, 'Required field'],
        type: Number,
    },
    "item_name": {
        required: [true, 'Required field'],
        type: String,
    },
    "cost": {
        required: [true, 'Required field'],
        type: Number,
    },
    "order_date": {
        required: [true, 'Required field'],
        type: Date,
    },
    "delivery_date": {
        required: [true, 'Required field'],
        type: Date,
    }
  
}
let orderSchema = mongoose.Schema(schema, { collection: 'OrderDetails'})
exports.ordersModel = mongoose.model("OrderDetails",orderSchema)

