

const Banner = () => {
  return (
    <div className="h-[50vh] bg-slate-50">
      <div className="flex justify-center items-center h-[50vh]">
        <form className="text-center">
          <h1 className="text-[#0B0B0B] text-6xl font-bold  ">I Grow By Helping People In Need</h1>
          <input className="border-2 border-none rounded-lg bg-gray-600 p-2 w-1/2 "
            type="text"
            placeholder="Search..."
          />
          <button className="border ml-2 bg-blue-800 p-3 mt-6 rounded-2xl text-white border-none" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;