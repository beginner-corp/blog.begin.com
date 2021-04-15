

export default function BlogCard (props = {}) {
  console.log("Blog card: ", props.posts)
  
  return `
  <div class="postsGrid">${ props.posts.map(post => `
    <div class="postCard">
      <a href=/posts/${post}>${post}</a>
    </div>`).join('')}
  </div>
  `
}
