
export default function Main (props = {}) {
  
  let children = props.children || ""
  return `
    <div>${children}</div>
  `
}
