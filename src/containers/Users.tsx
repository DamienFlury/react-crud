import React, { useState } from 'react';
import { User } from '../types/User';
import UserIndex from '../components/users/UserIndex';
import UserForm from './UserForm';

let id = 4;

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      forename: 'Katy',
      surname: 'Perry',
      active: true,
      birthday: new Date('1/1/1993').toISOString(),
    },
    {
      id: 2,
      forename: 'Jessica',
      surname: 'Alba',
      active: true,
      birthday: new Date('2/3/1989').toISOString(),
    },
    {
      id: 3,
      forename: 'Tom',
      surname: 'Hanks',
      active: false,
      birthday: new Date('4/5/1975').toISOString(),
    },
  ]);

  const handleDelete = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };
  return (
    <div>
      <h1>Users</h1>
      <UserForm
        onSubmit={(user) => {
          setUsers((prev) => [...prev, { ...user, id: id++ }]);
        }}
      />
      <UserIndex users={users} onDelete={handleDelete} />
    </div>
  );
};

export default Users;
