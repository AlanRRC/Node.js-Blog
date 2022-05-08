const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const res = require('express/lib/response')

const blogRoutes = require('./routes/blogRoutes')
const { render } = require('express/lib/response')

//  express app
const app = express()

//  connect to mongodb
const dbURI = 'mongodb+srv://netninja:bluejays@nodetuts.j4g9g.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//  register view engine
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//  mongoose and mongo routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

// blog routes
app.use('/blogs', blogRoutes)

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>')
    res.render('about', { title: 'About' })
})

// 404 page, must go at the bottom
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})