import React from "react";
import { Link } from "react-scroll";
import { pfp } from "../../assets/index";
import { navLinksData } from "../../constants";
const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={pfp} alt="logo" className="h-20 object-cover" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksData.map(({ id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
