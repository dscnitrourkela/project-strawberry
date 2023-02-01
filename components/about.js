import React from 'react'
// import rect from '../imgs/Rectangle_4492.png';import { TextBox } from './styles';
//import ARect from './rect';
import TextBox from './styles'

let hst={
  color: '486FFD',
  borderBottom: '1px',
  borderColor: '486FFD'
}             


const About= ()=> {
  return (
    <>
    <div className='aboutus' style={{backgroundColor:'#1B1E1F', color:'#FFFFFF',padding:'3vw',margin:'2vw'}}>
      <h1 className='events' style={hst}>About Us</h1>

      <img src={'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1675165055/Rectangle_4492_mqcxrv.png'} ></img>
      <TextBox>Hooked up with Design is to trigger your potential to come up with effective and attractive business design ideas to increase customer acquisition and retention rate. 
      It aims to provide business scenarios inspired by real-life cases and challenge teams to use design thinking principles to devise suitable approaches that hold the potential to disrupt the market. 
      Even today, companies overlook the importance of business design and steer their thoughts only in the direction of growing revenue and profit margins.  </TextBox>

    </div>
    </>
  )
}

export default About


/*let pstyle ={ color: '#FFFFFF',
              //backgroundColor: 'grey',
              width: '50vw',
              margin:'auto', padding:'0.5vw',
              border:'1px solid red',
             borderColor:'red'};
*/
