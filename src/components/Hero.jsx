import "./Hero.css"
import backgroundImg from "../assets/Images/hero.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="background position-relative px-5  ">
      <img src={backgroundImg} alt="hero image" className="background-img position-absolute" />
      <div className="content d-flex flex-column w-100 align-items-center">
        <h1>Luxury Limo Hire</h1>
        <p>We offer professional car rental and limousine services in our range of high-end services</p>
        <button>Open Fleet</button>
      </div>
      
      </div>

    </div>
  )
}

export default Hero