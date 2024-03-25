import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHotel } from '../../Redux/HotelAction';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const AddRoomForm = () => {

    const [formData, setFormData] = useState({
        hotel:'',
        bed: '',
        type: '',
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
        addHotel(formData);
        window.location.reload();
    };

    return (
        <form className="hotel-form" onSubmit={handleSubmit}>
            <div>
            <label>
                    hotel:
                    <input
                        type='text'
                        name='hotel'
                        value={formData.hotel}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Bed:
                    <input
                        type='text'
                        name='bed'
                        value={formData.bed}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    type:
                    <textarea
                        name='type'
                        value={formData.type}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
{/*                
                <label>
                    Image:
                    <input
                        type='file'
                        name='image'
                        onChange={handleImageChange}
                    />
                </label> */}
           
                <br />
                <button
                    className='btn btn-danger w-50 fw-bold'
                    type='submit'
                    style={{ transition: 'background-color 0.3s, color 0.3s' }}
                    onMouseOver={(e) => e.target.classList.add('btn-hover')}
                    onMouseOut={(e) => e.target.classList.remove('btn-hover')}
                >
                    Add room
                </button>
            </div>
        </form>
    );
};

export default AddRoomForm;