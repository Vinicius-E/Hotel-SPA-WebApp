import "./HotelList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Rating from "../../components/utils/Rating";
import ScreenSize from "../../components/utils/ScreenSize";
import LoadingSpinner from "../../components/utils/LoadingSpinner";
import {
  Title2,
  Subtitle1,
  Subtitle2,
} from "../../components/utils/StyledFonts";
import HotelUtils from "../../components/utils/Hotel";
import Toast from "../../components/utils/Toast";

const HotelList = () => {
  const currentHotels = [];
  const [width] = ScreenSize();
  const hotelUtils = HotelUtils();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hotelsPerPage, setHotelPerPage] = useState(3);

  useEffect(() => {
    if (width < 780) {
      changeListSize(1);
    } else if (width < 1280) {
      changeListSize(2);
    } else {
      changeListSize(3);
    }
  }, [width]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        /* WOULD BE IN ENVIROMENTS */
        const response = await axios.get("http://localhost:5212/api/hotels");
        setHotels(response.data);
      } catch (error) {
        setToastMessage("Error fetching hotels: " + error);
        setShowToast(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, [showToast]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + hotelsPerPage) % hotels.length
      );
    }, 3500);
    return () => clearInterval(interval);
  }, [hotels.length, hotelsPerPage]);

  const changeListSize = (size) => {
    setHotelPerPage(size);
  };

  const handleClose = () => {
    setShowToast(false);
  };

  if (loading) return <LoadingSpinner />;

  if (hotelsPerPage && hotelsPerPage > 0) {
    for (let i = 0; i < hotelsPerPage; i++) {
      const index = (currentIndex + i) % hotels.length;
      currentHotels.push(hotels[index]);
    }
  }

  return (
    <>
      <Toast
        isVisible={showToast}
        message={toastMessage}
        onClose={handleClose}
      />
      <div className="hotelListWrapper">
        <div className="imgContainer">
          <Title2 className="imgTitle">Explore! Dream! Discover!</Title2>
          <img
            src="assets/images/background-1.jpg"
            className="imgBackground"
            alt="Explore!"
          />
        </div>

        <div className="carousel">
          <div className="container">
            {currentHotels.map((hotel) => (
              <div key={hotel.id} className="card">
                <Link
                  to={`/hotels/${hotel.id}`}
                  title={hotel.name}
                  className="cardLink"
                >
                  <Subtitle1>{hotel.name}</Subtitle1>
                  <img
                    src={hotelUtils.getHotelImage(hotel.id)}
                    className="imgCard"
                    alt={hotel.name}
                  />
                  <Subtitle2>{hotel.location}</Subtitle2>
                  <Rating className="rating" rating={hotel.rating} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="imgContainer">
          <Title2 className="imgTitle" isWhite={true}>
            Check-In for the Time of Your Life!
          </Title2>
          <img
            src="assets/images/background-2.jpg"
            className="imgBackground"
            alt="Check-In"
          />
        </div>

        <div className="hotelListTableWrapper">
          <div className="hotelListTable">
            <Title2>Opportunities</Title2>
            {hotels.map((hotel, index) => (
              <Link
                key={index}
                to={`/hotels/${hotel.id}`}
                title={hotel.name}
                className="hotelListContent"
              >
                {/* <div  key={index} className="hotelListContent"> */}
                <Subtitle2 className="hLName">{hotel.name}</Subtitle2>
                <Subtitle2 className="hLPeriod">
                  {hotelUtils.formatDateAbreviated(hotel.datesOfTravel)}
                </Subtitle2>
                <Subtitle2 className="hLNights">
                  {hotelUtils.calculateTotalNights(hotel.datesOfTravel)} Nights
                </Subtitle2>
              </Link>
            ))}
          </div>
        </div>

        <div className="imgContainer">
          <Title2 className="imgTitle" isWhite={true}>
            Find Yourself in Every Journey!
          </Title2>
          <img
            src="assets/images/background-3.jpg"
            className="imgBackground"
            alt="Journey"
          />
        </div>
      </div>
    </>
  );
};
export default HotelList;