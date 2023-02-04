import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


export const MainContainer = styled.div`
${
  tw`
  bg-[#1B1E1F]
  m-auto
  p-5
  `
}
`

export const Headercntn = styled.div`
${
  tw`
  p-2
  mb-5
  `
}
`;

      
export const Headi = styled.span`
${
  tw`
  text-white
  border-b-4
  pr-10
  ml-5
   ` 
}
border-color: #486FFD ;
padding: 8px 50px 8px 8px;
@media only screen and (min-width:850px){
  ${ tw`ml-28 `}
}

`;


export const Flexcntn = styled.div`
  ${
    tw`
    inline-flex
    flex-row
    
    justify-around
    
    w-full
    items-center
   
    
    `
  }
  display : flex;
  justify-content : center;
  justify-content: space-around;

  @media only screen and (min-width:1200px){
    ${ tw` py-5 px-28 ` }
    
  }
  @media only screen and (max-width:1200px){
    padding:0px;
  }

`;

export function Img(){
    return (<img src={'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1675165055/Rectangle_4492_mqcxrv.png'} ></img>);
}

export const ImgContainer = styled.div`
${
  tw`
  flex
  `
}
width: 562px;
@media only screen and (max-width:800px){
  display :none;
}
`


export const TextBox = styled.p`
${
  tw`
  h-[220px]
  w-[574px]
  p-10
  text-white
  m-8
  text-justify
  h-full
  
  ` 
}
word-wrap:break-word;
@media only screen and (max-width:800px){
  border : 2.5px solid #486FFD;
  border-radius: 10px;
  padding: 4vw;
}
`;


