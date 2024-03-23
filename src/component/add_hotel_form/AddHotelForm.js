import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel } from '../../Redux/HotelAction';
import './addHotelForm.css'
const AddHotelForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        description: '',
        rate: 5,
        price: 0,
        rating: '⭐️',
        review: 0,
        status: 'Good',
        governorate: '',
        image: null,
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addHotel(formData));
        window.location.reload();
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
                    Description:
                    <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Rate:
                    <input
                        type='number'
                        name='rate'
                        value={formData.rate}
                        onChange={handleInputChange}
                        min={1}
                        max={10}
                    />
                </label>
                <br />
                <label>
                    Prices:
                    <input
                        type='number'
                        name='price'
                        value={formData.price}
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
                    Review:
                    <input
                        type='number'
                        name='review'
                        value={formData.review}
                        onChange={handleInputChange}
                        min={0}
                    />
                </label>
                <br />
                <label>
                    Status:
                    <select
                        name='status'
                        value={formData.status}
                        onChange={handleInputChange}
                    >
                        <option value='Poor'>Poor</option>
                        <option value='Okay'>Okay</option>
                        <option value='Good'>Good</option>
                        <option value='Very Good'>Very Good</option>
                        <option value='Excellent'>Excellent</option>
                    </select>
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
                    Image:
                    <input
                        type='file'
                        name='image'
                        onChange={handleImageChange}
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