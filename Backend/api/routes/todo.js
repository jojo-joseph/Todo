const express = require('express');
const router = express.Router();

//Load Todo model
const todo = require('../../model/Todo');


// @route   GET api/todo/test
// @desc    Test users route
// @acess   Public
router.get('/test',(req,res)=>res.json({msg:'Todo works'}));

// @route   POST api/todo/posttodo
// @desc    POST todo
// @acess   Public

router.post('/posttodo',(req,res)=>{
    const tododata= new todo({
        desc:req.body.desc,
        resp:req.body.resp,
        priority:req.body.priority  
    })
    tododata
    .save()
    .then(todo=>res.status(200).json({"msg":"success","data":todo}))
    .catch(err=>res.status(400).json({"err":err}))


})

// @route   GET api/todo/gettodo
// @desc    GET todo
// @acess   Public
router.get('/gettodo',(req,res)=>{
    todo.find({})
    .then(todo=>{res.status(200).json({"msg":"success","data":todo})})
    .catch(err=>res.status(400).json({"err":err}))
})

module.exports= router;