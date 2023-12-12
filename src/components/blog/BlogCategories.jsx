import { Container } from "react-bootstrap";
import "./Blog.css";

export default function BlogCategories({ title, BlogComponent }) {
  return (
    <section className="blog-categories px-2 py-3 mt-4">
      <Container>
        <h5 className="categories-heading fw-bold mb-3">{title}</h5>
        <span className="dash"></span>
        {BlogComponent}
      </Container>
    </section>
  );
}
