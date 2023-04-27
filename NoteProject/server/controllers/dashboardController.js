const Note = require("../models/Notes");
const mongoose = require("mongoose");

exports.dashboard = async (req, res) => {
let perPage = 12;
  let page = req.query.page || 1;
    const locals = {
        title: "Dashboard",
        description: "Free NodeJS Notes App.",
      };
      res.render('dashboard/index', {
        locals,
        layout: "../views/layouts/dashboard",
});
}

