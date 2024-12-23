import "./CentralizedLayout.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import LoadingSpinner from "../utils/LoadingSpinner";

const CentralizedLayout = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="centralizeWrapper">
      <div className="centralizeContent">
        <div className="responsiveColumn">          
          {!loading && (
            <>
              <Header />
              <Outlet setLoading={setLoading}/>
              <Footer />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CentralizedLayout;
