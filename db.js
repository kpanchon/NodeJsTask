const ordersModel = require('./connection').ordersModel;
var order={}
order.create = (orderObj)=>{
    return ordersModel.findOne({order_id:orderObj["order_id"]}).then((data)=>{
        if(data){
            console.log("Data already exists ");
            var err = new Error();
            err.status = 400;
            err.name = "DuplicateEntryError";
            err.message ="Entry Already Exist";
            throw err;
        }
        else{
            return ordersModel.create(orderObj).then((data)=>{
                if(data){
                    return data;
                }
            })
        }
    })
}

order.findByDate = (date)=>{
    return ordersModel.find({order_date:date["order_date"]}).then(data=>{
        if(data.length>0){
            return(data);
        }
        else{
            return("No data found");
        }
    })

}

order.update = (obj)=>{
    return ordersModel.findOneAndUpdate({order_id:obj["order_id"]},{delivery_date:obj["delivery_date"]},{
        new: true,
        rawResult: true
    }).then((data)=>{
        if(data.value == null){
            var err = new Error();
            err.status = 400;
            err.name = "NoEntryError";
            err.message ="Entry Does Not Exist";
            throw err;
        }
        return data;
    })
}

order.search = (obj)=>{
    return ordersModel.find({order_id:obj["order_id"]}).then(data=>{
        if(data.length>0){
            return data
        }
        else{
            return "No record found"
        }
    })
}

order.delete = (obj)=>{
    return ordersModel.remove({order_id:obj["order_id"]}).then(result=>{
        if(result.deletedCount == 0){
            var err = new Error();
            err.status = 400;
            err.name = "NoEntryError";
            err.message ="Entry Does Not Exist";
            throw err;
        }
        return "Entry Deleted"
    })
}


module.exports = order;