import React from 'react';
import axios from 'axios';
import Header from './Header';
function Home({post1,post2,post3,post4,post5,post6,post7,post8,post9}) {
  
  return (
    <div>
    <Header />

    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',}}> </div>
    <div style={{position: 'relative',borderRadius: '0 0 130px 130px',overflow: 'hidden',}}> </div>
    <img  src="/images/conbaslık.jpg" style={{ width: '1900px', height: '300px',objectFit: 'cover', }}/>
-
    <div>
    <div style={{position: 'absolute',top: '200px',left: '50%',transform: 'translate(-50%, -50%)',fontSize: '25px',fontWeight: 'bold',textAlign: 'center',color: 'white',backgroundColor: 'rgba(0, 0, 0, 0.5)',width: '50%',}}> 
    
    <h2>Sürdürülebilirlik</h2> </div> </div>
    

-
    <div style={{marginTop:'90px', marginRight:'10px', color: 'white',width: '750px', height:'400px', padding: '30px', backgroundColor: 'rgb(29, 135, 32, 1)', border: '2px solid rgb(37, 196, 37)', borderRadius: '50px',position:'absolute',right:'750px', top:'400px',}}>
      <div>
           <h2>{post1.title.rendered}</h2>
           
            <div style = {{marginTop:'50px',fontSize:'20px',}}dangerouslySetInnerHTML={{ __html: post1.content.rendered}} /> </div>
            <img src="/images/c1.jpg" alt="görsel2" style={{width: '400px',height: '460px',position:'absolute',left:'830px',top:'1px',borderRadius: '50px',}} /> 

      </div> 
         
      <h1 style={{marginTop:'600px',marginLeft:'350px',color:'green',}}> -Sürdürülebilirlik Hedeflerimiz ve Değerlerimiz </h1>
-
     <div style={{ display: 'flex',marginLeft:'330px',height:'200px', width: '1150px',padding: '30px',backgroundColor: 'white',border: '2px solid rgb(37, 196, 37)',borderRadius: '50px',}}>
      <div><img src="/images/1a.png" alt="hedef" style={{width: '250px', height: '150px',marginLeft: '10px',marginRight: '60px',marginTop:'10px',}} /> </div>
        <div style={{color: 'black',fontSize:'20px',marginTop:'-20px',}}>
            <h2>{post2.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post2.content.rendered }} />
        </div>
        </div>

        <div style={{ display: 'flex',marginTop:'30px',marginLeft:'330px',height:'200px', width: '1150px',padding: '30px',backgroundColor: 'white',border: '2px solid rgb(37, 196, 37)',borderRadius: '50px',}}>
      <div><img src="/images/1a.png" alt="hedef" style={{width: '250px', height: '150px',marginLeft: '10px',marginRight: '60px',marginTop:'10px',}} /> </div>
        <div style={{color: 'black',fontSize:'20px',marginTop:'-20px',}}>
            <h2>{post3.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post3.content.rendered }} />
        </div>
        </div>

      
        <div style={{ display: 'flex',marginLeft:'330px',marginTop:'30px',height:'200px', width: '1150px',padding: '30px',backgroundColor: 'white',border: '2px solid rgb(37, 196, 37)',borderRadius: '50px',}}>
      <div><img src="/images/1a.png" alt="hedef" style={{width: '250px', height: '150px',marginLeft: '10px',marginRight: '60px',marginTop:'10px',}} /> </div>
        <div style={{color: 'black',fontSize:'20px',marginTop:'-20px',}}>
            <h2>{post4.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post4.content.rendered }} />
        </div>
        </div>


        <div style={{ display: 'flex',marginLeft:'330px',marginTop:'30px',height:'200px', width: '1150px',padding: '30px',backgroundColor: 'white',border: '2px solid rgb(37, 196, 37)',borderRadius: '50px',}}>
      <div><img src="/images/1a.png" alt="hedef" style={{width: '250px', height: '150px',marginLeft: '10px',marginRight: '60px',marginTop:'10px',}} /> </div>
        <div style={{color: 'black',fontSize:'20px',marginTop:'-20px',}}>
            <h2>{post5.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post5.content.rendered }} />
        </div>
        </div>

        <div style={{ display: 'flex',marginLeft:'330px',marginTop:'30px',height:'200px', width: '1150px',padding: '30px',backgroundColor: 'white',border: '2px solid rgb(37, 196, 37)',borderRadius: '50px',}}>
      <div><img src="/images/1a.png" alt="hedef" style={{width: '250px', height: '150px',marginLeft: '10px',marginRight: '60px',marginTop:'10px',}} /> </div>
        <div style={{color: 'black',fontSize:'20px',marginTop:'-20px',}}>
            <h2>{post6.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post6.content.rendered }} />
        </div>
        </div>

        <div style={{}}>
        <img src="/images/d1.jpg" alt="hedef" style={{marginTop:'20px',width: '1900px', height: '650px',}} />
        <img src="/images/d3.jpg" alt="hedef" style={{borderRadius:'50px',position:'absolute',top:'2570px',right:'1200px',width: '390px', height: '300px',}} />
        <img src="/images/d2.jpg" alt="hedef" style={{borderRadius:'50px',position:'absolute',top:'2870px',right:'200px',width: '390px', height: '300px',}} />




        </div>
    
    





    </div>


);
}

export async function getServerSideProps(context) {
    const response1 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/88');
    const post1 = response1.data;

    const response2 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/92');
    const post2 = response2.data;

    const response3 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/94');
    const post3 = response3.data;

    const response4 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/96');
    const post4 = response4.data;

    const response5 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/98');
    const post5 = response5.data;

    const response6 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/100');
    const post6 = response6.data;

    return { props: { post1,post2,post3,post4,post5,post6,} };
  }
  


export default Home;