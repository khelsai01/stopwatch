import React, { useEffect } from "react";
import "../index.css";
import ReactDOM from 'react-dom'

const Model = ({ closeModel }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';

    }
  },[])
  return ReactDOM.createPortal(
    <div>
      <div className="wrapperModel" onClick={closeModel}></div>
      <div className="modelContent">
      <h1>Welcome to Model</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum facilis
        sit dicta quia nesciunt nihil totam ratione eius odio, architecto,
        dolore consequuntur? Maiores culpa eaque dignissimos quia molestiae
        neque quas!
      </p>
      <button onClick={closeModel}>Accept It</button>
      </div>
      </div>,document.querySelector('.myPortal')
  );
};

export default Model;
