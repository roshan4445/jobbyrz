
import {useState} from 'react';
import {useNavigate} from 'react-router'
import Cookies from 'js-cookie'
import './index.css';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSubmitError, setshowSubmitError] = useState(false)
    const [showError, setShowError] = useState('');

    const navigate = useNavigate();

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const renderPasswordField = () => (
        <>
            <label htmlFor='password' className='d-block font-bold text-[18px] mb-[10px] text-[#aaa]'>PASSWORD</label>
            <input type='password' id='password' className='w-[94%] p-[0.5rem] border-[1px] border-[#8f86b3] rounded-lg bg-[#2c2c2c]' placeholder='Password' value={password} onChange={onChangePassword} />
        </>
    )

    const renderUsernameField = () => (
        <>
            <label htmlFor='username' className='d-block font-bold text-[18px] mb-[10px] text-[#aaa]'>USERNAME</label>
            <input type='text' id='username'  className='w-[94%] p-[0.5rem] border-[1px] border-[#8f86b3] rounded-lg bg-[#2c2c2c]' placeholder='Username' value={username} onChange={onChangeUsername} />
        </>
    )

    const onSubmitSuccess = jwt_token => {
        Cookies.set('jwt_token', jwt_token, {expires: 10})
        navigate('/', {replace: true})
    }

    const onSubmitFailure = error_msg => {
        setShowError(error_msg);
        setshowSubmitError(true);

    }

    const submitForm = async event => {
        event.preventDefault();
        const userDetails = {username,password};
        const aurl = 'https://apis.ccbp.in/login';
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(aurl,options);
        const data = await response.json()
    
        if(response.ok === true){
            onSubmitSuccess(data.jwt_token);
        }
        else{
            onSubmitFailure(data.error_msg);
        }

    }
    return (
        <div className='min-h-screen min-w-screen flex items-center justify-center bg-black m-0 text-white'>
            <div className='w-[300px] bg-[#2c2c2c] p-5 rounded-lg text-center'>
                <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
                     alt='Webiste Logo'
                     className='w-[150px] mb-[10px] ' 
                />
                
                <form onSubmit={submitForm} >
                    <div className='text-left mb-3'>
                        {renderUsernameField()}
                    </div>

                    <div className='text-left mb-3'>
                        {renderPasswordField()}
                    </div>
                    <button type='submit' className='w-100% p-[5px] bg-[#6c63ff] border-none rounded-sm text-white '>Login</button>
                    {showSubmitError && <p className='error-msg'>{showError}</p>}
                </form>
            </div>
        </div>

    )
};

export default LoginForm;

