import Button from 'react-bootstrap/esm/Button'
import "./Service.css";

const ServiceCard = () => {
  return (
    <div className='service-card d-flex gap-4 w-100 rounded px-5 py-2'>
        <div className="service-img">
            <img src='' alt='service card images'/>
        </div>
        <div className="service-content">
            <h2 className='sub-heading'>Airport transfers</h2>
            <p>With addtional wait time and fight tracking in case of delays, our service is optimized to make every airport transfer a breeze.</p>
            <Button variant='dark'>Read More</Button>
        </div>
    </div>
  )
}

export default ServiceCard