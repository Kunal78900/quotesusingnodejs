const express = require('express');
const Quote = require('../models/quote')
 
const router = express.Router();

router.get('/', async (req, res) =>{
    const quotes = await Quote.find();
   return res.render("home", {quotes});
});

router.post('/', async (req, res) => {
    
    const newQuote = await new Quote(req.body);
    
    await newQuote.save();
    return  res.redirect('/');
});

router.delete('/', async (req, res) =>{
    
    const id = req.body.id;
    await Quote.findByIdAndDelete(id)
    return  res.redirect('/')
});

router.get('/add', (req, res)=>{
    return  res.render('addQuote');
})
router.get('/UPDATE/:id', async (req, res)=>{
      let quotes = await Quote.findById(req.params.id)
    return res.render('UPDATE',{
        quotes:quotes
    });
})
router.post('/update-quote/:id',async (req,res)=>{
       let id = req.params.id;
       let quote = await Quote.findByIdAndUpdate(id,req.body)
       return res.redirect('/')
})

module.exports = router;