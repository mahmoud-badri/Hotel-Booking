import React, { useState, useEffect } from 'react';
import { addHotel, editHotel } from '../../Redux/HotelAction';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './Edite.css'
const EditHotel = ({ hotelId }) => {
    var user = localStorage.getItem("user")
    user = JSON.parse(user)
    const [hotelData, setHotelData] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        prices: '',
        description: '',
        rating: '',
        governorate: '',
        image: '',
        suite: '',
        single_room: '',
        family_room: '',
        facility_desc: '',
        facility: '',
        is_tv: '',
        is_wifi: '',
        is_poll: '',
        is_BreakFast: '',
        is_Pet: '',
        is_Accessibiliy: '',
        is_Parking: '',

    });
    useEffect(() => {
        // Fetch initial hotel data
        fetch(`http://127.0.0.1:8000/hotel/byOwner/${hotelId}`)
            .then(response => response.json())
            .then(data => {
                setHotelData(data);
                setFormData({
                    name: data.name,
                    address: data.address,
                    prices: data.prices,
                    description: data.description,
                    rating: data.rating,
                    governorate: data.governorate,
                    // image: data.image,
                    suite: data.suite,
                    single_room: data.single_room,
                    family_room: data.family_room,
                    facility_desc: data.facility_desc,
                    facility: data.facility,
                    is_tv: data.is_tv,
                    is_wifi: data.is_wifi,
                    is_poll: data.is_poll,
                    is_BreakFast: data.is_BreakFast,
                    is_Pet: data.is_Pet,
                    is_Accessibiliy: data.is_Accessibiliy,
                    is_Parking: data.is_Parking,

                })

            })
            .catch(error => console.log(error));
    }, [hotelId]);


    const history = useHistory()
    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        history.push('/'); // Redirect to home component
    };

    const dispatch = useDispatch()
    const updatedHotel = {
        id: hotelId,
        ...formData
    };
    //useEffect(() => {
        //dispatch(editHotel(updatedHotel))
    //}, [updatedHotel])

    useEffect(() => {
        const updatedHotel = {
            id: hotelId,
            ...formData
        };
        dispatch(editHotel(updatedHotel));
    }, [dispatch, hotelId, formData]);

    const handleDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // Make DELETE request to delete the hotel
      fetch(`http://127.0.0.1:8000/hotel/delete/${hotelId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            Swal.fire("Deleted!", "Your hotel has been deleted.", "success");
            history.push("/"); // Redirect to home after successful deletion
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire("Error", "An error occurred while deleting the hotel.", "error");
        });
    }
  });

};

    return (
        <div>
            <h2>Edit Hotel Data</h2>
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
                        className='btn btn-success w-45 fw-bold'
                        type='submit'
                        style={{ transition: 'background-color 0.3s, color 0.3s' }}
                        onMouseOver={(e) => e.target.classList.add('btn-hover')}
                        onMouseOut={(e) => e.target.classList.remove('btn-hover')}
                    >
                        Update the Hotel
                    </button>
                    <button
                        className='del btn btn-danger w-45 fw-bold'
                        onClick={handleDelete}
                        style={{ transition: 'background-color 0.3s, color 0.3s' }}
                    >
                        Delete the Hotel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditHotel;