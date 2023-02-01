import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

/*function Contain() {
    let cntn ={
        backgroundColor:'#1B1E1F', color:'#FFFFFF',padding:'3vw',margin:'2vw'
    }
  return (
    <div style={cntn}> this part is printing</div>
  )
}*/

const Cntn = styled.div`
${
  tw`
  bg-black
  m-auto
  p-5
  `
}
backgroundColor:'#1B1E1F', 
color:'#FFFFFF',
padding:'3vw',
margin:'2vw'
`


const TextB = styled.p`
${
  tw`
  w-5/12
  p-4
  text-white
  border
  
  ` 
}
width: 500vw,
padding:0.5vw,
border : 1px solid red
`;
/*function TextBox(){
  return( TextB);

}
*/

const Flexcntn = styled.div`
  ${
    tw`
    inline-flex
    flex-row
    p-5
    justify-around
    border
    m-5
    w-full
    `
  }
  display : flex,
  justify-content : center
`;

function Img(){
    return (<img src={'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1675165055/Rectangle_4492_mqcxrv.png'} ></img>);
}

      
const Headi = styled.span`
${
  tw`
  text-white
  border-b-2
  border-white
  p-2
   ` 
}

`;

const Headercntn = styled.div`
${
  tw`
  p-2
  `
}

`;

export default function About() {
  return (
    <>
    <Cntn>
    <Headercntn><Headi>About Us</Headi></Headercntn>
      <Flexcntn>
      <Img/>
      <TextB>Hooked up with Design is to trigger your potential to come up with effective and attractive business design ideas to increase customer acquisition and retention rate. 
      It aims to provide business scenarios inspired by real-life cases and challenge teams to use design thinking principles to devise suitable approaches that hold the potential to disrupt the market. 
      Even today, companies overlook the importance of business design and steer their thoughts only in the direction of growing revenue and profit margins.  </TextB>
      </Flexcntn>
    </Cntn>
    </>
  )
}

;
console.log(typeof(TextB));
console.log(Headi);