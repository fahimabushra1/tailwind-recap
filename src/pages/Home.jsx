import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Accordian from "../components/home/Accordian";


const home = () => {
    return (
      <>
      <Banner></Banner>
        <div>
          <Products></Products>
          <Accordian></Accordian>
        </div>
      </>
    );
};

export default home;