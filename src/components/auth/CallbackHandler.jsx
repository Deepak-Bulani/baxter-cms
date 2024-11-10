// src/components/Auth/CallbackHandler.jsx
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {LoginCallback} from '@okta/okta-react';

const CallbackHandler = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/', {replace: true});
  };

  const handleError = err => {
    console.error('Callback error:', err);
    navigate('/login', {replace: true});
  };

  return <LoginCallback onSuccess={handleSuccess} onError={handleError} />;
};

export default CallbackHandler;
