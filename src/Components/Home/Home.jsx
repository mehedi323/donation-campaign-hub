import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeCard from "../HomeCard/HomeCard";

 
const Home = () => {

  const datas = useLoaderData() 

  return (
    <div>
       <Banner ></Banner>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  mt-6">
        {
          datas.map(data=> <HomeCard key={data.id} data={data}></HomeCard>)
        }
       </div>
    </div>
  );
};

export default Home;