import { Link } from "react-router-dom";
import {ReactComponent as DeleteIcon} from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathTubIcon from "../assets/svg/bathtubIcon.svg";
import rentIcon from "../assets/jpg/rentCategoryImage.jpg";

const ListItem = ({categoryType, id, onDelete}) =>{
    return (
        <>
          <li className="categoryListing">
            <Link to={`/category/${categoryType}`} className='categoryListingLink'>
            <img src={rentIcon} alt="" className="categoryListingImg" />
            <div className="categoryListingDetails">
                <p className="categoryListingLocattion">
                    34 Alfred Street, Melbourne, Victoria
                </p>
                <p className="categoryListingName">
                    Beautiful 2 Bedroom Stratsford Condo House
                </p>
                <p className="categoryListingPrice">
                    $2,000
                </p>
                <div className="categoryListingInfoDiv">
                    <img src={bedIcon} alt="bed" srcset="" />
                    <p className="categoryListingInfoText">
                        3 Bedrooms
                    </p>
                    <img src={bathTubIcon} alt="bath" />
                    <p className="categoryListingInfoText">
                        2 Bathrooms
                    </p>
                </div>
            </div>
            </Link>
            {onDelete ? <DeleteIcon className='removeIcon' fill='rgb(231,76,60)' onClick={()=>onDelete()}></DeleteIcon>: ''}
          </li>
        
        </>
    )
}
 
export default ListItem;