import "./Hero.css"
import backgroundImg from "../assets/Images/hero-img.jpg"
import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/Button"
const Hero = () => {
  return (
    <div className='hero py-5'>
    <Container>
      <div className="background position-relative px-5 mt-2">
      <img src={backgroundImg} alt="hero image" className="background-img position-absolute" />
      </div>
      <div className="content d-flex flex-column w-100 align-items-center p-3">
        <h1 className="fw-bold">Luxury Limo Hire</h1>
        <p className="text-center">We offer professional car rental and limousine services in <br />our range of high-end services</p>
        <Button variant="dark"> Open Fleet </Button>
        </div>

    </Container>

    </div>
  )
}

export default Hero