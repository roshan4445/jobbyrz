

import { useState } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import './index.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSubmitError, setshowSubmitError] = useState(false);
  const [showError, setShowError] = useState('');

  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const renderPasswordField = () => (
    <div className="mb-5">
      <label
        htmlFor="password"
        className="block text-base md:text-lg font-semibold text-gray-300 mb-2"
      >
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onChangePassword}
        placeholder="Enter your password"
        className="w-full px-4 py-2 text-sm md:text-base bg-gray-800 border border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition duration-300"
      />
    </div>
  );

  const renderUsernameField = () => (
    <div className="mb-5">
      <label
        htmlFor="username"
        className="block text-base md:text-lg font-semibold text-gray-300 mb-2"
      >
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={onChangeUsername}
        placeholder="Enter your username"
        className="w-full px-4 py-2 text-sm md:text-base bg-gray-800 border border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition duration-300"
      />
    </div>
  );

  const onSubmitSuccess = (jwt_token) => {
    Cookies.set('jwt_token', jwt_token, { expires: 10 });
    navigate('/', { replace: true });
  };

  const onSubmitFailure = (error_msg) => {
    setShowError(error_msg);
    setshowSubmitError(true);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const aurl = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(aurl, options);
    const data = await response.json();

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#2c2c2c] p-6 sm:p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="Website Logo"
            className="w-32 sm:w-40 mx-auto"
          />
        </div>

        <form onSubmit={submitForm}>
          {renderUsernameField()}
          {renderPasswordField()}

          <button
            type="submit"
            className="w-full py-2 bg-purple-500 hover:bg-purple-600 transition-colors duration-300 rounded-md text-base font-semibold mt-2"
          >
            Login
          </button>

          {showSubmitError && (
            <p className="mt-4 text-red-500 text-sm sm:text-base font-medium text-center">
              {showError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

