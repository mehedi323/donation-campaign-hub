import { useEffect, useState } from "react"; 
import CardPages from "../CardDetails/CardPages";




const Donation = () => {

  const [donations, setDonations] = useState([])

  const [noFound, setNOFound] = useState('');
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (donationItems) {
      setDonations(donationItems);
    } else {
      setNOFound("NO Data Found");
    }


  }, []);
  console.log(donations);

  return <div>{noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
   : 
  <div>

    <div className=" ">
       {
        donations.map(card => <CardPages key={card.id} card={card}></CardPages>)
       }
    </div>

    </div>}</div>;
};

export default Donation;