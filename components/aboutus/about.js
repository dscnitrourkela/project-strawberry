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
  w-6/12
  p-4
  text-white
  
  ` 
}
border : 1px solid white
`;

const Flexcntn = styled.div`
  ${
    tw`
    inline-flex
    flex-row
    px-9
    py-5
    justify-around
    m-5
    w-full
    `
  }
  display : flex;
  justify-content : center;
  justify-content: space-around;
  align-items : center;
`;

function Img(){
    return (<img src={'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1675165055/Rectangle_4492_mqcxrv.png'} ></img>);
}

      
const Headi = styled.span`
${
  tw`
  w-10
  text-white
  border-b-2
  p-2
   ` 
}
border-color: #486FFD ;
width : 20vw;
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
//console.log(typeof(TextB));
//console.log(Headi);