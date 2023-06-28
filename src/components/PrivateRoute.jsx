import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

const PrivateRoute = () => {
  const { loggedIn, statusCheck } = useAuthStatus()

  if (statusCheck) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute
