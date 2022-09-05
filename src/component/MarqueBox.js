import React from 'react';
import { SliderData } from './SliderData';


export default function MarqueBox(props) {
    return (
        <div className="logos">
            <div className='marquee-wrapper'>
                {Array.from(Array(2), (e, i) => {
                    return (
                        <div className='marquee'>
                            {
                                SliderData.map((slide, index) => {
                                    return (
                                        <div key={index} className="carousel">
                                            <img src={slide.image} alt='slide' />
                                        </div>
                                    )
                                })

                            }
                        </div>
                    )
                })}
            </div>
        </div >
    );
}
