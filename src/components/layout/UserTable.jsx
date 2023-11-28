import './UserTable.css'; 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gender from './Gender';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setUsers(response.data.users);
      setLoading(false); 
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th>Name</th>
            <th className="text-center">Image</th>
            <th className="text-center">Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="text-center">{user.id}</td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td className="text-center">
                <img src={user.image} alt="User" style={{ width: '50px', height: '50px' }} />
              </td>
              <td className="text-center">
                <Gender gender={user.gender}/>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
