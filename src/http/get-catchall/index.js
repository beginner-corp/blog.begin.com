let { http } = require('@architect/functions')
let redirect = require('./redirect')



// middleware proxy s3 assets
let asap = http.proxy({
  spa: false,
})

exports.handler = http.async(redirect, asap)
