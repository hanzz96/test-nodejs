const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const issueRouter = require('./routes/issueRoutes')

const app = express()
app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())

//express middleware
//remember, this is sequential, if you put this into bottom of  code, the middleware not executed
//this is global middleware stacks
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    const originalSend = res.send
    const originalJson = res.json

    res.send = function(body) {
        console.log('Response data (res.send):', body)
        originalSend.call(this, body)
    }

    res.json = function(body) {
        console.log('Response data (res.json):', body)
        originalJson.call(this, body)
    }
    next()
})

app.use('/api/v1/issues', issueRouter)

//START SERVER
module.exports = app
