import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  // BACKEND URL
  const backendURL = `http://localhost:8080`;

  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const [search, setSearch] = useState("");

  // To fetch the foodItems and foodCategory from the backend
  const loadData = async () => {
    let res = await fetch(`${backendURL}/api/foodData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    setFoodItem(res[0]);
    setFoodCategory(res[1]);
    // console.log(res[0], res[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  // console.log(foodCategory);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div
            className="carousel-caption d-none d-md-block"
            style={{ zIndex: "9" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?noodles"
              className="d-block w-100"
              style={{
                filter: "brightness(40%)",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?fries"
              className="d-block w-100"
              style={{
                filter: "brightness(40%)",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?barbeque"
              className="d-block w-100"
              style={{
                filter: "brightness(40%)",
              }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        {foodCategory ? (
          foodCategory.map((data) => {
            return (
              <div key={data._id} className="row mb-3">
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3">
                          <Card
                            foodName={filterItems.name}
                            options={filterItems.options[0]}
                            image={filterItems.img}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No Such Item Found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No Such Item Found</div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
