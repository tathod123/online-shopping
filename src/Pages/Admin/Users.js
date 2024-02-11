import React, { useEffect, useState } from "react";

function Users() {
  const [usersData, setUsers] = useState([]);
  const api = "https://fakestoreapi.com/users";

  const fetchUsers = async () => {
    const resp = await fetch(api);
    const data = await resp.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col p-3 gap-6">
      <div className="flex justify-between px-5 bg-gray-900 rounded-lg py-6 ">
        <div className="text-3xl font-bold text-white">All Users</div>
        <div className="text-3xl font-semibold text-white">
          Total Users-{usersData.length}
        </div>
      </div>
      <div className=" bg-gray-900 shadow-lg rounded-lg p-3">
        <table className="w-full table-auto">
          <thead className=" text-white bg-gray-700 rounded-lg">
            <tr>
              <th className="border px-3 py-2">Id</th>
              <th className="border px-3 py-2">Username</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">PhoneNumber</th>
              <th className="border px-3 py-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((data, i) => {
              return (
                <tr className="text-white py-2 hover:bg-gray-600/30" key={i}>
                  <td className="border px-3 py-2">{i + 1}</td>
                  <td className="border px-3 py-2">{data.username}</td>
                  <td className="border px-3 py-2">{data.email}</td>
                  <td className="border px-3 py-2">{data.phone}</td>
                  <td className="border px-3 py-2">{data.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
