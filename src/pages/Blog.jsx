import { Button, Col, Container, Row } from "react-bootstrap";
import HeroBreadcrumb from "../components/HeroBreadcrumb";
import BlogPost from "../components/blog/BlogPost";
import { services } from "../components/service/services";
import BlogCategories from "../components/blog/BlogCategories";
import { IoSearch } from "react-icons/io5";
import BlogRecentPost from "../components/blog/BlogRecentPost";
import CategoriesList from "../components/blog/CategoriesList";
import BannerImg from "../assets/Images/banner-sales.webp";

export default function Blog() {
  return (
    <section className="blog mt-5">
      <HeroBreadcrumb currentPage={"Blog"} />
      <Container>
        <Row className="py-5">
          <Col md={8}>
            {services.map((service) => {
              return (
                <BlogPost
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.img}
                />
              );
            })}
          </Col>
          <Col className="px-5">
            <div className="search-field position-relative">
              <input
                type="text"
                name="search"
                id="search"
                className="w-100 py-2 bookcar-inputFIeld "
              />
              <Button
                variant="dark"
                className="position-absolute top-0 end-0 px-3 py-2 h-100"
              >
                {" "}
                <IoSearch size={24} />
              </Button>
            </div>
            <BlogCategories
              BlogComponent={<CategoriesList />}
              title={"Categories"}
            />
            <BlogCategories
              BlogComponent={<BlogRecentPost />}
              title={"Recent Post"}
            />
            <img
              src={BannerImg}
              alt="banner discount image"
              className="img-fluid mt-5"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
