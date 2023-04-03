// import React from "react";
// function Pre(props) {
//   return <div id={props.load ? "preloader" : "preloader-none"}></div>;
// }

// export default Pre;
import React from 'react'
import styled from 'styled-components'

const PreLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: #0c0513;
  background-image: url('https://res.cloudinary.com/drpkgjnij/image/upload/v1680487156/Ashutosh%20Rath/pre_vcfwbs.svg');
  background-repeat: no-repeat;
  background-position: center;
  display: ${props => (props.load ? 'block' : 'none')};
`

function PreLoader(props) {
  return <PreLoaderWrapper load={props.load} />
}

export default PreLoader
