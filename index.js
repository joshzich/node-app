const express = require('express')
const app = express()

app.get(express.static('public'))
app.listen(3000, () => console.log('Server listening on port 3000'))
