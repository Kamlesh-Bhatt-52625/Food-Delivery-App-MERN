import React from "react";

const Card = (props) => {
  const { foodName, image, options } = props;
  // console.log(foodName);

  let priceOptions = Object.keys(options);

  const handleAddToCart = () => {};

  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "395px" }}>
          <img
            src={image}
            className="card-img-top"
            alt="..."
            style={{ height: "185px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{foodName}</h5>
            <div className="container wd-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-success rounded">
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>

              <div className="d-inline fs-5 h-100">Total Price</div>
            </div>
            <hr />
            <button
              className={`btn btn-success justify-center ms-2`}
              onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
