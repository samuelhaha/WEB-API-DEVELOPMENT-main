var express = require('express');
var db = require('./controller/restaurant.js');
db.connect();

var router = require('express').Router();

router.use(express.urlencoded({
    extended: true
}));

router.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/view_restaurant.html");
});

router.get('/add', function (req, res) {
    res.sendFile(__dirname + "/views/add_restaurant.html");
});

router.get('/update', function (req, res){
    res.sendFile(__dirname + "/views/update_restaurant.html");
})

router.get('/css/*', function (req, res) {
    res.sendFile(__dirname + "/views/" + req.originalUrl);
});

router.get('/js/*', function (req, res) {
    res.sendFile(__dirname + "/views/" + req.originalUrl);
});

router.get('/api/restaurant', function (req, res) {

    db.getRestaurant(function(err,Restaurants){
        if (err) {
            res.status(500).send("Unable to get all rooms");
        } else {
            res.status(200).send(Restaurants);
        }
    })
});

router.post('/api/add_restaurant', function (req, res) {

    var data = req.body;
    db.addRestaurant(data.name,data.type,data.img_path,function(err,Restaurants){
        if (err) {
            res.status(500).send("Unable to add a new room");
        } else {
            res.status(200).send(Restaurants);
        }
});
});

router.get('/api/restaurant/:id', function(req,res) {
    var id = req.params.id;
    db.getRestaurantById(id,function(err,restaurant,){
        if(err){
            res.status(500).send("unable to find the room with the entered id");
        }
        else{
            res.status(200).send(restaurant);
        }
    })
});

router.put('/api/update_restaurant/:id', function(req, res) {
    var data = req.body;
    db.update_restaurant(data.name , data.type , data.img_path, function(err,restaurant){
        if(err){
            res.status(500).send("unable to update restarant information please try again later");
        }
        else{
            res.status(200).send(restaurant);
        }
    })
})
module.exports = router;
