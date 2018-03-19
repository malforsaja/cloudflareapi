const express = require('express')
const https = require('https')
const request = require('request')
var app = express()

var cf = require('cloudflare')({
    email: 'malfor.saja@gmail.com',
    key: 'b66001ad605220c35a347572d568da9e9c2d4'
});

cf.ips.browse(console.log)

/*cf.zones.read('b66001ad605220c35a347572d568da9e9c2d4').then(function (resp) {
    return resp.result.status;
});*/

// Configure our HTTP server to respond with the users IP address.
app.get('/test', (req, res) => {
    console.log(cf.ips.browse())
})



app.listen(3000, () => console.log('Listening on port 3000!'))
