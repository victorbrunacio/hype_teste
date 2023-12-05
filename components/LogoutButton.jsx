import useUserContext from "@/context/useUserContext"
const LogoutButton = () => {
  const { clearAccount, account } = useUserContext();
  const handlerLogout = () => {
    clearAccount()
    window.location.reload()
  }
  return (
    <button className="btn text-red-500" onClick={() => handlerLogout()}>
      Logout
    </button>
  )
}

export default LogoutButton