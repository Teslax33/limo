import Hero from "../components/Hero";
import NavbarNav from "../components/NavbarNav";
import Service from "../components/service/Service";
import PickCar from "../components/carPick/PickCar";
import ChooseUs from "../components/chooseUs/ChooseUs";

export default function Home() {
  return (
    <>
      <NavbarNav />
      <Hero />
      <Service />
      <PickCar />
      <ChooseUs />
    </>
  );
}
