const express = require('express')
const morgan = require('morgan')

const issueRouter = require('./routes/issueRoutes')

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())

//express middleware
//remember, this is sequential, if you put this into bottom of  code, the middleware not executed
//this is global middleware stacks
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    console.log('Middleware executed')
    next()
})

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/issues', issueRouter)

//START SERVER
module.exports = app
