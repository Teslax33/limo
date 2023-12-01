import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

export default function BookCarModal({ userData }) {

const {register, handleSubmit, formState : {errors}} = useForm();


console.log(errors);
const submit = (data)=>{
    console.log(data);
}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <div className="checkout-personal-info py-5">
          <Container>
            <h5>PERSONAL INFORMATION</h5>
            <form onSubmit={handleSubmit(submit)}>
              <Row>
                <Col lg="6">
                  <label>
                    First Name<b>*</b>
                  </label>
                  <input
                    type="text"
                    className="w-100"
                    {...register("firstName", {required : "This field is required"})}
                    placeholder="Enter your first name"
                  />
                  {<span className="text-danger">{errors.firstName?.message}</span>}
                </Col>
                <Col lg="6">
                  <label>
                    Last Name<b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {required : "This field is required"})}
                    className="w-100"
                    placeholder="Enter your last name"
                  />
                  {<span className="text-danger">{errors.lastName?.message}</span>}
                </Col>
                <Col lg="6">
                  <label>
                    Phone Number<b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register("phonenumber", {required : "This field is required"})}
                    maxLength={10}
                    className="w-100"
                    placeholder="Enter your phone number"
                  />
                  {<span className="text-danger">{errors.phonenumber?.message}</span>}
                </Col>
                <Col lg="6">
                  <label>
                    Age<b>*</b>
                  </label>
                  <input
                    type="number"
                    {...register("age", {required : "This field is required"})}
                    size="4"
                    min="18"
                    max="80"
                    className="w-100"
                    placeholder="Enter your age"
                  />
                  {<span className="text-danger">{errors.age?.message}</span>}
                </Col>
                <Col lg="12">
                  <label>
                    Email<b>*</b>
                  </label>
                  <input
                    type="email"
                    {...register("email", {required : "This field is required"})}
                    placeholder="Enter your email address"
                    className="w-100"
                  />
                  {<span className="text-danger">{errors.email?.message}</span>}
                </Col>
                <Col lg="6">
                  <label>
                    City<b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register("city", {required : "This field is required"})}
                    placeholder="Enter your city"
                    className="w-100"
                  />
                  {<span className="text-danger">{errors.city?.message}</span>}
                </Col>
                <Col lg="6">
                  <label>
                    Zip Code<b>*</b>
                  </label>
                  <input
                    type="text"
                    {...register("zipCode", {required : "This field is required"})}
                    placeholder="Enter your Zip Code"
                    className="w-100"
                  />
                  {<span className="text-danger">{errors.zipCode?.message}</span>}
                </Col>
                <Col>
                  
                  <span className="d-block"><input type="checkbox"
                    {...register("checkbox", {required : "This field is required"})}
                  />{" "}Please send me latest news and updated</span>
                  {<span className="text-danger">{errors.checkbox?.message}</span>}
                </Col>
              </Row>
              <Button type="submit" variant="dark">Reserve now</Button>
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
