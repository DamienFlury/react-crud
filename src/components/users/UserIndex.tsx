import React from 'react';
import { User } from '../../types/User';
import styled from 'styled-components';

type Props = {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const TableCell = styled.td`
  padding: 1.2rem;
`;

const Paper = styled.div`
  box-shadow: 0 1px 3px #595959;
  margin: 8px;
  border-radius: 4px;
`;

const UserIndex: React.FC<Props> = ({ users, onDelete, onEdit }) => {

  return (
    <Paper>
    <table>
      <thead>
        <tr>
          <th>Id</ th>
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
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.forename}</TableCell>
            <TableCell>{user.surname}</TableCell>
            <TableCell>{user.birthday}</TableCell>
            <TableCell>
              <input type="checkbox" checked={user.active} disabled />
            </TableCell>
            <TableCell>
              <button onClick={() => onDelete(user.id)}>Delete</button>
              <button onClick={() => onEdit(user.id)}>Update</button>
            </TableCell>
          </tr>
        ))}
      </tbody>
    </table>
    </Paper>
  );
};

export default UserIndex;
