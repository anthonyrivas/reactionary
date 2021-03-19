export function Header({brandName, tagLine, children}) {
  return <header>
    <div className="brand">{brandName}</div>
    <div className="tagLine">{tagLine}</div>
    {children}
  </header>
}
