import './style.css'
import React, {useEffect} from 'react'


const Header = () => {
  return (
    <div className="header"> 
      <p> Favorites | Music | Channels </p>
    </div>
  )

}
const LinkCard = ({url, name}) => {
  return (
      <div className="link-card" onClick={() => console.log("moro")} >
        <iframe 
            src={`https://www.youtube.com/embed/${url}`}
            title={name}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
        >
        </iframe>      
        <h3>{name} </h3>
      </div>
  )

}
const YouTuber = () => {
  useEffect(() => {
    document.title = 'YouTuber';
  }, []);

  let videos = [
    {
      url:"3BD8sNv2jeM",
      name:"Meditation 1"
    },
    {
      url:"EIl18hfAOJk",
      name:"Meditation 2"
    },
    {
      url:"Hga11Ab1lUE" ,
      name:"小久保 隆 Takashi Kokubo - Healing Music - Water (Full Album)"
    },
    {
      url:"Mo1GrvK1f0s",
      name:"Tool - 10,000 days"
    },

  ]
  return (
    <div className="YouTuber" >
      <h1> YouTuber </h1>
      <div className="content"> 
          <Header />
        <div className="videos"> 
          {videos.map(video => 
            <LinkCard key={video.url} url={video.url} name={video.name} />
          )}
        </div>
      </div>
    </div>
  )

}; export default YouTuber;
