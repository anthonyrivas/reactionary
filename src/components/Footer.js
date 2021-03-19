export function Footer({brandName, tagLine, children}) {
  return <footer>
    &copy; Copyright {brandName} {(new Date().getFullYear())}
  </footer>
}
