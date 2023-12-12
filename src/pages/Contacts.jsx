import HeroBreadcrumb from "../components/HeroBreadcrumb";
import ContactUs from "../components/contact/ContactUs";
import VehicleBanner from "../components/vehicle/VehicleBanner";

export default function Contacts() {
  return (
    <section className="contacts pt-5">
      <HeroBreadcrumb currentPage={"Contacts"} />
      <ContactUs />
      <VehicleBanner />
      {/* map */}
      <iframe
        className="mt-5"
        width="100%"
        height="510"
        allowFullScreen=""
        loading="lazy"
        id="gmap_canvas"
        samesite="Strict"
        src="https://maps.google.com/maps?q=kathmandu&t=&z=10&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
      ></iframe>
    </section>
  );
}
