import Marquee from "react-fast-marquee";

const Highlights = () => {
  return (
    <div className="flex bg-base-200 mt-7">
      <button className="px-5 py-3 bg-cyan-600 text-white">Highlights</button>
      <Marquee pauseOnHover className="font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        commodi voluptates, fugit omnis debitis deleniti, id consequuntur
        impedit culpa reiciendis modi quidem esse, voluptate similique labore.
        Mollitia aspernatur architecto unde?
      </Marquee>
    </div>
  );
};

export default Highlights;
