import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardPages from "./CardPages";

 

const CardDetails = () => {
  const [card, setCard]= useState({})
  const {id} = useParams() 
  const datas = useLoaderData()
  
  useEffect(()=>{
    const findData = datas?.find((data) =>data.id == id); 
    setCard(findData); 
  },[id,datas])
  
  console.log(card);
  return (
    <div>
       <CardPages card={card}></CardPages>
    </div>
  );
};

export default CardDetails;