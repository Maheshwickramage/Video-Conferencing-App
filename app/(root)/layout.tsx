import { Chilanka } from 'next/font/google'
import React, { Children, ReactNode } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
     
        {children}
    

    </main>
  )
}

export default RootLayout