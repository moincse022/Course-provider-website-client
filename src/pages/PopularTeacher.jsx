import { useEffect, useState } from "react";

import img from "../assets/home/girl.jpg";
const PopularTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/popular-instructors")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  console.log(teachers);
  return (
    <div>
      <div className="md:w-[80%] mx-auto ">
        <h2 className="text-center text-3xl font-bold text-black dark:text-white mt-10">
          {" "}
          <span className="text-secondary">Our</span> Amazing{" "}
          <span className="text-secondary">Teacher</span>
        </h2>
        <p className="text-center text-lg text-gray-500  dark:text-white  mt-2">
          Explore our Popular Classes.Here is some popular <br />
          classes based on How many student enrolled
        </p>
      </div>
      {teachers ? (
        <>
          <div className="grid mb-28 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto mt-4 ">
            {teachers?.slice(0, 4).map((instructor) => (
              <div
                className="flex dark:text-white hover:translate-y-2 duration-100 cursor-pointer flex-col
                        shadow-md rounded-lg py-10 px-8 m-2"
              >
                <img
                  src={instructor?.instructor?.photoUrl || `${img}`}
                  alt=""
                  className=" rounded-full w-24 h-24 border-4 border-gray-400 mx-auto "
                />
                <div className="py-4 flex flex-col text-center">
                  <p>{instructor?.instructor?.name}</p>
                  <p className="">Instructor:</p>
                  <p className="">Total Student:{instructor?.totalEnrolled}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PopularTeacher;
