let { http } = require('@architect/functions')
let redirect = require('./redirect')
let blog = require('./blog')

// middleware proxy s3 assets
let asap = http.proxy({
  spa: false,
})

exports.handler = http.async(redirect, asap)
