import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import './hotel.css';

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);

    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilPEtUi95xZc/v1/1200x-1.jpg"
        },
        {
            src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyyuSE2uXRdA/v1/1200x-1.jpg"
        },
        {
            src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioMsCpw5eW4M/v1/1200x-1.jpg"
        },
        {
            src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilPEtUi95xZc/v1/1200x-1.jpg"
        },
        {
            src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyyuSE2uXRdA/v1/1200x-1.jpg"
        },
        {
            src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioMsCpw5eW4M/v1/1200x-1.jpg"
        }
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;
        const lastPhotosIndex = photos.length - 1;

        if(direction === 'l'){
            newSlideNumber = slideNumber === 0 ? lastPhotosIndex : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === lastPhotosIndex ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open &&
                    <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('l')}/>
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('r')}/>
                    </div>
                }
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">
                        Grand Hotel
                    </h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighLight">
                        Book a stay over $114 at this property and get a free airport taxi.
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img src={photo.src} onClick={ () => handleOpen(i)} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, 
                                this property has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights) 
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Hotel