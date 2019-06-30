var request = require("request");
const querystring = require("querystring");
const driver = require("../models/driver");
const CarOwner = require("../models/carOwner");

exports.driverCadastro = function(req, res) {
  try {
    res.render("pages/driver");
  } catch (error) {
    console.log(error);
  }
};

exports.driverAlugue = function(req, res) {
  try {
    res.render("pages/driver_alugar");
  } catch (error) {
    console.log(error);
  }
};

exports.CarOwnerCadastro = function(req, res) {
  try {
    res.render("pages/carowner");
  } catch (error) {
    console.log(error);
  }
};



var obj = [];


exports.driver_detail = function(req, res) {
  driver.findById(req.params.id, function(err, driver) {
    if (err) res.send(err);

    res.json(driver);
  });
};
exports.driver_OrderBy = function(req, res) {
  var mysort = "";
  var orderby = req.params.orderby;

  switch (orderby) {
    case "Trophies":
      mysort = { Trophies: -1 };
      break;

    case "Victory":
      mysort = { Victory: -1 };
      break;

    case "Defeat":
      mysort = { Defeat: -1 };
      break;

    default:
      mysort = { Played_at: -1 };
      break;
  }
  var myfind = "";
  if (req.user == undefined || req.user == null) {
    myfind = { Owner: "Owner" };
  } else if (req.user != undefined || req.user != null) {
    if (req.user.permission) {
      myfind = {};
    } else {
      myfind = { Owner: req.user.email };
    }
  }
  driver.find(myfind, function(err, driver) {
    if (err) res.send(err);

    res.json(driver);
  }).sort(mysort);
};
exports.driver_createMethod_post = function(req, res) {
  try {
    let newDriver = new driver(req.body);
    newDriver.save((error, driver) => {
      if (error) {
        req.flash("error_msg", error);
        return error;
      }
      if (
        driver != "" ||
        driver != undefined ||
        driver != "undefined"
      ) {
        req.flash("success_msg", "Data Inserted!");
        res.json(driver);
      }
    });
  } catch (error) {
    console.log(error);
    req.flash("error_msg", error);
    res.json(error);
  }
};
exports.carowner_createMethod_post = function(req, res) {
  try {
    let newCarOwner = new CarOwner(req.body);
    newCarOwner.save((error, car) => {
      if (error) {
        req.flash("error_msg", error);
        return error;
      }
      if (
        car != "" ||
        car != undefined ||
        car != "undefined"
      ) {
        req.flash("success_msg", "Data Inserted!");
        res.json(car);
      }
    });
  } catch (error) {
    console.log(error);
    req.flash("error_msg", error);
    res.json(error);
  }
};
exports.driver_update_post = function(req, res) {
  try {
    driver.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function(err, driver) {
        if (err) res.send(err);

        req.flash("success_msg", "Data Updated!");
        res.json(driver);
      }
    );
  } catch (error) {
    console.log(error);
    req.flash("error_msg", error);
    res.json(error);
  }
};
exports.driver_delete_post = function(req, res) {
  try {
    driver.findByIdAndRemove(req.params.id, function(err, driver) {
      if (err) res.send(err);
      req.flash("success_msg", "Data Deleted!");
      res.json(driver);
    });
  } catch (error) {
    console.log(error);
    req.flash("error_msg", error);
    res.json(error);
  }
};



