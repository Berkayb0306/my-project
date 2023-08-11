import React from 'react';
import axios from 'axios';
import Header from './Header';
function Home({post1,post2,post3,post4,post5,post6,post7,post8,post9}) {
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
  marginTop:'5px',
  marginBottom:'-150px',
  
  
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
    top: '50px',
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
                <img src="/images/baslık2.jpg" alt="baslık" style={imageStyle} />
                <div style={textOverlayStyle}>
                    <h2>Çözümler</h2>
                </div>
        </div>
      </div>



      <div style={{
    position:'absolute',
    right:'550px',
    top:'-150px',
    color: 'green',
    fontWeight:'bold',
    fontSize: '18px',
    width: '800px',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '50px',
    marginBottom: '20px',
    marginTop:'500px',
  }}>
        <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '20px',
  }}>
          <div>
            <h2>{post1.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post1.content.rendered }} />
          </div>
        </div>
      </div>





      <div style={{
    position:'absolute',
    right:'550px',
    top:'200px',
    color: 'white',
    fontSize: '18px',
    width: '800px',
    padding: '30px',
    backgroundColor: 'rgb(29, 135, 32, 1)',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginBottom: '20px',
    marginTop:'500px',
  }}>
        <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '20px',
  }}>
          <div>
            <h2>{post2.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post2.content.rendered }} />
          </div>
          <img src="/images/görsel2.png" alt="görsel2" style={{
    width: '450px',
    height: '350px',
    marginRight: '10px',
  }} />
        </div>
      </div>

      <div style={{
        position:'absolute',
        right:'550px',
        top:'1200px',
    color: 'white',
    fontSize: '18px',
    width: '800px',
    padding: '30px',
    backgroundColor: 'rgb(29, 135, 32, 1)',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginBottom: '20px',
  }}>
        <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '20px',
  }}>
          <div>
            <h2>{post3.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post3.content.rendered }} />
          </div>
          <img src="/images/görsel3.png" alt="görsel3" style={{
    width: '450px',
    height: '350px',
    marginRight: '10px',
  }} />
        </div>
      </div>

      <div style={{
        position:'absolute',
        right:'550px',
        top:'1700px',
    color: 'white',
    fontSize: '18px',
    width: '800px',
    padding: '30px',
    backgroundColor: 'rgb(29, 135, 32, 1)',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginBottom: '20px',
  }}>
        <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '20px',
  }}>
          <div>
            <h2>{post4.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post4.content.rendered }} />
          </div>
          <img src="/images/görsel4.png" alt="görsel4" style={{
    width: '450px',
    height: '350px',
    marginRight: '10px',
  }} />
        </div>
      </div> 
      <div>
       <img src=" /images/bataryalogo.png" alt = "bataryalogo" style ={{ position:'absolute',
        right:'550px',
        top:'2150px',
    width:'45%',
    height:'auto',
      }}/>



        </div>
        <div style={{
           display: 'flex', flexDirection: 'row', alignItems: 'center'
    
    
  }}>
    <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    height: '100vh', 
}}>
    <div style={{
        position: 'relative',
        top:'1900px',
        left:'450px',
        color: 'black',
        fontSize: '18px',
        width: '800px',
        padding: '30px',
        backgroundColor: 'white',
        border: '2px solid rgb(37, 196, 37)',
        borderRadius: '50px',
        marginBottom: '20px',
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '50px',
        }}>
            <div>
                <h2>{post5.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: post5.content.rendered }} />
            </div>
            <img src="/images/1a.png" alt="hedef" style={{
                width: '150px',
                height: '100px',
                marginLeft: '50px',
            }} />
        </div>
    </div>
    <div style={{
        position: 'relative',
        top:'2200px',
        left:'-400px',
        color: 'black',
        fontSize: '18px',
        width: '800px',
        padding: '30px',
        backgroundColor: 'white',
        border: '2px solid rgb(37, 196, 37)',
        borderRadius: '50px',
        marginBottom: '20px',
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '50px',
        }}>
            <div>
                <h2>{post6.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: post6.content.rendered }} />
            </div>
            <img src="/images/2a.png" alt="hedef" style={{
                width: '150px',
                height: '100px',
                marginLeft: '50px',
            }} />
        </div>
    </div>
    <div style={{
        position: 'relative',
        top:'2550px',
        left:'-1250px',
        color: 'black',
        fontSize: '18px',
        height:'300px',
        width: '800px',
        padding: '30px',
        backgroundColor: 'white',
        border: '2px solid rgb(37, 196, 37)',
        borderRadius: '50px',
        marginBottom: '20px',
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '50px',
        }}>
            <div>
                <h2>{post7.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: post7.content.rendered }} />
            </div>
            <img src="/images/3a.png" alt="hedef" style={{
                width: '150px',
                height: '100px',
                marginLeft: '50px',
            }} />
        </div>
        <div style={{
        position: 'relative',
        top:'100px',
        left:'-30px',
        color: 'black',
        fontSize: '18px',
        width: '800px',
        height:'250px',
        padding: '30px',
        backgroundColor: 'white',
        border: '2px solid rgb(37, 196, 37)',
        borderRadius: '50px',
        marginBottom: '20px',
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '50px',
        }}>
            <div>
                <h2>{post8.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: post8.content.rendered }} />
            </div>
            <img src="/images/4a.png" alt="hedef" style={{
                width: '150px',
                height: '100px',
                marginLeft: '50px',
            }} />
            </div>
        <div style={{
        position: 'relative',
        top:'5px',
        left:'-30px',
        color: 'black',
        fontSize: '18px',
        width: '800px',
        height:'250px',
        padding: '30px',
        backgroundColor: 'white',
        border: '2px solid rgb(37, 196, 37)',
        borderRadius: '50px',
        marginBottom: '20px',
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between', 
            marginBottom: '50px',
        }}>
            <div>
                <h2>{post9.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: post9.content.rendered }} />
            </div>
            <img src="/images/5a.png" alt="hedef" style={{
                width: '150px',
                height: '100px',
                marginLeft: '50px',
            }} />
            <div>
       <img src=" /images/bataryalogo.png" alt = "bataryalogo" style ={{ position:'absolute',
        right:'10px',
        top:'350px',
    width:'100%',
    height:'auto',
      }}/>



        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

  
    
  
  
  
  );
}

export async function getServerSideProps(context) {
    const response1 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/74');
    const post1 = response1.data;

    const response2 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/20');
    const post2 = response2.data;

    const response3 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/32');
    const post3 = response3.data;

    const response4 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/41');
    const post4 = response4.data;

    const response5 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/77');
    const post5 = response5.data;

    const response6 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/79');
    const post6 = response6.data;

    const response7 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/81');
    const post7 = response7.data;

    const response8 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/83');
    const post8 = response8.data;

    const response9 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/85');
    const post9 = response9.data;
  
  

    return { props: { post1,post2,post3,post4,post5,post6,post7,post8,post9} };
  }
  


export default Home;