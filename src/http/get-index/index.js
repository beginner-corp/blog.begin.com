let fs = require('fs')
require = require('esm')(module) // eslint-disable-line

const Html = require('@architect/views/modules/document/html.js').default
const posts = fs.readdirSync(path.join('node_modules', '@architect', 'views', 'posts'))

exports.handler = async function index(req) {
  let title = "Begin Blog"
  
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      title,
      posts,
    })
  }
}
