import React from "react";
import Slider from "./Slider/Slider";
import { Box } from "@mui/material";
import Card from "./Common/Card/Card";
import img from "../Images/t_product_540_high.jpg.png";
import img1 from "../Images/t_product_541_high.jpg.png";
import img2 from "../Images/t_product_542_high.jpg.png";
import img3 from "../Images/t_product_543_high.jpg.png";
import img4 from "../Images/t_product_544_high.jpg.png";
var data = [
  {
    id: 1,
    img: img,
    kredit: "1 820 сум/мес",
    skidka: "19 000 сум",
    price: "14 000 сум",
    ocenka: "13",
    star: "5.0",
    activeIcon: false,
    descript: "Подсолнечное масло Sofia, рафинированное и",
    prodovec: "Sofa oil",
  },
  {
    id: 2,
    img: img1,
    kredit: "600 сум/мес",
    skidka: "10 000 сум",
    price: "5 000 сум",
    ocenka: "5",
    star: "5.0",
    activeIcon: false,
    descript: "Cтиральный порошок Tide Color, Lenor Touch,...",
    prodovec: "Sofa oil",
  },
  {
    id: 3,
    img: img2,
    kredit: "2 640 сум/мес",
    skidka: "26 000 сум",
    price: "22 000 сум",
    ocenka: "34",
    star: "4.7",
    activeIcon: false,
    descript: "Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл",
    prodovec: "Sofa oil",
  },
  {
    id: 4,
    img: img3,
    kredit: "6 840 сум/мес",
    skidka: "70 000 сум",
    price: "57 000  сум",
    ocenka: "2",
    star: "5.0",
    activeIcon: false,
    descript: "Рис Лазер Хорезм Chempion высший сорт, 900 г",
    prodovec: "Sofa oil",
  },
  {
    id: 5,
    img: img4,
    kredit: "960 сум/мес",
    skidka: "10 000",
    price: "8 000",
    ocenka: "1",
    star: "5.0",
    activeIcon: false,
    descript: "Подгузники Perla Twin, 42 шт + Влажные салфетки Perla Kids...",
    prodovec: "Sofa oil",
  },
];

export default function Home() {


  const buyBtn = (index) => {
    // let obj = data[index];
    // newData.push(obj);
    // localStorage.setItem("karzina", JSON.stringify(newData));
    // setBadgeval(JSON.parse(localStorage.getItem("karzina")).length);
    // data[index].activeIcon = !data[index].activeIcon;
  };



  return (
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Slider />

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap:'wrap',
          // gap:'30px'
        }}
      >
        {data.length !== 0
          ? data.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                kredit={item.kredit}
                skidka={item.skidka}
                price={item.price}
                ocenka={item.ocenka}
                star={item.star}
                icon={item.activeIcon}
                descript={item.descript}
                buyBtn={() => buyBtn(index)}
              />
            ))
          : ""}
      </Box>
          <Box sx={{width:'100%',height:"1000px"}}>

          </Box>
    </Box>
  );
}
