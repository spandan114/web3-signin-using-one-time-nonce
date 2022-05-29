const express = require('express')
const cors = require('cors');
require('./model/dbConnection')()
const app = express()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/user',require('./router/user.router'))

const port = 8080
app.listen(port, () => console.log(`Server listening on port ${port}!`))