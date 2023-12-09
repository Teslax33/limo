import Hero from "../components/Hero";
import Service from "../components/service/Service";
import PickCar from "../components/carPick/PickCar";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Pricing from "../components/pricing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <PickCar />
      <ChooseUs />
      <Pricing />
    </>
  );
}
