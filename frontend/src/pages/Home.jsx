import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Candidate from "../components/Candidate";
import Career from "../components/Career";
import InterviewQuestion from "../components/InterviewQuestion";
import Footer from "../components/Footer";



export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Candidate/>
      <Career/>
      <InterviewQuestion/>
      <Footer/>
    </div>
  );
}
