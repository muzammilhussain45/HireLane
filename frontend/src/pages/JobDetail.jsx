import React from  'react'
import Footer from "../components/Footer/Footer"
import JobDetailPage from "../components/JobDetailsPage/JobDetailsPage"
import Navbar from "../components/Navbar/Navbar"



const JobDetail = ()=>{
    return (
        <div>
        <Navbar/>
        <JobDetailPage/>
        <Footer/>
        </div>
    );
};

export default JobDetail;