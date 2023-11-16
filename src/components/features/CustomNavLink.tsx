import { ReactNode, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadingContext from '../../contexts/LoadingContext'

type CustomNavLinkProps = {
  className?: string
  activeClassName?: string
  path: string
  conditionForActive?: boolean
  conditionForAlwaysActive?: boolean
  scrollToTop?: boolean
  clickHandler?: Function
  children: ReactNode
}

const CustomNavLink = ({
  path,
  activeClassName,
  conditionForActive = true,
  conditionForAlwaysActive = false,
  className,
  scrollToTop = true,
  clickHandler = () => { },
  children
}: CustomNavLinkProps) => {
  const loading = useContext(LoadingContext)
  const navigate = useNavigate()

  const _clickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    clickHandler()
    scrollToTop && window.scrollTo(0, 0)
    if (path !== location.pathname) {
      loading.setPageLoadingHandler(true)
      navigate(path)
    }
  }

  return (
    <a
      className={(path === location.pathname && activeClassName && conditionForActive) || conditionForAlwaysActive
        ? activeClassName
        : className
      }
      onClick={_clickHandler}
    >
      {children}
    </a>
  )
}

export default CustomNavLink