
import { makeStyles } from "@mui/styles";
import React from "react";
import Asset from "../Asset/Asset-1.png"
import '../CSS/Home.css';



const useStyle = makeStyles(() => ({}));
function HomePage() {
  const classes = useStyle();
  return (
    <div>
      <div className="HeroSection">
        <div className="HeroSectionText">
          <h1 className="MainText">Build Landing <br/>Pages Start with US</h1>
          <p className="HeroPara" >Clarity gives you the blocks & components you need<br/> to create a truly professional website, landing page<br/> or admin panel for your SaaS.</p>
          {/* <Button variant="outlined" ClassName="ContactBtn">Contact Us</Button> */}
          {/* <Button type="button" class="btn">Primary</Button> */}
          <button type="button" class="btn btn-primary Contactbtn">Contact Us</button>

         </div>
        <img src={Asset} className="floating"/>
      </div>
    </div>
  );
}

export default HomePage;
