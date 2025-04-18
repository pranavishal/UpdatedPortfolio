import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { pfp } from "../../assets/index";
import { navLinksData } from "../../constants";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={pfp} alt="logo" className="h-20 object-cover" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
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

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img src={pfp} alt="logo" className="h-20 object-cover" />
                <p className="text-sm text-gray-400 mt-2">
                  I'm a 4th year Computer Science student at UWaterloo. Through
                  multiple internships in Canada and the US, I've developed
                  interest and experience in: distributed systems, machine
                  learning, full-stack development, and real-time data
                  processing.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksData.map((item) => (
                  <li
                    key={item.id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                  FIND ME ON
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/pranav-vishal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/pranavishal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
