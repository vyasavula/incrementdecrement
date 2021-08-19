import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container">
        {menuData.map((currentItem, index) => {
          return (
            <>
              <div className="card-container" key={currentItem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {currentItem.id}
                    </span>
                    <br></br> <br></br>
                    <span className="car-author subtle">
                      {currentItem.category}
                    </span>
                    <h2 className="card-title">{currentItem.name}</h2>
                    <span className="card-description subtle">
                      {currentItem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={currentItem.image}
                    alt="images"
                    className="card-media"
                  />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
