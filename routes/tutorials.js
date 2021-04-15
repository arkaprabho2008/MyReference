const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('tutorials.pug', { title: "Tutorials" })
})

router.get('/html-web-development-tutorial-1', (req, res) => {
    var title = { title: "Introduction to HTML, CSS, JavaScript & How websites work? | Web Development Tutorials #1" }
    res.render('tutorials/html-web-development-tutorial/html-web-development-tutorial-1.pug', title)
    // res.render('tutorials/dele.pug');
})
router.get('/html-web-development-tutorial-2', (req, res) => {
    var title = { title: "HTML Tutorial: Installing VS Code &amp; Live Server | Web Development Tutorials #2" }
    res.render('tutorials/html-web-development-tutorial/html-web-development-tutorial-2.pug', title)
    // res.render('tutorials/dele.pug');
})
router.get('/html-web-development-tutorial-3', (req, res) => {
    var title = { title: "HTML Tutorial: Basic Structure of a Website | Web Development Tutorials #3" }
    res.render('tutorials/html-web-development-tutorial/html-web-development-tutorial-3.pug', title)
    // res.render('tutorials/dele.pug');
})
router.get('/html-web-development-tutorial-4', (req, res) => {
    var title = { title: "HTML Tutorial: Title, Script, Link &amp; Meta Tags | Web Development Tutorials #4" }
    res.render('tutorials/html-web-development-tutorial/html-web-development-tutorial-4.pug', title)
    // res.render('tutorials/dele.pug');
})




// Exporting our tutorial router
module.exports = router;