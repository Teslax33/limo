import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";

export default function HeroBreadcrumb({ currentPage }) {
  return (
    <section className="hero-breadcrumb">
      <div className="breadcrumb-overlay"></div>
      <Container className="py-5 position-relative z-3">
      <h3 >{currentPage}</h3>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{currentPage}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </section>
  );
}
