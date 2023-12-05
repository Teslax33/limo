import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { CarContext } from "../../App";
import images from "../image";
import "./BookCarModal.css";

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
          <Modal.Title className="text-uppercase fw-bold">
            Complete Reservation
          </Modal.Title>
        </Modal.Header>
        <div className="checkout-info-box px-4 py-2">
          <h5 className="checkout-info-title fw-bold primary-color">
            {" "}
            Upon completing this reservation enquiry, you will receive:
          </h5>
          <p className="checkout-info-desc">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <Modal.Body>
          <div className="modal-body-inner">
            <Row gx="3">
              <Col lg={6}>
                <div className="location-date-info">
                  <h5 className="fw-bold primary-color">Location & Date</h5>
                  <div className="info-box">
                    <div className="media-box">
                      <h6 className="fw-bold">Pick-Up Time</h6>
                      <span>{userData.pickTime}</span>
                    </div>
                    <div className="media-box">
                      <h6 className="fw-bold">Drop-Off Time</h6>
                      <span>{userData.dropTime}</span>
                    </div>
                    <div className="media-box">
                      <h6 className="fw-bold">Pick-up Location</h6>
                      <span>{userData.pickUp}</span>
                    </div>
                    <div className="media-box">
                      <h6 className="fw-bold">Drop-up Location</h6>
                      <span>{userData.dropOff}</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="car-info">
                  <h5 className="fw-bold">
                    <span className="primary-color">Car-</span>{" "}
                    {userData.carType}
                  </h5>
                  <img src={imgUrl} alt="car image" className="w-100" />
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <div className="checkout-personal-info py-5">
          <Container>
            <h5 className="fw-bold primary-color">PERSONAL INFORMATION</h5>
            {/* form personal information */}
            <form key={2} onSubmit={handleSubmit2(onSubmitInfo)}>
              <Row className="gy-3">
                <Col lg={6}>
                  <label>
                    First Name <b>*</b>
                  </label>
                  <input
                    type="text"
                    className="w-100 px-2 py-2 bookcar-inputField border-0"
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
                <Col lg={6}>
                  <label>
                    Last Name <b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register2("lastName", {
                      required: "This field is required",
                    })}
                    className="w-100 px-2 py-2 bookcar-inputField border-0"
                    placeholder="Enter your last name"
                  />
                  {
                    <span className="text-danger">
                      {errors2.lastName?.message}
                    </span>
                  }
                </Col>
                <Col lg={6}>
                  <label>
                    Phone Number <b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register2("phonenumber", {
                      required: "This field is required",
                    })}
                    maxLength={10}
                    className="w-100 px-2 py-2 bookcar-inputField border-0"
                    placeholder="Enter your phone number"
                  />
                  {
                    <span className="text-danger">
                      {errors2.phonenumber?.message}
                    </span>
                  }
                </Col>
                <Col lg={6}>
                  <label>
                    Age <b>*</b>
                  </label>
                  <input
                    type="number"
                    {...register2("age", {
                      required: "This field is required",
                    })}
                    size="4"
                    min="18"
                    max="80"
                    className="w-100 px-2 py-2 bookcar-inputField border-0"
                    placeholder="Enter your age"
                  />
                  {<span className="text-danger">{errors2.age?.message}</span>}
                </Col>
                <Col lg={12}>
                  <label>
                    Email <b>*</b>
                  </label>
                  <input
                    type="email"
                    {...register2("email", {
                      required: "This field is required",
                    })}
                    placeholder="Enter your email address"
                    className="w-100 px-2 py-2 bookcar-inputField border-0"
                  />
                  {
                    <span className="text-danger">
                      {errors2.email?.message}
                    </span>
                  }
                </Col>
                <Col lg={6}>
                  <label>
                    City <b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register2("city", {
                      required: "This field is required",
                    })}
                    placeholder="Enter your city"
                    className="w-100 px-2 py-2 bookcar-inputField border-0"
                  />
                  {<span className="text-danger">{errors2.city?.message}</span>}
                </Col>
                <Col lg={6}>
                  <label>
                    Zip Code <b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register2("zipCode", {
                      required: "This field is required",
                    })}
                    placeholder="Enter your Zip Code"
                    className="w-100 px-2 py-2 bookcar-inputField border-0"
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
              <Button type="submit" variant="dark" className="mt-3">
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
