
export default function Icon (props) {
  return `
<div
  class="${props.class}"
  style="${props.style}"
>
  <svg>
    <use xlink:href="${'#' + props.href}"></use>
  </svg>
</div>
  `
}
