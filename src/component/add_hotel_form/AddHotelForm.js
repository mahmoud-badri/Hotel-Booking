import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel } from '../../Redux/HotelAction';
import './addHotelForm.css'
const AddHotelForm = () => {

    var user = localStorage.getItem("user")
    user = JSON.parse(user)

   
    const [formData, setFormData] = useState({
        user:user.id,
        name: '',
        address: '',
        prices:0,
        description: '',
        governorate: '',
        image: null,
        suite: 0,
        single_room:'',
        family_room:'',
        facility:'',
        
    });

   
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
        addHotel(formData); 
        console.log(user)
        // fetch('/api/add', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(FormData),
        //   })
        //     .then((response) => {
        //       if (response.ok) {
        //         // Handle success
        //         console.log('Hotel added successfully');
        //       } else {
        //         // Handle error
        //         console.error('Failed to add hotel');
        //       }
        //     })
        //     .catch((error) => {
        //       console.error('Error:', error);
        //     });
        //window.location.reload();

    };
    return (
        <form className="hotel-form" onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <textarea
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Governorate:
                    <input
                        type='text'
                        name='governorate'
                        value={formData.governorate}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </label>
                <br />

                <label>
                    Avrage price:
                    <input
                        type='number'
                        name='prices'
                        value={formData.prices}
                        onChange={handleInputChange}
                        min={0}
                        step={0.01}
                    />
                </label>
                <br />
                <label>
                    Rating:
                    <select
                        name='rating'
                        value={formData.rating}
                        onChange={handleInputChange}
                    >
                        <option value='⭐️'>⭐</option>
                        <option value='⭐️⭐️'>⭐️⭐</option>
                        <option value='⭐️⭐️⭐️'>⭐️⭐️⭐</option>
                        <option value='⭐️⭐️⭐️⭐️'>⭐️⭐️⭐️⭐</option>
                        <option value='⭐️⭐️⭐️⭐️⭐️'>⭐️⭐️⭐️⭐️⭐</option>
                    </select>
                </label>

                <br />
                <label>
                    Image:
                    <input
                        type='file'
                        name='image'
                        onChange={handleImageChange}
                    />
                </label>
                <label>
                    Facilities(comma separator):
                    <textarea
                        name='facility'
                        value={formData.facility}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Single Room Price:
                    <input
                        type='number'
                        name='single_room'
                        value={formData.single_room}
                        onChange={handleInputChange}
                        min={0}
                        step={0.01}
                    />
                </label>
                <br />
                <label>
                    Suite Price:
                    <input
                        type='number'
                        name='suite'
                        value={formData.suite}
                        onChange={handleInputChange}
                        min={0}
                        step={0.01}
                    />
                </label>
                <br />
                <label>
                    Family Room Price:
                    <input
                        type='number'
                        name='family_room'
                        value={formData.family_room}
                        onChange={handleInputChange}
                        min={0}
                        step={0.01}
                    />
                </label>
                <br />
                <button
                    className='btn btn-danger w-50 fw-bold'
                    type='submit'
                    style={{ transition: 'background-color 0.3s, color 0.3s' }}
                    onMouseOver={(e) => e.target.classList.add('btn-hover')}
                    onMouseOut={(e) => e.target.classList.remove('btn-hover')}
                >
                    Add Hotel
                </button>
            </div>
        </form>
    );
};

export default AddHotelForm;