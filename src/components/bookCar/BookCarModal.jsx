import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import images from "../image";
import { CarContext } from "../../App";

export default function BookCarModal({ userData }) {
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const { show, setShow } = useContext(CarContext);

  const handleClose = () => setShow(false);

  const onSubmitInfo = (data) => {
    alert(JSON.stringify(data));
  };

  //display based on value name show car img
  let imgUrl;
  switch (userData.carType) {
    case "Audi A1 S-Line":
      imgUrl = images[0];
      break;
    case "Mercedes-Benz GLK":
      imgUrl = images[1];
      break;
    case "BMW 320 ModernLine":
      imgUrl = images[2];
      break;

    case "VW Golf 6":
      imgUrl = images[3];
      break;
    case "VW Passat CC":
      imgUrl = images[4];
      break;
    case "Toyota Camry":
      imgUrl = images[5];
      break;

    default:
      imgUrl = "";
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Complete Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="checkout-info-box">
            <h3 className="checkout-info-title">
              {" "}
              Upon completing this reservation enquiry, you will receive:::
            </h3>
            <p className="checkout-info-desc">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>

          <div className="modal-body-inner">
            <Row>
              <Col lg="6">
                <div className="location-date-info">
                  <h3>Location & Date</h3>
                  <div className="info-box">
                    <div className="media-box">
                      <h5>Pick-Up Time</h5>
                      <span>{userData.pickTime}</span>
                    </div>
                    <div className="media-box">
                      <h5>Drop-Off Time</h5>
                      <span>{userData.dropTime}</span>
                    </div>
                    <div className="media-box">
                      <h5>Pick-up Location</h5>
                      <span>{userData.pickUp}</span>
                    </div>
                    <div className="media-box">
                      <h5>Drop-up Location</h5>
                      <span>{userData.dropOff}</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="car-info">
                  <h5>{userData.carType}</h5>
                  <img src={imgUrl} alt="car image" className="w-100" />
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <div className="checkout-personal-info py-5">
          <Container>
            <h5>PERSONAL INFORMATION</h5>
            <form key={2} onSubmit={handleSubmit2(onSubmitInfo)}>
              <Row>
                <Col lg="6">
                  <label>
                    First Name<b>*</b>
                  </label>
                  <input
                    type="text"
                    className="w-100"
                    {...register2("firstName", {
                      required: "This field is required",
                    })}
                    placeholder="Enter your first name"
                  />
                  {
                    <span className="text-danger">
                      {errors2.firstName?.message}
                    </span>
                  }
                </Col>
                <Col lg="6">
                  <label>
                    Last Name<b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register2("lastName", {
                      required: "This field is required",
                    })}
                    className="w-100"
                    placeholder="Enter your last name"
                  />
                  {
                    <span className="text-danger">
                      {errors2.lastName?.message}
                    </span>
                  }
                </Col>
                <Col lg="6">
                  <label>
                    Phone Number<b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register2("phonenumber", {
                      required: "This field is required",
                    })}
                    maxLength={10}
                    className="w-100"
                    placeholder="Enter your phone number"
                  />
                  {
                    <span className="text-danger">
                      {errors2.phonenumber?.message}
                    </span>
                  }
                </Col>
                <Col lg="6">
                  <label>
                    Age<b>*</b>
                  </label>
                  <input
                    type="number"
                    {...register2("age", {
                      required: "This field is required",
                    })}
                    size="4"
                    min="18"
                    max="80"
                    className="w-100"
                    placeholder="Enter your age"
                  />
                  {<span className="text-danger">{errors2.age?.message}</span>}
                </Col>
                <Col lg="12">
                  <label>
                    Email<b>*</b>
                  </label>
                  <input
                    type="email"
                    {...register2("email", {
                      required: "This field is required",
                    })}
                    placeholder="Enter your email address"
                    className="w-100"
                  />
                  {
                    <span className="text-danger">
                      {errors2.email?.message}
                    </span>
                  }
                </Col>
                <Col lg="6">
                  <label>
                    City<b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register2("city", {
                      required: "This field is required",
                    })}
                    placeholder="Enter your city"
                    className="w-100"
                  />
                  {<span className="text-danger">{errors2.city?.message}</span>}
                </Col>
                <Col lg="6">
                  <label>
                    Zip Code<b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register2("zipCode", {
                      required: "This field is required",
                    })}
                    placeholder="Enter your Zip Code"
                    className="w-100"
                  />
                  {
                    <span className="text-danger">
                      {errors2.zipCode?.message}
                    </span>
                  }
                </Col>
                <Col>
                  <span className="d-block">
                    <input
                      type="checkbox"
                      {...register2("checkbox", {
                        required: "This field is required",
                      })}
                    />{" "}
                    Please send me latest news and updated
                  </span>
                  {
                    <span className="text-danger">
                      {errors2.checkbox?.message}
                    </span>
                  }
                </Col>
              </Row>
              <Button type="submit" variant="dark">
                Reserve now
              </Button>
            </form>
          </Container>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
