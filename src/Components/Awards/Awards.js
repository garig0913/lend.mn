import Titles from "../Titles/Titles";
import AwardsImg from "./AwardsImg";
import crown from "../../static/images/crown.png";
import ard from "../../static/images/ard.png";
import blackbox from "../../static/images/blackbox.png";
import mmci from "../../static/images/mmci.png";
import od from "../../static/images/od.png";
import unplug from "../../static/images/unplug.png";

const Header = () => {
   return (
      <div className="w-screen flex flex-col justify-center items-center award text-white">
         <Titles title="Шагналууд" />
         <h1>2016 - 2017</h1>
         <AwardsImg
            img1={crown}
            img2={ard}
            img3={blackbox}
            img4={mmci}
            img5={od}
            img6={unplug}
            AwardsImg={"awardImg"}
         />
      </div>
   );
};

export default Header;
