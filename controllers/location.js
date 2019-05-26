// @file location.js <controllers>
// REST controller definitions
let db = require('../models/index')
module.exports = {
    index: (req, res) => {
	res.send("forum index");
    },
    new: (req, res) => {
	res.send("new forum");
    },
    create: (req, res) => {
	let data = {
	    name: req.body.name,
	    lat: req.body.latitude,
	    lon: req.body.longitude
	}
	db.location.create(data).then((r) => {
	    res.json(r)
	})
    },
    show: (req, res) => {
	res.send("show forum " + req.params.forum);
    },
    edit: (req, res) => {
	res.send("edit forum " + req.params.forum);
    },
    update: (req, res) => {
	res.send("update forum " + req.params.forum);
    },
    destroy: (req, res) => {
	db.location.destroy({
	    where: {
		id: req.params.id
	    }
	}).then(() => {
	    res.send({})
	})
    }
}
