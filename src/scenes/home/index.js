import React, { useEffect, useState } from "react";
// import api from "../../services/api";

const Home = () => {
  const [availableUsers, setAvailableUsers] = useState();
  const data = [
    {
      avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      banner: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      costPerDay: 100,
      sellPerDay: 200,
      days_worked: 23,
      status: "active",
      availability: "available",
      _id: "641309a0ddfcbdceedbb3b42",
      name: "Jojo",
      organisation: "Lapin",
      password: "$2a$10$UkJoe63HdBtnSiZth5XgNe/IKtry3.d24XyV67lmSugv9VKj3pyV.",
      __v: 0,
      last_login_at: "2023-03-21T09:37:02.116Z",
    },
    {
      avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      banner: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      costPerDay: 80,
      sellPerDay: 8,
      days_worked: 18,
      status: "active",
      availability: "available",
      _id: "641309a0ddfcbdceedbb3b42",
      name: "Juju",
      organisation: "2carotte",
      password: "$2a$10$UkJoe63HdBtnSiZth5XgNe/IKtry3.d24XyV67lmSugv9VKj3pyV.",
      __v: 0,
      last_login_at: "2023-03-21T09:37:02.116Z",
    },
  ];

  async function getUser() {
    setAvailableUsers(data);
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="px-2 md:!px-8 flex flex-col md:flex-row gap-5 mt-5">
      <div className="flex-1 mb-[10px]">
        <h2 className="text-[22px] font-semibold mb-4">Available</h2>
        {availableUsers?.map((user) => (
          <div key={user._id} className="bg-white mb-[10px] rounded-lg shadow-sm flex justify-between items-center">
            <div id="user" className="flex gap-4 p-3 w-[15vw]">
              <img src={user.avatar} alt="userlogo" className="rounded-full w-14 h-14" />
              <div>
                <div className="flex justify-center items-end">
                  <h3 className="font-semibold text-lg mb-[3px]">{user.name}</h3>
                  <h3 className="text-lg mb-[3px] ml-1 italic">{user.organisation}</h3>
                </div>
                <p className="text-[#676D7C] text-sm capitalize">{user.availability}</p>
              </div>
            </div>
            <div id="stats" className="flex justify-between items-center p-3 w-[65vw]">
              <div id="pres" className="w-[25vw]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg mb-[3px]">Présence</h3>
                  <p className="text-[#676D7C] text-xs capitalize ml-1">({user.days_worked}/23)</p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-[#676D7C] text-sm capitalize mr-1">{user.days_worked === 23 ? "100" : ((user.days_worked * 100) / 23).toFixed(0).toString()}</p>
                  <p className="text-[#676D7C] text-sm capitalize mr-1">%</p>
                </div>
              </div>
              <div id="prof" className=" w-[15vw]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg mb-[3px] flex-2">Rentabilité</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[#676D7C] text-xs capitalize ml-1">({user.costPerDay}</p>
                    <p className="text-[#676D7C] text-xs capitalize">/</p>
                    <p className="text-[#676D7C] text-xs capitalize">{user.sellPerDay})</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-[#676D7C] text-sm capitalize">{((user.sellPerDay - user.costPerDay) * 100) / user.costPerDay > 0 ? "+" : null}</p>
                  <p className="text-[#676D7C] text-sm capitalize mr-1">{((user.sellPerDay - user.costPerDay) * 100) / user.costPerDay} %</p>
                </div>
              </div>
              <div id="prof" className=" w-[20vw]">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg mb-[3px]">
                    {(user.sellPerDay - user.costPerDay) * user.days_worked > 0 ? "Bénéfices mensuels  réalisés" : "Pertes mensuelles réalisées"}
                  </h3>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-[#676D7C] text-sm capitalize mr-1">{(user.sellPerDay - user.costPerDay) * user.days_worked}</p>
                  <p className="text-[#676D7C] text-sm capitalize mr-1">€</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {availableUsers?.length === 0 ? <span className="italic text-gray-600">No available users.</span> : null}
      </div>
    </div>
  );
};
export default Home;
