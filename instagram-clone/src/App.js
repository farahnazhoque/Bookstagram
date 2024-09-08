import './App.css';
import Post from './Post';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
  { 
    username: "farahandherbooks",
    caption: "relatable",
    imageURL: "https://i.pinimg.com/736x/84/b7/52/84b7526bc6a6ef89f01b2cb9733d18f6.jpg"
  },

  {
    username: "happy",
    caption: "i am happy",
    imageURL: "https://i.pinimg.com/564x/40/f7/ec/40f7ec0e7e7105edf763bd182ddf209b.jpg"
  },
  {
    username: "academicweapon",
    caption: "bye",
    imageURL: "https://i.pinimg.com/564x/0c/b0/de/0cb0de162ba050be813c6f83dd176f03.jpg"
  }
  ]);
  return (
    <><div className="app_header">
      <img
        className="app_headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="" />
    </div>
    
    {posts.map(post => (
      <Post username={post.username} caption={post.caption} imageURL={post.imageURL}/>
    ))
    }
    </>

  );
}

export default App;
