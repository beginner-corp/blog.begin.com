export default function PostItem (state = {}) {
  const { href, frontmatter } = state
  const {
    author,
    avatar,
    description,
    image,
    readtime,
    title
  } = frontmatter
  const desc = description.slice(0, 90)
  return `
<div
  class=""
>
  <a
    class="no-underline"
    href="/${href}"
  >
    <img
      src="${image}"
      alt="${title}"
    />
    <div
      class="
        flex
        flex-grow-0
        justify-between
      "
    >
      <div>
        <img
          class="radius-pill"
          src="${avatar}"
          alt="avatar"
          height="40"
        >
        <p class="text-p5 text-1">
          ${author}
        </p>
      </div>
      <div class="self-end">
        <p class="text-g4 text-1">
          ${readtime}
        </p>
      </div>
    </div>
    <h3 class="text-p5 mb1">
      ${title}
    </h3>
    <p class="text-g8 mb2">
      ${desc}<small class="text-p5">[...]</small>
    </p>
    </div>
  </a>
</div>
`
}

