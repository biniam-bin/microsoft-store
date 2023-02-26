import React from 'react'
import Header from '../Header'





function Layout({children, state}: any) {
  return (
      <>
          <Header state={state} />
          {children}
      </>
  )
}

export default Layout