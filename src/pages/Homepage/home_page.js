import React from "react";
import { list, list2 } from "../../assets/cards/cardslist";
import Cards from "../../component/home_cards/cardindex";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
<<<<<<< HEAD
  const [data, setData] = useState([]);
  useEffect(() => {
    gethotel()?.then((res) => {
      console.log(res)
      setData(res);
    });
  }, []);
  return (
    <>
      <Cards list={data} /> 
    </>
  );
}
=======
  return(
  <>
    <Cards list={list} /> : <Cards list={list2} />
  </>
)}
>>>>>>> main

export default Home;
