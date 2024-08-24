import { SpinZoom360 } from "spin-zoom-360";
import "./styles.css";

export default function App() {
  const images = [];

  // const baseUrl = "https://fastly-production.24c.in/webin/360/output_1.jpeg"
  //https://p.sirv.com/products/KAS/KAS1094-000003/spinset_364179_r01_c04.jpg?q=60&scale.option=fill&w=800&h=0
  
  const baseUrl = "https://fastly-production.24c.in/webin/360/output_";

  for (let i = 0; i < 75; i++) {
    images.push(`${baseUrl}${i + 1}.jpeg`);
  }

  return (
    <div className="App">
      <SpinZoom360 images={images} />
    </div>
  );
}
