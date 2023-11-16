import CustomNavLink from "./CustomNavLink"

const Header = () => {
  return (
    <header>
      <CustomNavLink path="/">
        Home
      </CustomNavLink>
      <CustomNavLink path="/example">
        Example
      </CustomNavLink>
    </header>
  )
}

export default Header