import {useState} from 'react';

const CreateListing = () =>{

    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: '',
        offers: false,
        regularPrice: 0,
        discountedPrice: 0,
        coverImage: {},
        images: {},
        latitude: 0,
        longitude: 0,
    });

    const {type,name, bedrooms, bathrooms, parking, furnished, address, 
        offers, regularPrice, discountedPrice, images, latitude, longitude} = formData;

    const onMutate = (e) => {
        // let boolean = null;

        if(!e.target.files){
            if(e.target.value === 'true'){
                // boolean = true;
                setFormData((prevState)=> {
                    return {
                        ...prevState,
                        [e.target.id] : true ?? e.target.value,
                    }
                })
            }

            if(e.target.value === 'false'){
                // boolean = false;
                setFormData((prevState)=> {
                    return {
                        ...prevState,
                        [e.target.id] : false ?? e.target.value,
                    }
                })
            }
       }

        if(e.target.files){
            setFormData((prevState) =>{
                return{
                ...prevState,
                coverImage: e.target.files,
                images: e.target.files,
                }
            })
        }

        // if(!e.target.files){
        //     setFormData((prevState)=> {
        //         return {
        //             ...prevState,
        //             [e.target.id] : boolean ?? e.target.value,
        //         }
        //     })
        // }
    }
  console.log(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    
  }

    return (
        <div className="profile">
            <header>
                <p className="pageHeader">Create a Listing </p>
            </header>

            <main>
                <form onSubmit={onSubmit}>
                    <label className="formLabel">Rent / Sale</label>
                    <div className="formButtons">
                        <button type="button" name='type' className={type==='rent' ? 'formButtonActive' : 'formButton'} id='type' value='rent' onClick={onMutate}>Rent</button>
                        <button type="button" name='type' className={type==='sale' ? 'formButtonActive' : 'formButton'} id='type' value='sale' onClick={onMutate}>Sale</button>
                    </div>
                    <label className="formLabel">Name</label>
                    <input type="text" name='name' className="formInputName" id='name' value={name} onChange={onMutate} maxLength='40' minLength='10' />
                    <div className="formRooms flex">
                        <div className='bedrooms'>
                            <label className="formLabel">Bedrooms</label>
                            <input type="number" name='bedrooms' className="formInputSmall" id='bedrooms' value={bedrooms} onChange={onMutate} min='1' max='20' required/>
                        </div>
                        <div className='bathrooms'>
                            <label className="formLabel">Bathrooms</label>
                            <input type="number" name='bathrooms' className="formInputSmall" id='bathrooms' value={bathrooms} onChange={onMutate} min='1' max='20' required/>
                        </div>
                    </div>
                    <label className="formLabel">Parking Spot</label>
                    <div className="formButtons">
                        <button name='parking' className={parking === true ? 'formButtonActive': 'formButton'} type='button' id='parking' value={true} onClick={onMutate}>Yes</button>
                        <button name='parking' className={parking === false ? 'formButtonActive': 'formButton'} type='button' id='parking' value={false} onClick={onMutate}>No</button>
                    </div>
                    <label className="formLabel">Furnished</label>
                    <div className="formButtons">
                        <button name='furnished' className={furnished === true ? 'formButtonActive': 'formButton'} type='button' id='furnished' value={true} onClick={onMutate}>Yes</button>
                        <button name='furnished' className={furnished === false ? 'formButtonActive': 'formButton'} type='button' id='furnished' value={false} onClick={onMutate}>No</button>
                    </div>
                    <label className="formLabel">Address</label>
                    <textarea name="address" className='formInputAddress' id="address" cols="7" rows="4" type='text' value={address} onChange={onMutate} required></textarea>
                    <label className="formLabel">Offers</label>
                    <div className="formButtons">
                        <button name='offers' className={offers === true ? 'formButtonActive': 'formButton'} type='button' id='offers' value={true} onClick={onMutate}>Yes</button>
                        <button name='offers' className={offers === false ? 'formButtonActive': 'formButton'} type='button' id='offers' value={false} onClick={onMutate}>No</button>
                    </div>
                    <label className="formLabel">Regular Price</label>
                    <div className="formPriceDiv">
                        <input type="number" name='regularPrice' className="formInputSmall" id='regularPrice' value={regularPrice} onChange={onMutate} min='0' max='1000000000' required/>
                        {type==='rent'? '$ / Month': '$'}
                    </div>
                    {offers && ( 
                    <>
                        <label className="formLabel">Discounted Price</label>
                        <div className="formPriceDiv">
                            <input type="number" name='discountedPrice' className="formInputSmall" id='discountedPrice' value={discountedPrice} onChange={onMutate} min='0' max='1000000000' required/>
                            {type==='rent'? '$ / Month': '$'}
                        </div>
                    </>)}
                    <label className="formLabel">Cover Image</label>
                        <p className="imageInfo">(Accepts .jpg, jpeg, png and less than 2 mb.)</p>
                        <input type="file" name='coverImage' id='coverImage' className="formInputFile" onChange={onMutate} accept='.jpeg, .png, jpg' required/>
                    <label className="formLabel">Images</label>
                        <p className="imageInfo">(Accepts 6 .jpg, jpeg, png and less than 2 mb.)</p>
                        <input type="file" name='images' id='images' className="formInputFile" onChange={onMutate} accept='.jpeg, .png, jpg' max='6' multiple required/>
                    <button type='submit' className="primaryButton createListingButton">Create Listing</button>
                </form>
            </main>
        </div>
    )
}

export default CreateListing;