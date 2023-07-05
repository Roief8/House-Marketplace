import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathIcon from "../assets/svg/bathtubIcon.svg"

function ListingItem({ listing, id, onDelete }) {
  return (
    <li className="categoryListing">
      {console.log(listing)}
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imgURLs[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>

          <p className="categoryListingPrice">
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / Month"}
          </p>
          <div className="categoryListingInfoDiv pt-2">
            <img className="mb-2" src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText mt-1">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <img className="mb-2" src={bathIcon} alt="bath" />
            <p className="categoryListingInfoText mt-1">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76, 60)"
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  )
}

export default ListingItem
