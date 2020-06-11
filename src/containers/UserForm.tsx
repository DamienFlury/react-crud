import React, { useState } from 'react';
import { User } from '../types/User';

type Props = {
  onSubmit: (user: Omit<User, 'id'>) => void;
};

const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [active, setActive] = useState(false);
  return (
    <div>
      <h1>Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ forename, surname, birthday: new Date(birthday).toISOString(), active });
        }}
      >
        <div>
          <label htmlFor="forename">Forename</label>
          <input
            type="text"
            id="forename"
            value={forename}
            onChange={(e) => setForename(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <input
            type="checkbox"
            id="active"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
