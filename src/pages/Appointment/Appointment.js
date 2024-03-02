import React from 'react'
import { FaAirbnb } from "react-icons/fa";
import "./Appointment.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom';
// import CalendarNavBar from './CalendarNavBar';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import CalendarFunc from "../../component/calender/CalendarFunc";

// import { LoginSocialGoogle } from 'reactjs-social-login';
// import { StickyContainer, Sticky } from 'react-sticky';
// import GoogleButton from 'react-google-button'

const Appointment = ({ toggle, setToggle })=>{
    // const dispacth = useDispatch();
    let [adults, setAdults] = useState(0);
    let [infants, setInfants] = useState(0);
    let [children, setChildren] = useState(0);
    const adultsQuantity = adults //useSelector((state) => state.counter.value);
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputValue, setInputeValue] = useState("");

    const inputValueHandler = (e) => {
        setInputeValue(e.target.value);
      }

      const increaeHandler = () => {
        // dispacth(counterActions.increaseCount());
          setAdults(adults + 1)

      }
    
    
      const decreaseHandler = () => {
        // dispacth(counterActions.decrementCount());
        if (adults <= 0) {
          return
        }
        else {
          setAdults(adults - 1)
        }
      }
    
const infantsAdd = () => {
  setInfants(infants + 1)
  } 

const infantsLess = () => {
    if (infants <= 0) {
      return
    }
    else {
      setInfants(infants - 1)
    }
  }

  const options = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ]

  const childrenAdd = () => {
    setChildren(children + 1)
  }
  const childrenLess = () => {
    if (children <= 0) {
      return
    }
    else {
      setChildren(children - 1)
    }
  }


  const [buttonOpen, setButtonOpen] = useState(false);
    const [buttonClose, setButtonClose] = useState(true);

    const buttonOpenHandler = (event) => {
        event.preventDefault();
        setButtonOpen(true)
        setButtonClose(false)
    }

    const buttonCloseHandler = (event) => {
        event.preventDefault();
        setButtonClose(false);
        setButtonOpen(false)

    }
    return(
        <>
        



              {/* <label htmlFor='my-modal-4' className='navbarAnyHold flex inpWidth2 cursor-pointer'> */}
                {/* <p className=' inline-block'> Anywhere <p className=' inline-block ml-1'> | </p> </p> */}
                {/* <p className=' inline-block'> Any Week <p className=' inline-block ml-1'> | </p> </p>
                <p className=' text-gray-400 whitespace-nowrap '> Add guests <AiOutlineSearch className=' whitespace-nowrap inline-block' /> </p>
              </label> */}


               {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <input placeholder="Search For Your Destanation" onChange={inputValueHandler} onClick={() => setToggle(!toggle)} value={inputValue} type="text" className="flex outline-none items-center flex-grow-0 flex-shrink pl-2 relative inputBox  border  px-1  py-1" /> */}
                  <div className=''>
                    <button className='reserve-date-button rounded-xl' onClick={buttonOpenHandler}> Reserve</button>
                  </div>
                {buttonOpen &&
                  <div className=''> 

                    <Tabs variant='soft-rounded' colorScheme=''>
                      <TabList>
                        {/* <Tab>PLACE</Tab> */}
                        <Tab>DATES</Tab>
                        <Tab>GUESTS</Tab>
                        <Tab> {buttonOpen && <button className='close-cal rounded-xl' onClick={buttonCloseHandler}>Cancel</button>} </Tab>
                      </TabList>


                      <TabPanels>

                        <TabPanel>
                          <CalendarFunc />
                        </TabPanel>

                        <TabPanel>
                          <div className='tab3MainHold  flex-col  '>
                            <div className="row d-flex justify-content-between p-3">
                              <p className="col-2 ms-2"> Adults  </p>
                              <p className='text-muted col-5'>  Ages 13 or above</p>
                            <div className="col-4 d-flex justify-content-between">
                            <AiOutlinePlusCircle className='fss' onClick={increaeHandler} />
                            <p className=''>{adultsQuantity} </p>
                            <AiOutlineMinusCircle className='fss' onClick={decreaseHandler} />
                            </div>
                            </div>
                            
                            <div className="row d-flex justify-content-between p-3">
                              <p className="col-2 ms-2"> Children  </p>
                              <p className='text-muted col-5'>  Ages 2-12</p>
                            <div className="col-4 d-flex justify-content-between">
                            <AiOutlinePlusCircle className='fss' onClick={childrenAdd} />
                            <p className=''>{children} </p>
                            <AiOutlineMinusCircle className='fss' onClick={childrenLess} />
                            </div>
                            </div>

                            <div className="row d-flex justify-content-between p-3">
                              <p className="col-2 ms-2"> Infants  </p>
                              <p className='text-muted col-5'> Under 2 </p>
                            <div className="col-4 d-flex justify-content-between">
                            <AiOutlinePlusCircle className='fss' onClick={infantsAdd} />
                            <p className=''>{infants} </p>
                            <AiOutlineMinusCircle className='fss' onClick={infantsLess} />
                            </div>
                            </div>

                            <div className="row d-flex justify-content-between p-3">
                              <p className="col-2"> Pets  </p>
                              <p className='col-5 text-muted'> Select pet friendly </p>
                            <div className="col-5">
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                className="outline-none"
                              />
                            </div>
                            </div>
                            
                          </div>
                          
                        </TabPanel>

                      </TabPanels>
                    </Tabs>

                  </div>
                  }

                {/* </label>
              </label> */}
        </>
    )
                      }
export default Appointment