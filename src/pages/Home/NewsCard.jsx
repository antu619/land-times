import { Link } from "react-router-dom";
import saveIcon from "../../assets/save-icon.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";

const NewsCard = ({ singleNews }) => {
  const { title, image_url, details, _id, author, rating, total_view } =
    singleNews;
  return (
    <div className="border-2 rounded">
      <div className="flex justify-between items-center px-5 py-3 bg-base-300">
        <div className="flex gap-3">
          <img className="w-12 rounded-full" src={author.img} />
          <div className="font-poppins">
            <p className="font-bold">{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link>
            <img className="w-5" src={saveIcon} alt="" />
          </Link>
          <Link>
            <IoShareSocialOutline className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-poppins text-xl font-semibold mb-5">{title}</h4>
        <img className="w-full" src={image_url} alt="" />
        <div className="mt-5 font-poppins">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}...{" "}
              <Link
                to={`/news/${_id}`}
                className="btn-link text-cyan-600 font-semibold"
              >
                Read More
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
        <div className="divider"></div>
        <div className="flex justify-between">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-cyan-600"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-cyan-600"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-cyan-600"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-cyan-600"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-cyan-600"
            />
            <p className="ml-3 font-semibold font-poppins">{rating.number}</p>
          </div>
          <div className="flex gap-2 font-poppins text-gray-500">
            <MdRemoveRedEye className="text-2xl" />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
