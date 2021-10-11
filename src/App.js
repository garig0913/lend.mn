import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Card from "./Card";
import Button from "./Components/Button/Button1";
import Button2 from "./Components/Button/Button2";
import Titles from "./Components/Titles/Titles";
import Awards from "./Components/Awards/Awards";
// images
import hun from "./static/images/hun.svg";
import horongo from "./static/images/wealth.svg";
import tsag from "./static/images/time.svg";
import assets from "./static/images/assets.svg";
import forbes from "./static/images/forbes.png";
import techniasia from "./static/images/techinasia.png";
import welle from "./static/images/welle.png";
import bloomberg from "./static/images/bloomberg.png";
import blackbox2 from "./static/images/blackbox2.png";
// images

import { RiGooglePlayFill } from "react-icons/ri";
import { BsApple } from "react-icons/bs";
import AwardsImg2 from "./Components/Awards/AwardsImg2";

const data = [
   {
      image: tsag,
      children: "217470",
      title: "Hours",
      text: "A total of 93,081 customers saved 279,000 hours or 31.8 years to get a loan",
   },
   {
      image: horongo,
      children: "1.2",
      title: "Billion MNT",
      text: "A total of 93,081 customers saved 1.5 billion MNT in indirect borrowing costs",
   },
   {
      image: hun,
      children: "1768584",
      title: "Million people",
      text: "835,110 Collateral for a single loan agreement between 2.5 million people",
   },
   {
      image: assets,
      children: "64000",
      title: "Collateral",
      text: "93, 081 customers borrowed more than 835 thousand times and managed to solve the problem of pledging the same amount of assets",
   },
];

const App = () => {
   return (
      <>
         <Header />
         <Hero />
         <div className="flex justify-center border-b border-gray-300">
            <Button
               children={<RiGooglePlayFill />}
               text={"Available on the Appstore"}
               link={"https://www.apple.com/"}
            />
            <Button
               children={<BsApple />}
               text={"Get it on Google Play"}
               link={"https://play.google.com/store/apps"}
            />
         </div>
         <Titles title={"ЛэндМН нийгэмд өгч буй ашиг тус"} />
         <div className="container my-6 mx-auto flex justify-between">
            {data.map((item, index) => (
               <Card
                  key={`card-${index}`}
                  icon={item.image}
                  children={
                     <h1 className="text-5xl font-medium text-gray-700 mt-5">
                        {item.children}
                     </h1>
                  }
                  title={item.title}
                  text={item.text}
               ></Card>
            ))}
         </div>
         <div className="flex justify-center items-center">
            <Button2 text={"More"} />
         </div>
         <div className="bg-gray-100">
            <AwardsImg2
               img1={blackbox2}
               img2={forbes}
               img3={welle}
               img4={techniasia}
               img5={bloomberg}
               AwardsImg={"awardsImg2"}
            />
         </div>
         <Titles
            title={"Хэвлэлийн мэдээ"}
            children={
               <p className="text-gray-600">
                  Лэндмн-ийн сүүлийн үеийн мэдээллүүд
               </p>
            }
         />
         <Awards />
      </>
   );
};

export default App;
