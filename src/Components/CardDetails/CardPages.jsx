
const CardPages = ({ card }) => {
  const { id, name, image, price, cardBgColor, btnTextColor, titleColor, btnBgColor } = card;
  return (
    <div>
      <div className=" bg-base-100 image-full">
        <div className="">
          <figure><img className="w-[1320px] h-[700px] bg-cover " src={image} alt="Shoes" /></figure>
        </div>
        <div className="card-actions  ">
          <button className="border p-3 bg-red-600 text-[#FFF] text-xl font-semibold rounded-md border-none" >Donation ${price}</button>
        </div>
        <div className=" ">
          <h2 className="card-title text-[#0B0B0B] font-bold text-6xl mt-4 mb-4">{name}</h2>
          <p className="font-normal text-[#250B0B] text-justify">There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their childrens education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>
        </div>
      </div>
    </div>
  );
};

export default CardPages;