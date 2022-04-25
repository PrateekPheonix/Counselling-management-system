const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

require('./db/mongoose.js')

const studentRouter = require('./router/student')
const counsellorRouter = require('./router/counsellor')
const adminRouter = require('./router/admin')
const loginRouter = require('./router/login')
const emailRouter = require('./router/email')

const errorHandler = require('./helpers/errorHandler')

const app = express()

const port = process.env.PORT

app.use(cors({
    " Access-Control-Allow-Origin": "*"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())


app.use(studentRouter)
app.use(counsellorRouter)
app.use(adminRouter)
app.use(loginRouter)
app.use(emailRouter)

app.use(errorHandler)

app.listen(port, () => {
    console.log("SERVER IS UP ON PORT", port)
})
