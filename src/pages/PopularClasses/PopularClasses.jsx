import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/classes")
      .then((res) => {
        setClasses(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(classes);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <div className="md:w-[80%] mx-auto ">
        <h2 className="text-center text-3xl font-bold text-black dark:text-white mt-10">
          Our Popular Classes
        </h2>
        <p className="text-center text-lg text-gray-500  dark:text-white  mt-2">
          Explore our Popular Classes.Here is some popular <br />
          classes based on How many student enrolled
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {classes?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
