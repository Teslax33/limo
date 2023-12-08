import { Container } from "react-bootstrap"
import "./Vehicle.css"
import { FaPhoneAlt } from "react-icons/fa";

export default function VehicleBanner(){
    return(
        <section className="vehicle-banner d-flex w-100 position-relative mt-5 py-5">
            <div className="banner-overlay position-absolute w-100 h-100 right-0 top-0"></div>
            <Container>
            <div className="banner-content position-relative z-3 d-flex gap-5 w-100 flex-wrap justify-content-center align-items-center fw-bold mx-auto">
                <h3 className="banner-heading mb-0"> Book a car by getting in touch with us</h3>
                <span className="banner-phoneNumber fs-3 primary-color"> <FaPhoneAlt />  (123) 456-789</span>
            </div>
            </Container>
        </section>
    )
}