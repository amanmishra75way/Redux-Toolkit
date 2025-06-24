import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./faetures/userSlice.jsx";

const Component = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">👥 User List</h1>

        {loading && <div className="text-blue-500 animate-pulse text-center mb-4">🔄 Loading users...</div>}

        {error && <div className="text-red-600 font-semibold text-center mb-4">⚠️ {error}</div>}

        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
              <p className="text-lg font-medium text-gray-700">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>

        {!loading && users.length === 0 && <p className="text-center text-gray-500 mt-4">No users found.</p>}
      </div>
    </div>
  );
};

export default Component;
