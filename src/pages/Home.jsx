import Hero from "../components/Hero";
import NavbarNav from "../components/NavbarNav";
import Service from "../components/service/Service";
import PickCar from "../components/carPick/PickCar";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Pricing from "../components/pricing/Pricing";

export default function Home() {
  return (
    <>
      <NavbarNav />
      <Hero />
      <Service />
      <PickCar />
      <ChooseUs />
      <Pricing />
    </>
  );
}
