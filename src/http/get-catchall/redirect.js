// redirect Medium urls to blog.begin.com
let redirects = {
    // 2016
    '/': '/docs/en/guides/get-started/quickstart',
  
    // 2017
    '/intro/philosophy': '/docs/en/guides/get-started/why-architect',
    '/intro/limits': '/docs/en/guides/get-started/detailed-aws-setup',
    '/intro/community': '/docs/en/about/contribute',
  
    // 2018
    '/quickstart': '/docs/en/guides/get-started/quickstart',
    '/quickstart/install': '/docs/en/guides/get-started/quickstart',
    '/quickstart/layout': '/docs/en/guides/get-started/project-layout',
  
    // 2019
    '/primitives/http': '/docs/en/reference/app.arc/http',
    '/primitives/ws': '/docs/en/reference/app.arc/ws',
    '/primitives/static': '/docs/en/reference/app.arc/static',
    '/primitives/cdn': '/docs/en/reference/app.arc/static',
    '/primitives/scheduled': '/docs/en/reference/app.arc/scheduled',
    '/primitives/events': '/docs/en/reference/app.arc/events',
    '/primitives/queues': '/docs/en/reference/app.arc/queues',
    '/primitives/tables': '/docs/en/reference/app.arc/tables',
    '/primitives/macros': '/docs/en/reference/app.arc/macros',
  
    // 2020
    '/guides/upgrade': '/docs/en/about/upgrade',
    '/guides/testing': '/docs/en/guides/developer-experience/local-development',
    '/guides/project-manifest': '/docs/en/guides/get-started/project-layout',
    '/guides/share-code': '/docs/en/guides/developer-experience/sharing-code',
    '/guides/custom-file-paths': '/docs/en/guides/developer-experience/custom-source-paths',
  
  }
  
  // eslint-disable-next-line
  module.exports = async function redirect (req) {
    let isGet = req.requestContext.http.method.toLowerCase() === 'get'
    let isPath = Object.keys(redirects).includes(req.requestContext.http.path)
    if (isGet && isPath) {
      return {
        statusCode: 301,
        headers: {
          location: redirects[req.requestContext.http.path]
        }
      }
    }
  }