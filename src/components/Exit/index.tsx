import React from 'react';

import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../hooks/auth';

const Exit = () => {
  const {sigout} = React.useContext(AuthContext);
  return (
      <>
      {sigout()}
      <Redirect to='/' />
    </>
  )
}

export default Exit;