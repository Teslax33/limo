import { Button } from "react-bootstrap";
import { IoLayers } from "react-icons/io5";
import {Link} from "react-router-dom"

export default function BlogPost({ image, title, description }) {
  return (
    <div className="blog-post mb-4 px-5 ">
      <img src={image} alt="" className="img-fluid mb-3 " />
      <p>
        <IoLayers style={{marginRight: "5px"}} />
        By Admin | March 11, 2022 | {title}
      </p>
      <h2 className="fw-bold mb-3">{title}</h2>
      <p className="post-description mb-3">
        {description}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        officiis dolorum incidunt aperiam architecto aliquam? Omnis ad debitis
        obcaecati, vel quidem quia. Corporis?
      </p>
      <Button variant="dark" size="lg" as={Link} to="/" onClick={()=>{window.screenTop(0,0)}}>
        Reserve Me
      </Button>
    </div>
  );
}
