import { FormEvent, useState } from "react";

const UserInfo = () => {
  //   const [name, setName] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [phone, setPhone] = useState("");

  const [UserInfo, setUserInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [submittedUserInfo, setSubmittedUserInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents the page from refreshing on form submission
    console.log(e);
    setSubmittedUserInfo(UserInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="shadow-xl text-left p-4  w-[300px]">
        <h1 className="text-lg font-bold">Name: {submittedUserInfo.name}</h1>
        <p>Address: {submittedUserInfo.address}</p>
        <p>Phone: {submittedUserInfo.phone}</p>
      </div>
      <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          onChange={(e) =>
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              name: e.target.value,
            }))
          }
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          onChange={(e) =>
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              address: e.target.value,
            }))
          }
        />
        <label htmlFor="phone">Phone:</label>
        <input
          //validate phone number format
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
          type="text"
          id="phone"
          className="border border-gray-300 rounded-md p-2 mb-2 w-full"
          onChange={(e) =>
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              phone: e.target.value,
            }))
          }
        />
        <input
          type="Submit"
          value={"Submit"}
          className="bg-blue-500 text-white rounded-md p-2 mb-2 w-full cursor-pointer"
        />
      </form>
    </div>
  );
};

export default UserInfo;