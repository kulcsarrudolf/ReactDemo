import { useSelector } from 'react-redux';

import SelectUser from './SelectUser';
import CurrentUser from './CurrentUser';

const User = () => {
  const user = useSelector((state) => state.user);

  if (user) {
    return <CurrentUser />;
  }

  return <SelectUser />;
};

export default User;
