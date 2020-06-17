import React, { useState } from 'react';
import { User } from '../types/User';
import UserIndex from '../components/users/UserIndex';
import UserForm from './UserForm';
import styled from 'styled-components';

const Dialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
`;

const FormWrapper = styled.div`
  max-width: 860px;
  padding: 20px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
  width: 100%;
  border-radius: 4px;
`;

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

  const [open, setOpen] = useState(false);

  console.log('RENDER');

  const handleDelete = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleSubmit = (user: Omit<User, 'id'>) => {
    setUsers((prev) => [...prev, { ...user, id: id++ }]);
    setOpen(false);
  }

  return (
    <div>
      <h1>Users</h1>
      {open && (
        <Dialog onClick={() => setOpen(false)}>
          <FormWrapper onClick={e => e.stopPropagation()}>
            <UserForm
              onSubmit={handleSubmit}
            />
          </FormWrapper>
        </Dialog>
      )}
      <button onClick={() => setOpen((prev) => !prev)}>Create User</button>
      <UserIndex users={users} onDelete={handleDelete} />
    </div>
  );
};

export default Users;
