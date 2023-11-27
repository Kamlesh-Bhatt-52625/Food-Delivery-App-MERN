import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const navigate = useNavigate();
  const [orderData, setOrderdData] = useState("");
  const fetchMyOrder = async () => {
    console.log("User for the Orders", localStorage.getItem("userEmail"));
    await fetch("http://localhost:8080/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
    }).then(async (res) => {
      let response = await res.json();
      await setOrderdData(response);
    });
  };

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {orderData ? (
            Array(orderData).map((data) => {
              return data.orderData ? (
                data.orderData.order_data
                  .slice(0)
                  .reverse()
                  .map((item) => {
                    return item.map((arrayData) => {
                      return (
                        <div>
                          {arrayData.Order_date ? (
                            <div className="m-auto mt-5">
                              {(data = arrayData.Order_date)}
                              <hr />
                            </div>
                          ) : (
                            <div className="card-columns col-12 col-md-6 col-lg-3">
                              <div
                                className="card mt-3"
                                style={{
                                  width: "16rem",
                                  maxHeight: "360px",
                                }}>
                                {/* <img
                                      src={arrayData.img}
                                      className="card-img-top"
                                      alt="..."
                                      style={{}}
                                    /> */}
                                <div className="card-body c">
                                  <h5 className="card-title">
                                    {arrayData.name}
                                  </h5>
                                  <div
                                    className="container w-100 p-0"
                                    style={{ height: "38px" }}>
                                    <span className="m-1">{arrayData.qty}</span>
                                    <span className="m-1">
                                      {arrayData.size}
                                    </span>
                                    <span className="m-1">{data}</span>
                                    <div className="d-inline ms-2 h-100 w-20 fs-5">
                                      ₹{arrayData.price}/-
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    });
                  })
              ) : (
                <div>
                  <div className="m-5 w-100 text-center fs-3">
                    Hungry? Let your fingers do the ordering. Your favorite meal
                    is just a click away!{" "}
                    <button
                      type="button"
                      className="d-inline btn btn-success"
                      onClick={handleClick}>
                      Order Here
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <div className="m-5 w-100 text-center fs-3">
                Hungry? Let your fingers do the ordering. Your favorite meal is
                just a click away!
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default MyOrder;
