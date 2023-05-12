const url = "https://course-api.com/react-tours-project";
import Loading from "./Loading";
import { useEffect } from "react";
import { useState } from "react";
import Tour from "./Tour";
const Tours = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  function removeItem(id) {
    const result = data.filter((item) => item.id !== id);
    setData(result);
  }

  return isLoading ? (
    <Loading />
  ) : data.length ? (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {data.map((item) => {
            return (
              <Tour key={item.id} {...item} removeItem={removeItem}></Tour>
            );
          })}
        </div>
      </div>
    </section>
  ) : (
    <div className="title">
      <h2 style={{ marginBottom: "1rem" }}>no tour left</h2>
      <button className="btn" onClick={fetchTours}>
        Refresh
      </button>
    </div>
  );
};

export default Tours;
