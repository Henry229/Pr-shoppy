import React from 'react';

const User = ({ user: { photoURL, displayName } }) => {
  return (
    <>
      <img
        src={photoURL}
        alt='displayName'
        className='w-10 h-10 rounded-full'
      />
      <p>{displayName}</p>
    </>
  );
};

export default User;
