import React from "react";
import StarRatingTest from "../components/StarRatingTest";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import ReviewTest from "../../component/api_test/api_Reviews";

function ApiTestPage() {
  return (
    <div>
      <MyNavbar />
      {/* <StarRatingTest /> */}
      <ReviewTest />
      <Footer />
    </div>
  );
}

export default ApiTestPage;
