const express = require('express')
const http = require('http')
const request = require('request')
var app = express()

var cf = require('cloudflare')({
    email: 'malfor.saja@gmail.com',
    key: 'b66001ad605220c35a347572d568da9e9c2d4'
});

cf.ips.browse()

/*cf.zones.read('b66001ad605220c35a347572d568da9e9c2d4').then(function (resp) {
    return resp.result.status;
});*/

app.get('/test', (req, res) => {
    console.log(cf.ips.browse())
})

const port = 3000
const server = http.createServer(app)

server.listen(port, () => console.log(`Running on localhost:${port}`))
