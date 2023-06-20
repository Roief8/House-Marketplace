import { getAuth } from "firebase/auth"
import { useState, useEffect } from "react"

function Profile() {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return user ? <h1>{user.displayName}</h1> : <div>Profile</div>
}

export default Profile
