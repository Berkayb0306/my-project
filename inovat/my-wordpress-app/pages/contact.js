import React, { useState } from 'react';
import Header from './Header';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>   
    <Header />

    <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }}>
    <div style={{
        
    position: 'absolute',
    top: '80px',
    borderRadius: '0 0 130px 130px',
    overflow: 'hidden'
  }}>
    <img src="/images/conbaslık.jpg" alt="baslık" style={{
        
    width:'2000px',
    height:'400px',
    marginBottom:'-100px',
    }}/>
    <div style={{
    position: 'absolute',
    top: '74%',
    left: '28%',
    transform: 'translate(-50%, -50%)',  
    fontSize: '25px',  
    fontWeight: 'bold',
    textAlign:'center',
    color:'white',
    width: '50%',    
    height: '3%'
  }}>
    <h2>İletişim</h2>
    </div>
    </div>
    </div>
    <h2 style={{ color: 'green', height:'20px',position:'absolute',top:'390px',right:'1430px', }}>- İletişim</h2>
    <h1 style={{ color: 'green', height:'20px',position:'absolute',top:'430px',right:'800px', }}>INOVAT ENERJİ DEPOLAMA SİSTEMLERİ A.Ş.</h1>
    <div>
    <div>
    <div>
    <img src=" /images/contact.jpg" alt = "logob" style ={{
    display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'row',
    position:'absolute',
    right:'1100px',
    top:'-5px',
    color: 'green',
    fontWeight:'bold',
    fontSize: '18px',
    width: '420px',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '50px',
    marginBottom: '20px',
    marginTop:'500px',
  }}/>
  </div>
  </div>
  
  </div>
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      style={{
        display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',
        marginRight:'600px',
        marginTop:'450px',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <label htmlFor="name">Adınız:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        required
      />

      <label htmlFor="email">E-posta Adresiniz:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        required
      />

      <label htmlFor="subject">Konu:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        required
      />

      <label htmlFor="message">Mesajınız:</label><br />
      <textarea
        id="message"
        name="message"
        rows="4"
        cols="50"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        required
      ></textarea><br />

      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Gönder
      </button>
    </form>
    
    </div>

  );
};

export default ContactForm;
