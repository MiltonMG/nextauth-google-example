"use client"
import Link from "next/link"
import { signIn, useSession, signOut } from "next-auth/react";

const Navbar = () => {

  const { data: session } = useSession(); // Get the session object
  //console.log(session); // Uncomment to see the session object

  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center px-24">
      <Link href="/">
        <h1>
          Next Google
        </h1>
      </Link>
      {session?.user ? (
        <div className="flex items-center gap-x-2">
          <Link href="/dashboard">
            Dashboard
          </Link>
          <p className="cursor-pointer">
            {session.user.name} ({session.user.email})
          </p>
          <img src={session.user.image} alt={session.user.name} className="h-8 w-8 rounded-full cursor-pointer" />
          <button
            onClick={() => signOut({
              callbackUrl: "/" // Redirect to home page after logout
            })}
          >
            LogOut
          </button>
        </div>
      ) : (
        // Sign in with Google
        <button onClick={() => signIn("google")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
          Sign In
        </button>
      )}
    </nav>

  )
}

export default Navbar