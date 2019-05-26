// @file product.js <controllers>
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
	    qty: req.body.quantity
	}
	db.product.create(data).then((r) => {
	    res.json(r)
	})
    },
    show: (req, res) => {
	db.product.findOne({
	    where: {
		id: req.params.id
	    }
	}).then((t) => {
	    console.log(t)
	    res.json({
		id: t.id,
		name: t.name,
		qty: t.quantity,
		loc: t.locationId
	    })
	})
    },
    edit: (req, res) => {
	res.send("edit forum " + req.params.forum);
    },
    update: (req, res) => {
	let data = {
	    name: req.body.name,
	    quantity: req.body.qty,
	    locationId: req.body.location
	}
	console.log(data)
	db.product.update(data, {
	    where: {
		id: req.params.id
	    }
	}).then((r) => {
	    res.json(r)
	})
    },
    destroy: (req, res) => {
	db.product.destroy({
	    where: {
		id: req.params.id
	    }
	}).then(() => {
	    res.send({})
	})
    }
}
