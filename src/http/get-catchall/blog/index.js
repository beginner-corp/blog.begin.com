let render = require('./render')

module.exports = async function blog(req) {
    const createCard = (function readFrontMatter() {
        let results = [];
    
        for(let post of posts) {
            let raw = fs.readFileSync(path.join(base, post)).toString()
            let frontmatter = ''
            const md = Markdown({
              highlight,
              linkify: true,
              html: true,
              typography: true
            })
              .use(markdownClass, classMapping)
              .use(markdownAnchor, {
                permalinkSymbol: ' '
              })
              .use(frontmatterParser, function (str) {
                frontmatter = yaml.load(str)
              })
            const children = md.render(raw)
            results.push({post, frontmatter})
        }
        return results
    })()
    
    let posts = []
    let post = req.rawPath
    if (posts.includes(post)) {
        return render(req)
    }
} 