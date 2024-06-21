import { useContext, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
// import { AuthContext } from "../../Config/ultilities/provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosFetch from "../../hooks/useAxiosFetch";
// import { AuthContext } from "../../Config/ultilities/provider/AuthProvider";
import useUser from "../../hooks/useUser";
// import toast from "react-hot-toast";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoverCard, setHoverCard] = useState(null);
  const { currentUser } = useUser();
  const role = currentUser?.role;
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const AxiosFetch = useAxiosFetch();
  const axiosSecure = useAxiosSecure();
  // const [isShowing, setIsShowing] = useState(false);

  console.log(currentUser);
  const handleHover = (index) => {
    setHoverCard(index);
  };

  const handleSelect = (id) => {
    console.log(id);
    axiosSecure
      .get(`/enrolled-classes/${currentUser?.email}`)
      .then((res) => {
        setEnrolledClasses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(enrolledClasses);
  // if(!currentUser){
  //  return toast.success('Successfully toasted!')
  // }
  useEffect(() => {
    fetch("http://localhost:3001/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(classes);
  if (!loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="">
      <div className="mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center text-primary">Classes</h1>
      </div>
      <div className="W-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {classes?.map((classItem, index) => (
          <div
            onMouseLeave={() => handleHover(null)}
            className={`relative hover:-translate-y-4  duration-150 hover:ring-[2px] hover:ring-secondary w-64
            h-[350px] mx-auto ${
              classItem.availableSeats < 1 ? " bg-red-400" : "bg-gray-300"
            } dark:bg-slate-600
             cursor-pointer rounded-lg shadow-lg overflow-hidden`}
            key={index}
            onMouseEnter={() => handleHover(index)}
          >
            <div className="relative h-48">
              <div
                className={`absolute inset-0  transition-opacity duration-300
               ${hoverCard === index ? "opacity-90" : ""}
             `}
              >
                <img
                  src={classItem.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <Transition
                show={hoverCard === index}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                  <button
                    onClick={() => handleSelect(classItem._id)}
                    title={
                      role == "admin" || role === "instructor"
                        ? "Instructor/Admin can not be able to select"
                          ? classItem.availableSeats < 1
                          : "No Select"
                        : "Select"
                    }
                    disabled={
                      role == "admin" || role === "instructor" || classItem.availableSeats < 1
                    }
                    className="px-4 py-2 text-white disabled:bg-gray-300 bg-secondary duration-300 rounded hover:bg-red-700"
                  >
                    Add to card
                  </button>
                </div>
              </Transition>
            </div>
            <div className="p-4 dark:text-white">
              <h1 className="text-sm font-bold">{classItem.name}</h1>
              <h1 className=" font-semibold">
                Instructor:{classItem.instructorName}
              </h1>
              <div className="flex justify-between mt-4 ">
                <p className=" text-black dark:text-white">
                  availableSeats:{classItem.availableSeats}
                </p>
                <p className=" text-green-500 dark:text-white">
                  {classItem.price}TK
                </p>
              </div>
              <div className="">
                <button className="btn btn-primary mt-4 justify-center items-center py-1 rounded-lg bg-secondary w-full ">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
