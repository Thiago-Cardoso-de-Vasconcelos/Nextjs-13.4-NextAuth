"use client";

import { SessionProvider } from 'next-auth/react'
import { Children } from 'react';

export const Provider = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Provider