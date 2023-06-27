import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
// import { menuContext } from '../Navigation';
// import { useContext } from "react";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  // const {menuState, setMenuState} = useContext(menuContext) 

  const handleClick = () => {
    setShowModal(true)
    // .then(() => {setMenuState(false)})
    // setMenuState(false)
  }


  return (
    <>
      <div onClick={handleClick}>Log In</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm onSubmit={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;