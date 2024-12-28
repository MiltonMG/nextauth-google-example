"use client"
import { SessionProvider } from "next-auth/react"

export const Providers = ( {children}: {children: React.ReactNode} ) => {
  return (
    // Wrap the children with SessionProvider
    // This will provide the session object to all the children components
    // This is a custom provider that we created
    <SessionProvider>  
        {children}
    </SessionProvider>
)
}