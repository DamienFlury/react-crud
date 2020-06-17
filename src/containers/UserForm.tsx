import React, { useState } from 'react';
import { User } from '../types/User';

type Props = {
  onSubmit: (user: User) => void;
  initialUser?: User;
};

const UserForm: React.FC<Props> = ({ onSubmit, initialUser }) => {
  const [forename, setForename] = useState(initialUser?.forename ?? '');
  const [surname, setSurname] = useState(initialUser?.surname ?? '');
  const [birthday, setBirthday] = useState(initialUser?.birthday.split('T')[0] ?? '');
  const [active, setActive] = useState(initialUser?.active ?? false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          id: initialUser?.id ?? 0,
          forename,
          surname,
          birthday: new Date(birthday).toISOString(),
          active,
        });
        setForename('');
        setSurname('');
        setBirthday('');
        setActive(false);
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
  );
};

export default UserForm;
