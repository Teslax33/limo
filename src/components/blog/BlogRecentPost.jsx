import { services } from "../service/services";

export default function BlogRecentPost() {
  return (
    <div className="blog-recent-post">
      {services.map((service) => {
        return (
          <div key={service.id} className="post d-flex gap-3 mb-4">
            <div className="post-image w-50">
              <img src={service.img} alt="" className="img-fluid" />
            </div>
            <div className="post-description d-flex flex-column justify-content-center">
              <p className="mb-0">March 22, 2022</p>
              <h6>{service.title}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
