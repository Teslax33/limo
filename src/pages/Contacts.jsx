import HeroBreadcrumb from "../components/HeroBreadcrumb"
import ContactUs from "../components/contact/ContactUs"
import VehicleBanner from "../components/vehicle/VehicleBanner"

export default function Contacts(){
    return(
        <section className="contacts py-5">
        <HeroBreadcrumb currentPage={"Contacts"}/>
        <ContactUs />
        <VehicleBanner />
        </section>
    )
}