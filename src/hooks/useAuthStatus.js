import { useState, useEffect, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [statusCheck, setStatusCheck] = useState(true)
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth()

      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true)
        }
        setStatusCheck(false)
      })
    }
    return () => {
      isMounted.current = false
    }
  }, [])
  return { loggedIn, statusCheck }
}
