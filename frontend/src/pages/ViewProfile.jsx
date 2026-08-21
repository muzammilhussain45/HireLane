import React from "react";
import ViewProfilePage from "../components/ViewProfilePage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewProfile = () => {
  return (
    <div>
        <Navbar/>
     <ViewProfilePage />
     <Footer/>
    </div>
  );
};

export default ViewProfile;