import React from 'react'

export default function Contain() {
    let cntn ={
        backgroundColor:'#1B1E1F', color:'#FFFFFF',padding:'3vw',margin:'2vw'
    }
  return (
    <div style={cntn}>styles</div>
  )
}

export default function para(){
    let pstyle={  color: '#FFFFFF',
              //backgroundColor: 'grey',
            width: '50vw',
              margin:'auto', 
              padding:'0.5vw',
              border:'1px solid red',
             borderColor:'red'}

    return (
             <p style={pstyle}/>

)}

export default function img(){
    retrun (<img src={'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1675165055/Rectangle_4492_mqcxrv.png'} ></img>);
}


/*
<div className='aboutus' style={}>
      <h1 className='events' style={hst}>About Us</h1>

      
      <p className='para' style={pstyle}>Hooked up with Design is to trigger your potential to come up with effective and attractive business design ideas to increase customer acquisition and retention rate. 
      It aims to provide business scenarios inspired by real-life cases and challenge teams to use design thinking principles to devise suitable approaches that hold the potential to disrupt the market. 
      Even today, companies overlook the importance of business design and steer their thoughts only in the direction of growing revenue and profit margins.  </p>

    </div>
    */