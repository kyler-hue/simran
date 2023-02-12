import { useEffect, useState } from "react";

import "./Workphotos.scss";
import img1 from "../../public/assets/basic_makeup.jpg" ;
import img2 from "../../public/assets/IMG_8959.JPG" ;
import img3 from "../../public/assets/IMG_8960.JPG" ;
import img4 from "../../public/assets/IMG_8961.JPG" ;
import img5 from "../../public/assets/IMG_8962.JPG" ;
import img6  from "../../public/assets/IMG_8963.JPG" ;
import img7  from "../../public/assets/IMG_8964.JPG" ;
import img8  from "../../public/assets/IMG_9287.JPG" ;
import img9  from "../../public/assets/IMG_9288.JPG" ;
import img10  from "../../public/assets/IMG_9289.JPG" ;
import img11  from "../../public/assets/IMG_9290.JPG" ;
import img12  from "../../public/assets/IMG_9291.JPG" ;
import img13  from "../../public/assets/IMG_9292.JPG" ;
// import img2 from "../../public/assets/IMG_9293.JPG" ;
// import img2 from "../../public/assets/IMG_9294.JPG" ;


import {
  featuredPortfolio,
} from "../../data1";



export default function Workphotos() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Makeup",
    },
    {
      id: "web",
      title: "Hairstyles",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="container" id="work">
      <br />
      <br />
      <div className="Text">
        <h1> My Work Experience </h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="gallery">

          
          <img src={img2} data-lightbox="roadtrip" alt=""/>          
          <img src={img3} data-lightbox="roadtrip" alt=""/>          
          <img src={img4} data-lightbox="roadtrip" alt=""/>          
          <img src={img5} data-lightbox="roadtrip" alt=""/>  
          <img src={img6} data-lightbox="roadtrip" alt=""/>          
          <img src={img7} data-lightbox="roadtrip" alt=""/>          
          <img src={img8} data-lightbox="roadtrip" alt=""/>          
          <img src={img9} data-lightbox="roadtrip" alt=""/>          
          <img src={img10} data-lightbox="roadtrip" alt=""/>          
          <img src={img11} data-lightbox="roadtrip" alt=""/>          
          <img src={img1} data-lightbox="roadtrip" alt=""/>

      </div>
    </div>
  );
}

// {data.map((d) => (
//   <div className="item" >
//     <img
//       src={d.img}
//       alt=""
//     />          
//   </div>
// ))}
