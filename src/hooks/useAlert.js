import { useState } from 'react';

const initialState = {
  show: false,
  text: "",
  type: "danger",
};

const useAlert = () => {
  const [alert, setAlert] = useState(initialState);

  const showAlert = ({ text, type = "danger"}) => setAlert({ 
    show: true,
    text,
    type,
  });

  const hideAlert = () => setAlert(initialState);

  return {
    alert,
    showAlert,
    hideAlert,
  }
};

export default useAlert;