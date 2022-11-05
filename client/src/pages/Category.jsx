import { useParams } from "react-router-dom";
import Spinner from '../components/Spinner';


const Category =()=>{

    return (
        <>
        <div className="category">
            <header>
                <p className="pageHeader">
                    {useParams().categoryName ==='rent' ? 'Places for rent' : 'Places for sale'}</p>
            </header>
            
        </div>
        </>
    )
}

export default Category