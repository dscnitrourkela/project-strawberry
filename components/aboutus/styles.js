import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export function Contain() {
    let cntn ={
        backgroundColor:'#1B1E1F', color:'#FFFFFF',padding:'3vw',margin:'2vw'
    }
  return (
    <div style={cntn}>styles</div>
  )
}


const TextB = styled.p`
${
  tw`
  w-5
  m-auto
  p-4
   ` 
}

width: '50vw',
margin:'auto', 
padding:'0.5vw',
border:'1px solid red',
borderColor:'red'
`;

export function TextBox(){
  return( TextB);

}

/*  let pstyle={  
            color: '#FFFFFF',
            backgroundColor: 'grey',
            width: '50vw',
            margin:'auto', 
            padding:'0.5vw',
            border:'1px solid red',
            borderColor:'red'}
*/


export function Img(){
    return (<img src={'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1675165055/Rectangle_4492_mqcxrv.png'} ></img>);
}

          

export const Headi = styled.p`
${
  tw`
  text-white
  border-white
   ` 
}

color: '486FFD',
borderBottom: '1px',
borderColor: '486FFD'
`;
