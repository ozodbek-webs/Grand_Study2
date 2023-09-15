import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product";
import { productData, responsive } from "./data";

export default function Korusel() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
    />
  ));

  return (
    <div className="App">
      <h1>Courses</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
