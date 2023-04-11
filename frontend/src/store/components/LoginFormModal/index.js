import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
// import { menuContext } from '../Navigation';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  // const {menuState, setMenuState} = useContext(menuContext) 

  const handleClick = () => {
    setShowModal(true)
    // setMenuState(false)
  }


  return (
    <>
      <button onClick={handleClick}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm onSubmit={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;