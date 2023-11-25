import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  // BACKEND URL
  const backendURL = `http://localhost:8080`;

  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  // To fetch the foodItems and foodCategory from the backend
  const loadData = async () => {
    let res = await fetch(`${backendURL}/api/foodData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    console.log(res[0], res[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Carousel />
      </div>

      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
