import React from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { IoEllipsisVertical } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'


const BidBox = () => {
    return (
        <div className=' bg-white p-6 justify-between flex box_shadow rounded'>

            {/* left div start */}
            <div className="left flex flex-col justify-between text-sm ">
                <h1 className=' text-2xl text-buyer-small_heading font-semibold'>Apixaban</h1>
                <div className=' bg-buyer-button_1 p-1 rounded px-3 w-fit'>Bidding Ended</div>
                <div className="decr_box flex gap-12">
                    <div className="first text-sm ">
                        <p className=' my-2 text-center text-buyer-text-color font-semibold'>Quantity</p>
                        <p className=' text-center'>3 MT</p>
                    </div>
                    <div className="second text-sm">
                        <p className='my-2  text-center text-buyer-text-color font-semibold'>HS CODE</p>
                        <p className=' text-center'>29153100</p>
                    </div>
                    <div className="third text-sm">
                        <p className='my-2  text-center text-buyer-text-color font-semibold'>CAS NO.</p>
                        <p className=' text-center'>503612-47-3</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-end text-base font-medium text-buyer-second_know_more capitalize'><a href="/" className='  font-semibold'>Know more</a>
                    <MdOutlineArrowDropDown className=' cursor-pointer' size={22} />
                </div>
            </div>

            {/* right div start */}
            <div className='left  flex flex-col text-sm  gap-3'>
                <div className="right_head text-buyer-text-color flex items-center justify-between">
                    <p>Lowest Bid Yet</p>
                    <IoEllipsisVertical className=' cursor-pointer' size={16} />
                </div>
                <h1 className=' text-2xl font-bold'>$ 1,893.44</h1>
                <p className=' text-buyer-text-color mb-4'>*Updates in 12hrs</p>

                <div className="buttons flex items-center gap-4">
                    <button className=' py-3 px-12 rounded-md text-sm bg-buyer-second_know_more text-white'>Accept</button>
                    <div className=' border p-3 rounded border-buyer-second_know_more'>
                        <FiPhoneCall size={20}/>
                    </div>
                </div>
                <a href="/" className=' underline text-buyer-primary text-center'>Reject</a>
            </div>

        </div>
    )
}

export default BidBox