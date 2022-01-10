var mongoose = require('mongoose');
var schema = mongoose.Schema;
var restaurantSchema = {};
var restaurantModel;

var database = {
    connect: function () {
        mongoose.connect('mongodb://localhost:27017/wad_project', function (err) {
            if (err == null) {
                console.log("Connected to Mongo DB");
                //initialize values
                restaurantSchema = schema({
                    name: String,
                    type: String,
                    img_path: String
                });
                var connection = mongoose.connection;
                restaurantModel = connection.model("restaurants", restaurantSchema);
            } else {
                console.log("Error connecting to Mongo DB");
            }
        })
    },
    addRestaurant: function(name, type, img, callback)
    {
        var newRestaurant = new restaurantModel({
            name:name,
            type:type,
            img_path:img
        });
        newRestaurant.save(callback);
    },

    getRestaurant: function(callback){
        restaurantModel.find({}, callback);
    },

    getRestaurantById: function(id,callback){
        restaurantModel.findById(id,callback);
    },

    updateRestaurant: function(name , type , img , callback)
    {
        restaurantModel.updateMany({name:name} , {type:type} , {img:img , callback});
    },
}
module.exports = database;