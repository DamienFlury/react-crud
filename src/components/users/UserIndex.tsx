import React from 'react';
import { User } from '../../types/User';

type Props = {
  users: User[];
  onDelete: (id: number) => void;
};

const UserIndex: React.FC<Props> = ({ users, onDelete }) => {
  const handleDelete = (id: number) => {
    onDelete(id)
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Forename</th>
          <th>Surname</th>
          <th>Birthday</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.forename}</td>
            <td>{user.surname}</td>
            <td>{user.birthday}</td>
            <td>{user.active.toString()}</td>
            <td>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserIndex;
