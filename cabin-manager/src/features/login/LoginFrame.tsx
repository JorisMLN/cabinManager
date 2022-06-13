import Login from "./Login";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from 'react';
// import { checkToken } from '../../checkToken';

function LoginFrame() {
  // const navigate = useNavigate();
  // console.log('Token Valid ?', checkToken());

  // useEffect(() => {
  //   if (checkToken() === true) {
  //     navigate('/sites');
  //   } else {
  //     localStorage.clear();
  //   }
  // })

  return (
    <>
      <Login />
    </>
  );
}

export default LoginFrame;
