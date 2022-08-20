const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const order = require('./db')
app.use(bodyParser.json()); 
app.post('/orders/create',(req,res,next)=>{
    console.log("Request for '/orders/create'");
    order.create(req.body).then(data=>{
        if(data){
            console.log("Entry Added Successfully");
            res.send("Added Successfully")
        }
    }).catch(next)
})

app.route('/orders/update').get((req,res,next)=>{
    console.log("Request for '/orders/update'");
    order.update(req.body).then(data=>{
        console.log(data);
        res.send("Data updated");
    }).catch(next)
}).post((req,res,next)=>{
    console.log("Request for '/orders/update'");
    order.update(req.body).then(data=>{
        console.log(data);
        res.send("Data updated");
    }).catch(next)
})

app.get('/orders/list',(req,res,next)=>{
    console.log("Request for '/orders/list'");
    order.findByDate(req.body).then(data=>res.send(data)).catch(next)
})

app.route('/orders/search').get((req,res,next)=>{
    console.log("Request for '/orders/search'");
    order.search(req.body).then(data=>res.send(data)).catch(next)
}).post((req,res,next)=>{
    console.log("Request for '/orders/search'");
    order.search(req.body).then(data=>res.send(data)).catch(next)
})

app.delete('/orders/delete',(req,res,next)=>{
    console.log("Request for '/orders/delete'");
    order.delete(req.body).then(data=>res.send(data)).catch(next)
})


app.use((err, req, res, next) => {
    
    res.status(400).send(err)
  })
app.listen(3000);
console.log("Server started");
