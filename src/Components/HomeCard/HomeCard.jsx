import { Link } from "react-router-dom";


const HomeCard = ({ data }) => {
  const { id, name, image, title, cardBgColor, btnTextColor, titleColor, btnBgColor } = data;
  return (
    <div>
      <div className='mr-3'>
        <div style={{ backgroundColor: cardBgColor }} className="card rounded-md mx-auto shadow-xl mb-12">
          <figure><img className="w-full" src={image} alt="" /></figure>
          <div className="mt-3 mb-3 ml-3">
            <Link to={`/homecard/${id}`}>
              <button className="rounded-lg p-2 font-medium text-xl mb-2 "
                style={{ color: btnTextColor, backgroundColor: btnBgColor }} >
                {name}
              </button>
            </Link>
            <h2 className="text-2xl font-semibold" style={{ color: titleColor }}> {title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;