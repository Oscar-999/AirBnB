import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkAllSpots } from "../../store/spots";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Footer from "./LandingPageFooter/LandingPageFooter";

const LandingPage = () => {
  const dispatch = useDispatch();
  const spotObj = useSelector((state) => state.spots.allSpots);
  const spotList = Object.values(spotObj);

  useEffect(() => {
    dispatch(thunkAllSpots());
  }, [dispatch]);

  if (!spotList) {
    return null;
  }

  return (
    <>
    <main className="main landing-page">
      <ul>
        {spotList.length > 0 &&
          spotList.map((spot) => (
            <div key={spot.id} className="spot" title={spot.name}>
              <Link to={`/spots/${spot.id}`}>
                <div className="image">
                  <img src={spot.previewImage} alt="home" />
                </div>
                <div className="list">
                  <div className="star">
                    <li>
                      {spot.city}, {spot.state}
                    </li>
                    {spot.avgRating === 0 ? (
                      <li className="star-avg">★ New</li>
                    ) : (
                      typeof spot.avgRating === "number" && (
                        <li className="star-avg">★ {spot.avgRating.toFixed(1)}</li>
                      )
                    )}
                  </div>
                  <li className="price">${spot.price} night</li>
                </div>
              </Link>
            </div>
          ))}
      </ul>
    </main>
      <Footer />
      </>

  );
};

export default LandingPage;
