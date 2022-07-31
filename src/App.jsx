import React from "react";
import Profile from "../src/assets/components/Profile.jsx";
import Information from "../src/assets/components/Information"
import Footer from "../src/assets/components/Footer"
import "./App.css"

export default function App() {
  return (
    <div className="container">
      <Profile />
      <Information />
      <Footer />
    </div>
  )
}