const fs = require('fs')

const staticFileUrl = `${__dirname}/../data/test-data.json`
let issues = JSON.parse(fs.readFileSync(staticFileUrl))

exports.checkID = (req, res, next, val) => {
    console.log(`issue Id is ${val}`)
    // const id = req.params.id * 1
    // if (id > issues.length) {
    //     return res.status(404).json({
    //         status: 'Failed',
    //         message: 'Invalid ID',
    //     })
    // }
    next()
}

exports.checkUpdate = (req, res, next) => {
    console.log(req.body, ' checkBody()')
    if (!req.body.title || !req.body.description) {
        return res.status(400).json({
            status: 'Failed',
            message: 'Invalid Update Request, check your payload',
        })
    }

    next()
}

exports.checkDelete = (req, res, next) => {
    console.log(req.body, ' checkBody()')

    const id = req.params.id * 1
    //simple check if id exists
    const issueData = issues.find(x => {
        return x._id === id
    })

    if (!issueData) {
        res.status(404).json({
            status: 'Failed',
            message: 'Data not found',
        })
    }
    next()
}

exports.checkBody = (req, res, next) => {
    console.log(req.body, ' checkBody()')
    if (!req.body.title || !req.body.description) {
        return res.status(400).json({
            status: 'Failed',
            message: 'Invalid Request',
        })
    }
    next()
}

exports.getAllIssues = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
        status: 'Success',
        requestedAt: req.requestTime,
        results: issues.length,
        data: {
            issues: issues,
        },
    })
}

exports.getIssue = (req, res) => {
    console.log(req.params, 'this is the param')
    const id = req.params.id * 1
    const issueData = issues.find(x => {
        return x.id === id
    })

    res.status(200).json({
        status: 'Success',
        data: {
            issueData,
        },
    })
}

exports.createIssue = (req, res) => {
    const newId = issues[issues.length - 1]._id + 1

    /**
     * @todo title must be unique?
     */
    const newIssue = Object.assign(
        {
            _id: newId,
        },
        req.body
    )

    issues.push(newIssue)
    fs.writeFile(staticFileUrl, JSON.stringify(issues), () => {
        res.status(201).json({
            message: 'Success',
            data: {
                issue: newIssue,
            },
        })
    })
    console.log(req.body)
}

exports.updateIssue = (req, res) => {
    const id = req.params.id * 1

    const issueData = issues.find(x => {
        return x._id === id
    })

    if (!issueData) {
        res.status(404).json({
            status: 'Failed',
            message: 'Data not found',
        })
    }

    issueData.title = req.body.title
    issueData.description = req.body.description

    issues = Object.assign(issues, issueData)
    fs.writeFile(staticFileUrl, JSON.stringify(issues), () => {
        res.status(200).json({
            status: 'Success',
            message: 'Success updating',
        })
    })
}

exports.deleteissue = (req, res) => {
    const id = req.params.id * 1

    const updateData = issues.filter(x => {
        return x._id !== id
    })

    fs.writeFile(staticFileUrl, JSON.stringify(updateData), () => {
        res.status(200).json({
            status: 'Success',
            message: 'Success Delete Data',
        })
    })
}
