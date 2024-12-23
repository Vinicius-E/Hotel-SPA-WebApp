import React, { useEffect, useState } from "react";
import "./HotelDetail.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/utils/LoadingSpinner";
import HotelUtils from "../../components/utils/Hotel";
import {
  Subtitle2,
  TextContent,
  Title2,
} from "../../components/utils/StyledFonts";
import Rating from "../../components/utils/Rating";
import Toast from "../../components/utils/Toast";

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotelUtils = HotelUtils();
  const [hotel, setHotel] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5212/api/hotels/${id}`
        );
        setHotel(response.data);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotelDetails();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  if (!hotel) return <div>Hotel Not Found</div>;

  const goToHotels = () => {
    navigate("/");
  };

  const handleToast = (value) => {
    setShowToast(value);
  };

  const handleClose = () => {
    setShowToast(false);
    navigate("/");
  };

  return (
    <>
      <Toast
        isVisible={showToast}
        message="Your booking has been confirmed!"
        onClose={handleClose}
      />
      <div className="hotelDetailWrapper">
        <div className="hotelDetailContent">
          <img
            src={hotelUtils.getHotelImage(hotel.id)}
            className="imgBackground"
            alt={hotel.name}
          />
          <Title2>{hotel.name}</Title2>
          <Rating rating={hotel.rating} />
          <Subtitle2> {hotel.location} </Subtitle2>
          <div className="travelDates">
            {hotel.datesOfTravel.map((date, index) => (
              <TextContent key={index}>
                {index === 0 ? "From: " : "To: "} {hotelUtils.formatDate(date)}
              </TextContent>
            ))}
          </div>

          <TextContent>
            <strong>{hotel.boardBasis}</strong>
          </TextContent>
          <div>
            {hotel.rooms.map((room, index) => (
              <TextContent key={index} className="roomItem">
                {room.roomType}: {room.amount} available
              </TextContent>
            ))}
          </div>

          <div className="buttonWrapper">
            <button onClick={goToHotels}>Go Back</button>
            <button onClick={() => handleToast(true)}>Book It</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetail;