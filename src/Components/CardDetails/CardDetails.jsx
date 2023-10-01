import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardPages from "./CardPages";

 

const CardDetails = () => {
  const [card, setCard]= useState({})
  const {id} = useParams() 
  const data = useLoaderData()
  
  useEffect(()=>{
    const findData = data?.find((datas) =>datas.id == id); 
    setCard(findData); 
  },[id,data])
   
  return (
    <div>
       <CardPages card={card}></CardPages>
    </div>
  );
};

export default CardDetails;