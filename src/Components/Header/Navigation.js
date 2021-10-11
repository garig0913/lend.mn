import NavItem from "./NavItem";
import { FaBars } from "react-icons/fa";
const options = [
   "ЛЭНДМН ХЭТЭВЧ",
   "ЛЭНДМН ХУВЬЦАА",
   "БИДНИЙ ТУХАЙ",
   "МЭДЭЭ",
   "АЖЛЫН БАЙР",
   "ТУСЛАМЖ",
];

const Navigation = () => {
   return (
      <>
         <div className="nav hidden md:flex font-bold text-sm">
            {options.map((item, index) => {
               return <NavItem key={`list-${index}`} item={item} />;
            })}
         </div>
         <div className="md:hidden text-black p-4 text-xl">
            <FaBars />
         </div>
      </>
   );
};

export default Navigation;
