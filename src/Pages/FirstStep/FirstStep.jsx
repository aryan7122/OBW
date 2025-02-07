import { ArrowRight } from 'lucide-react'
// import React from 'react'
import './FirstStep.scss'
const FirstStep = () => {
    return (
        <div className='FirstStep'>
            <div className='h1_card'>
                <h1>
                    Take the first step towards supporting your Skincare health
                </h1>
            </div>
            <p>Contact us today to enquire about our services or to book an appointment</p>
            <button className="view-all">Contact us  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>

        </div>
    )
}

export default FirstStep