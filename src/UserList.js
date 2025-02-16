import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg shadow-md mb-2">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))
      ) : (
        <p className="text-red-500">No users found</p>
      )}
    </div>
  );
};

export default UserList;
