import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore"
import { db } from "../Firebase.config"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import ListingItem from "../components/ListingItem"

function Category() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(() => {
    const fetchListing = async () => {
      try {
        // Get reference
        const ListsRef = collection(db, "listing")

        // Create a query
        const q = query(
          ListsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        )

        // Execute query
        const qSnap = await getDocs(q)

        const listings = []

        qSnap.forEach(
          (doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            })
          },
          [params.categoryName]
        )

        setListing(listings)
        setLoading(false)
      } catch (error) {
        toast.error("Could not load data.")
      }
    }
    fetchListing()
  }, [])

  return (
    <div className="category">
      <header>
        <p className="pageHeader">Places for {params.categoryName}</p>
      </header>

      {loading ? (
        <Spinner />
      ) : listing && listing.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listing.map((listingItem) => (
                <ListingItem
                  listing={listingItem.data}
                  id={listingItem.id}
                  key={listingItem.id}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No listings for {params.categoryName}</p>
      )}
    </div>
  )
}

export default Category
