import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firstImg from "../../../assets/1.png";
import secondImg from "../../../assets/2.png";
import thirdImg from "../../../assets/3.png";
import { CiCalendar } from "react-icons/ci";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      {/* All Categories */}
      <div className="mt-5">
        <h3 className="text-xl font-poppins font-bold">All Categories</h3>
        <div className="grid gap-2 mt-5">
          {categories.map((category) => (
            <Link className="btn btn-outline" key={category.id}>
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Left Nav News */}
      <div className="mt-10">
        <div>
          <img src={firstImg} alt="" />
          <h3 className="font-poppins font-semibold mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, est!
          </h3>
          <div className="flex items-center font-poppins my-3">
            <p className="font-bold mr-5">Social</p>
            <CiCalendar className="text-xl text-gray-400 mr-1" />
            <p className="text-gray-400">Jan 7, 2024</p>
          </div>
        </div>
        <div>
          <img src={secondImg} alt="" />
          <h3 className="font-poppins font-semibold mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, est!
          </h3>
          <div className="flex items-center font-poppins my-3">
            <p className="font-bold mr-5">Social</p>
            <CiCalendar className="text-xl text-gray-400 mr-1" />
            <p className="text-gray-400">Jan 7, 2024</p>
          </div>
        </div>
        <div>
          <img src={thirdImg} alt="" />
          <h3 className="font-poppins font-semibold mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, est!
          </h3>
          <div className="flex items-center font-poppins my-3">
            <p className="font-bold mr-5">Sports</p>
            <CiCalendar className="text-xl text-gray-400 mr-1" />
            <p className="text-gray-400">Jan 7, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
