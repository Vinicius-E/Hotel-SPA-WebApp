const HotelUtils = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const abreviatedMonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getHotelImage = (hotelId) => {
    const hotelImages = {
      1: `${process.env.PUBLIC_URL}/assets/images/seaside-paradise.jpg`,
      2: `${process.env.PUBLIC_URL}/assets/images/mountain-retreat.jpg`,
      3: `${process.env.PUBLIC_URL}/assets/images/urban-oasis.jpg`,
      4: `${process.env.PUBLIC_URL}/assets/images/desert-dream.jpg`,
      5: `${process.env.PUBLIC_URL}/assets/images/tropical-escape.jpg`,
      6: `${process.env.PUBLIC_URL}/assets/images/historic-haven.jpg`,
      7: `${process.env.PUBLIC_URL}/assets/images/safari-lodge.jpg`,
      8: `${process.env.PUBLIC_URL}/assets/images/ocean-breeze.jpg`,
      9: `${process.env.PUBLIC_URL}/assets/images/rainforest-retreat.jpg`,
      10: `${process.env.PUBLIC_URL}/assets/images/island-bliss.jpg`,
    };

    return hotelImages[hotelId] || "assets/images/default.jpg";
  };

  const formatDateAbreviated = (dates) => {
    if (dates.length !== 2) {
      throw new Error("Expected an array with exactly two dates.");
    }

    const startDate = new Date(dates[0] + "T00:00:00");
    const endDate = new Date(dates[1] + "T00:00:00");

    const startDay = startDate.getDate();
    const startMonth = abreviatedMonthNames[startDate.getMonth()];
    const endDay = endDate.getDate();

    return `${startDay} ${startMonth} '${endDay}`;
  };

  const calculateTotalNights = (dates) => {
    if (dates.length !== 2) {
      throw new Error("Expected an array with exactly two dates.");
    }

    const startDate = new Date(dates[0]);
    const endDate = new Date(dates[1]);
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return {
    formatDate,
    getHotelImage,
    formatDateAbreviated,
    calculateTotalNights,
  };
};

export default HotelUtils;