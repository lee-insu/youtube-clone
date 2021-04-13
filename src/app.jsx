import React, { useEffect, useState } from 'react';
import VideoList from './components/list/videolist.jsx';


function App() {
  const [videos,setVideos] = useState([]);

  useEffect(()=> {
   
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDk6TNslFKl8kjlk0EUNp217txMHKnvjfI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  })
  return <VideoList videos = {videos}/>;

}

export default App;