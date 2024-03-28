import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; // Import useHistory
import { addHotel } from '../../Redux/HotelAction';
import '../add_hotel_form/addHotelForm.css'
const AddHotelForm = () => {

    var user = localStorage.getItem("user")
    user = JSON.parse(user)


    const [formData, setFormData] = useState({
        user: user.id,
        name: '',
        address: '',
        prices: 0,
        description: '',
        rate: 5,
        prices: 0,
        rating: '⭐️',
        governorate: '',
        image: null,
        suite: 0,
        single_room: '',
        family_room: '',
        facility_desc: '',
        facility: '',
        is_tv: false,
        is_wifi: false,
        is_poll: false,
        is_BreakFast: false,
        is_Pet: false,
        is_Accessibiliy: false,
        is_Parking: false,
    });

    const dispatch = useDispatch(); // No longer needed in this component

    const history = useHistory(); // Initialize useHistory hook


    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(formData); 
        await addHotel(formData); // Assuming addHotel is an asynchronous action
        //console.log(user)
        history.push('/'); // Redirect to home component

        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     console.log(formData); 
        //     addHotel(formData); 
        //     console.log(user)


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
                    Facility Description:
                    <textarea name="facility_desc" value={formData.facility_desc} onChange={handleInputChange} />
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
                <div className='d-flex justify-content-between'>
                    <label>
                        TV:
                        <input type="checkbox" name="is_tv" checked={formData.is_tv} onChange={handleInputChange} />
                    </label>

                    <label>
                        WiFi:
                        <input type="checkbox" name="is_wifi" checked={formData.is_wifi} onChange={handleInputChange} />
                    </label>

                    <label>
                        Pool:
                        <input type="checkbox" name="is_poll" checked={formData.is_poll} onChange={handleInputChange} />
                    </label>

                    <label>
                        Breakfast:
                        <input type="checkbox" name="is_BreakFast" checked={formData.is_BreakFast} onChange={handleInputChange} />
                    </label>

                    <label>
                        Pet-friendly:
                        <input type="checkbox" name="is_Pet" checked={formData.is_Pet} onChange={handleInputChange} />
                    </label>

                    <label>
                        Accessibility:
                        <input type="checkbox" name="is_Accessibility" checked={formData.is_Accessibility} onChange={handleInputChange} />
                    </label>

                    <label>
                        Parking:
                        <input type="checkbox" name="is_Parking" checked={formData.is_Parking} onChange={handleInputChange} />
                    </label>
                </div>
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