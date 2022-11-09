import { useParams } from "react-router-dom";
import Spinner from '../components/Spinner';
import ListItem from "../components/ListItem";


const Category =()=>{

    return (
        <>
        <div className="category">
            <header>
                <p className="pageHeader">
                    {useParams().categoryName ==='rent' ? 'Places for rent' : 'Places for sale'}</p>
            </header>
            <main>
                <ul className="categoryListings">
                    <ListItem categoryType={useParams().categoryName} />
                </ul>
            </main>
            
        </div>
        </>
    )
}

export default Category