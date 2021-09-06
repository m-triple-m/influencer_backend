const Model = require('../models/profileModel');
const router = require('express').Router();


router.post('/add', (req, res) => {
    data = req.body;

    new Model(data).save()
        .then(data => {
            console.log('user data saved');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email: req.params.email })
        .then(data => {
            console.log('user data fetched by email');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyid/:id', (req, res) => {

    console.log(req.params.id)
    Model.findById(req.params.id).populate('socialProfiles').populate('user')
        .then(data => {
            console.log('user data fetched by id');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyuser/:id', (req, res) => {

    Model.findOne({ user: req.params.id })
        .then(data => {
            console.log('user data fetched by id');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/pushupdate/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id, { $push: req.body })
        .then(data => {
            console.log('user data fetched by id');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {

    Model.find({})
        .then(data => {
            console.log('user data fetched by id');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


module.exports = router;