import postsLayout from '../src/views/modules/layouts/posts-layout.js'
import test from 'tape'
import strip from './helpers/strip.js'

test('Check if Posts layout exists', t => {

  t.ok(postsLayout, "Posts layout exists")
  t.end()
})

test('Check if Posts Layout is rendering', t => {

    let expected = '<div></div>'
    let actual = postsLayout()
  t.equal(strip(actual), strip(expected), "Posts layout is rendering", actual)
  t.end()
})

test('Assert that Posts Layout is rendering children  ', t => {

    let expected = '<div>content</div>'
    let children = "content"
    let actual = postsLayout({children})
    
  t.equal(strip(actual), strip(expected), "Posts layout is delivering content")
  t.end()
})


test('Assert that Index is pulling posts', t => {

    let expected = '<div>content</div>'
    let children = "content"
    let actual = postsLayout({children})
    
  t.equal(strip(actual), strip(expected), "Posts layout is delivering content")
  t.end()
})

