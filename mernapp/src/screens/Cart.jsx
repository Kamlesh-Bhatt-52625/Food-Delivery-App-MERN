import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  let current = new Date();
  let cDate =
    current.getDate() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getFullYear();
  let cTime =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();
  let dateTime = cDate + " - " + cTime;

  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
      </div>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log("UserEmail", userEmail);
    let res = await fetch("http://localhost:8080/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: dateTime,
      }),
    });
    // console.log("Order response", res);
    if (res.status === 200) {
      dispatch({ type: "DROP" });
      let time = Math.floor(Math.random() * 50) + 20;
      alert(`The food will be deliverd to you within ${time} minutes`);
    }
  };

  return (
    <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
      <table className="table table-hover ">
        <thead className=" text-success fs-4">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Option</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{food.name}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>{food.price}</td>
              <td>
                <button type="button" className="btn p-0">
                  <MdDeleteOutline
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  />
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
      </div>
      <div>
        <button className="btn bg-success mt-5 " onClick={handleCheckOut}>
          {" "}
          Check Out{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
