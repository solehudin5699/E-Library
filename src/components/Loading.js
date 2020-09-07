import React from "react";
import Loader from 'react-loader-spinner'
const Loading = (props) => {
  return (
      <div style={{width: "100",height: "30px",display: "flex",justifyContent: "center",alignItems: "center" }}>
        <Loader type="ThreeDots" height="250" width="100" color={props.color} timeout={5000} />
      </div>
  )
}

export default Loading;
