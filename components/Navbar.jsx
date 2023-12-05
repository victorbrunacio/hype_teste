"use client"
import Link from "next/link"
import CartButton from "./CartButton"

import useUserContext from "@/context/useUserContext"
import LogoutButton from "./LogoutButton"
const Navbar = () => {

  const { account } = useUserContext()
  return (
    <nav className="navbar bg-base-300 flex justify-between px-[5rem]
    max-md:fixed max-md:top-0 max-md:z-50
    ">
      <Link className="btn btn-ghost text-xl" href={"/"}>
        Acme
      </Link>
      <div className="flex gap-28">
        {account.length ? (
          <LogoutButton />
        ) : (
          <Link className="btn " href={"/register"}>
            Criar conta/Login
          </Link>
        )}
        <div className="max-md:fixed max-md:bottom-0 max-md:right-0 max-md:z-50 ">
          <CartButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar