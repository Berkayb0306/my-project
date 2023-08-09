import React from 'react';
import axios from 'axios';
import Header from './Header';
function Home({ post1,post2,post3,}) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const horizontalContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '20px',
    backgroundColor:'green',
  };
 const imageStyle ={
  width:'2250px',
  height:'400px',
 
  marginBottom:'-100px',
  
  
}
  const imageStyle1 ={
    background : '#fcfcfc',
    width:'1000px',
    height:'390px',
    marginLeft : '500px',
    marginTop:'400px',
    borderRadius:'50px',
    
  }
  const textOverlayStyle = {
    position: 'absolute',
    top: '74%',
    left: '28%',
    transform: 'translate(-50%, -50%)',  
    fontSize: '25px',  
    fontWeight: 'bold',
    textAlign:'center',
    color:'white',
    width: '5%',    
    height: '3%'
  }
  const postStyle1 = {
    color: 'grey',
    fontSize: '14px',
    width: 'auto',
    padding: '30px',
    backgroundColor: 'white',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginTop:'5px',
    marginBottom: '50px',
    marginRight:'500px',
    marginLeft:'500px',
    textAlign:'left',
  
  }
  const postStyle2 = {
    color: 'grey',
    fontSize: '18px',
    width: 'auto',
    padding: '30px',
    backgroundColor: 'white',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginTop:'5px',
    marginBottom: '50px',
    marginRight:'500px',
    marginLeft:'500px',
    textAlign:'left',
  
  }

  const postStyle3 = {
    position: 'absolute',
    top: '80px',
    borderRadius: '0 0 130px 130px',
    overflow: 'hidden'
  }
  
  const imageStyle2 ={
    width: '200px',
    height: '200px',

    borderRadius: '500px',
    marginRight: '10px',
    marginBottom:'-15px',
    
    marginTop:'-10px',
  
    
  }
  const imageStyle3 ={
    width: '250px',
    height: '200px',
    marginRight: '5px',
    marginBottom:'-15px',
    
    marginTop:'-10px',
  
    
  }
  return (
    <div>
        <Header />
        <div style={containerStyle}>
            <div style={postStyle3}>
                <img src="/images/baslık.jpg" alt="baslık" style={imageStyle} />
                <div style={textOverlayStyle}>
                    <h2>Hakkımızda</h2>
                </div>
        </div>
      </div>
           
      <div>       
          <img src=" /images/giriş.jpg" alt = "giriş" style ={imageStyle1}/>
      </div>  
      
      
      <div style={postStyle1}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <img src="/images/hedef.png" alt="hedef" style={imageStyle2} />
          <div>
          <h2>Misyonumuz</h2>
          <h2>{post1.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post1.content.rendered }} />
          
        </div>
        </div>
        </div>


        <div style={postStyle2}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            
            <img src="/images/roket.png" alt="roket" style={imageStyle3} />
          <div>
          <h2>Vizyonumuz</h2>
          <div dangerouslySetInnerHTML={{ __html: post2.content.rendered }} />
          
        </div>
        </div>
        </div>


          <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'row',marginBottom: '20px',backgroundColor:'green',}}>
          <img src="/images/ev.jpg" alt="ev" style={{position:'absolute',right:'650px',width: '250px',height: '190px',marginRight: '10px',marginBottom:'-15px',    marginLeft:'1000px',marginTop:'-10px',}} />
          <div>
          <div style={{color: 'black',fontSize: '16px',width: '700px',height:'150px',padding: '30px',backgroundColor: 'white',border: '2px solid rgb(37, 196, 37)',borderRadius: '50px',marginTop:'50px',marginBottom: '50px',marginRight:'490px',textAlign:'center',}}>
          <h2 style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:'27px',}}>Üretim </h2>
          <div dangerouslySetInnerHTML={{ __html: post3.content.rendered }} />
          </div>
          </div>
          </div>
        
  </div>

  
    
  
  
  
  );
}

export async function getServerSideProps(context) {
  
    const response1 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/65');
    const post1 = response1.data;

    const response2 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/69');
    const post2 = response2.data;

    const response3 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/71');
    const post3 = response3.data;

    return { props: { post1,post2,post3,} };
  }
  


export default Home;