import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { db } from "../Firebase.config"
import { toast } from "react-toastify"

function Contact() {
  const [message, setMessage] = useState("")
  const [owner, setOwner] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getOwner = async () => {
      const docRef = doc(db, "users", params.ownerId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setOwner(docSnap.data())
      } else {
        toast.error("Could not find Owner data")
      }
    }
    getOwner()
  }, [params.ownerId])

  const onChange = (e) => setMessage(e.target.value)

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Contact Owner</p>
      </header>

      {owner !== null && (
        <main>
          <div className="contactLandlord">
            <p className="landlordName">Contact {owner?.name}</p>
          </div>

          <form className="messageForm">
            <div className="messageDiv">
              <label htmlFor="message" className="messageLabel">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="textArea"
                value={message}
                onChange={onChange}
              ></textarea>
            </div>
            <button
              className="primaryButton"
              type="button"
              onClick={() => {
                window.open(
                  `mailto:${owner.email}?Subject=${searchParams.get(
                    "listingName"
                  )}&body=${message}`
                )
              }}
            >
              Send Message
            </button>
          </form>
        </main>
      )}
    </div>
  )
}

export default Contact
