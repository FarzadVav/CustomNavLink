import { useContext } from "react"
import { createPortal } from "react-dom"

import LoadingContext from "../../contexts/LoadingContext"

const Loader = () => {
  const loading = useContext(LoadingContext)

  return (loading.appLoading || loading.pageLoading) && createPortal(
    <>
      <div className='loader'></div>
    </>,
    document.querySelector('#root')!
  )
}

export default Loader