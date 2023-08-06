import React from 'react';
import axios from 'axios';
import BrandLogos from './BrandLogos1';
import SlideShow from './SlideShow';
import Header from './Header';
function Home({ post1, post2, post3, post4,post5 }) {
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
  };

  const postStyle1 = {
    color: 'white',
    fontSize: '16px',
    width: '400px',
    height: '800px',
    padding: '20px',
    backgroundColor: 'rgb(29, 135, 32, 1)',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginRight: '10px',
  };

  const imageStyle = {
    width: '400px',
    height: '850px',
    borderRadius: '50px',
  };

  const postStyle2 = {
    color: 'white',
    fontSize: '18px',
    width: '800px',
    padding: '30px',
    backgroundColor: 'rgb(29, 135, 32, 1)',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginBottom: '20px',
  };

  const postStyle3 = {
    color: 'white',
    fontSize: '18px',
    width: '800px',
    padding: '30px',
    backgroundColor: 'rgb(29, 135, 32, 1)',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginBottom: '20px',
  };

  const postStyle4 = {
    color: 'white',
    fontSize: '18px',
    width: '800px',
    padding: '30px',
    backgroundColor: 'rgb(29, 135, 32, 1)',
    border: '2px solid rgb(37, 196, 37)',
    borderRadius: '50px',
    marginBottom: '20px',
  };

  const imageStyle2 = {
    width: '450px',
    height: '350px',
    marginRight: '10px',
  };

  const imageStyle3 = {
    width: '450px',
    height: '350px',
    marginRight: '10px',
  };

  const imageStyle4 = {
    width: '450px',
    height: '350px',
    marginRight: '10px',
  };
  
  
  const images = [
    '/images/slider1.jpeg',
    '/images/slider2.jpg',
    '/images/slider3.jpg',
    
  ];
  const imageStyle5 = {
    width:'800px',
    height:'500px',
      }

 
  const addButtonsToLinks = (content) => {
    const regex = /<a[^>]*>(.*?)<\/a>/g;
    const buttonStyle = {
      display: 'inline-block',
    backgroundColor: 'green',  
    color: 'white',           
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    border: '5px solid green', 
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)', 
    margin: '5px', 
    
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)', 
    margin: '5px', 
  };

    return content.replace(regex, (match, p1) => {
      const urlMatch = match.match(/href="(.*?)"/);
      if (urlMatch) {
        const url = urlMatch[1];
        return `<a href="${url}" target="_blank" style="${Object.entries(buttonStyle)
          .map(([key, value]) => `${key}:${value}`)
          .join(';')}">${p1}</a>`;
      }
      return match;
    });
  };

 
  post1.content.rendered = addButtonsToLinks(post1.content.rendered);
  post2.content.rendered = addButtonsToLinks(post2.content.rendered);
  post3.content.rendered = addButtonsToLinks(post3.content.rendered);
  post4.content.rendered = addButtonsToLinks(post4.content.rendered);

  return (
    <div>
       <Header />
    <SlideShow images={images} />
    {}
    <div style={{ height: '90px' }}></div>
    <div style={containerStyle}>
      <div style={horizontalContainerStyle}>
        <div style={postStyle1}>
          <h2>{post1.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post1.content.rendered }} />
        </div>
        <img src="/images/görsel.jpg" alt="görsel" style={imageStyle} />
      </div>

      <h2 style={{ color: 'green', height:'20px' }}>Ürünler</h2>

      <div style={postStyle2}>
        <div style={horizontalContainerStyle}>
          <div>
            <h2>{post2.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post2.content.rendered }} />
          </div>
          <img src="/images/görsel2.png" alt="görsel2" style={imageStyle2} />
        </div>
      </div>

      <div style={postStyle3}>
        <div style={horizontalContainerStyle}>
          <div>
            <h2>{post3.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post3.content.rendered }} />
          </div>
          <img src="/images/görsel3.png" alt="görsel3" style={imageStyle3} />
        </div>
      </div>

      <div style={postStyle4}>
        <div style={horizontalContainerStyle}>
          <div>
            <h2>{post4.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post4.content.rendered }} />
          </div>
          <img src="/images/görsel4.png" alt="görsel4" style={imageStyle4} />
        </div>
      </div>
      
      <BrandLogos />
      

      <div>
        <div>
          <div>
          </div>
          <img src=" /images/logob.jpg" alt = "logob" style ={imageStyle5}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export async function getServerSideProps(context) {
  
    const response1 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/5');
    const post1 = response1.data;

    
    const response2 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/20');
    const post2 = response2.data;

    const response3 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/32');
    const post3 = response3.data;

    const response4 = await axios.get('http://localhost:8000/wp-json/wp/v2/posts/41');
    const post4 = response4.data;

    return { props: { post1, post2, post3, post4,} };
  }
  


export default Home;
