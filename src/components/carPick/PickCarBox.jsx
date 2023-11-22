const PickCarBox = ({ data }) => {
  return (
    <>
      {data.map((car, id) => {
        return (
          <div key={id} className="car-box d-flex justify-content-around">
            <div className="pick-car">
              <img src={car.img} alt={car.name} />
            </div>

            <div className="pick-description">
              <div className="pick-description-price">
                <span>${car.price}</span>/ rent per day
              </div>
              <div className="pick-description-table">
                <div className="pick-description-table-col">
                  <span>Model</span>
                  <span>{car.model}</span>
                </div>

                <div className="pick-description-table-col">
                  <span>Mark</span>
                  <span>{car.mark}</span>
                </div>

                <div className="pick-description-table-col">
                  <span>Year</span>
                  <span>{car.year}</span>
                </div>

                <div className="pick-description-table-col">
                  <span>Doors</span>
                  <span>{car.doors}</span>
                </div>

                <div className="pick-description-table-col">
                  <span>AC</span>
                  <span>{car.air}</span>
                </div>

                <div className="pick-description-table-col">
                  <span>Transmission</span>
                  <span>{car.transmission}</span>
                </div>

                <div className="pick-description-table-col">
                  <span>Fuel</span>
                  <span>{car.fuel}</span>
                </div>
              </div>
              {/* btn cta */}
              <a className="cta-btn" href="#booking-section">
                Reserve Now
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PickCarBox;
