import './login.scss'
import * as React from 'react';
import Button from '@mui/material/Button';
import packageJson from '../../../package.json';
import Snackbar from '@mui/material/Snackbar';

import { useNavigate } from "react-router-dom";

import { MdFingerprint } from 'react-icons/md';
import { TbArrowBigDownLines } from 'react-icons/tb';
import { SiHomebridge } from 'react-icons/si';


const Login = () => {
  const navigate = useNavigate();

  //For the SnackBar
  const [openSnack, setOpenSnack] = React.useState<boolean>(false);
  const handleCloseSnack = () => {
    setOpenSnack(false);
  };

  function submit() {
    let loginValue: string = (document.getElementById('login') as HTMLInputElement).value;
    let passwordValue: string = (document.getElementById('password') as HTMLInputElement).value;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: loginValue,
        password: passwordValue
      })
    };

    const isLogingForToken = async () => {
      try {
        const response = await fetch('URL', requestOptions);
        const jsonRes = await response.json();
        console.log(jsonRes.token);

        if (jsonRes.token === undefined) {
          console.log('refused');
          setOpenSnack(true);
        } else {
          localStorage.setItem("TOKEN", JSON.stringify(jsonRes.token));
          navigate('/sites');
        }
      } catch {
        console.error();
        return [];
      }
    }
    isLogingForToken();
  }



  return (
    <>
      <div className="login">
        <div className="login__top">
          <MdFingerprint size={30}/>
          <TbArrowBigDownLines size={20}/>
        </div>
        <div className="login__bloc">
          <SiHomebridge size={150} color='#4db6ac'/>
          <div>
            <fieldset>
              <legend>Login</legend>
              <input id="login" type="text" required />
              <br />
            </fieldset>
            <fieldset>
              <legend>Mot de passe</legend>
              <input id="password" type="password" required />
              <br />
            </fieldset>
          </div>
          <Button
            sx={{ color: 'white', backgroundColor: '#0288d1' }}
            className="login__bloc--btn"
            variant="contained"
            onClick={() => submit()}>
            Valider
          </Button>
        </div>
        <div className="login__bot"> v {packageJson.version} </div>
      </div>

      <Snackbar 
        className='alertLogin'
        open={openSnack} 
        autoHideDuration={6000} 
        onClose={handleCloseSnack}
        message="refused!"
      />
    </>

  );
}

export default Login;