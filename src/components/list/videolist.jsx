import React from 'react';
import VideoItem from '../items/videoitem.jsx';


const VideoList = props => (
            <ul>
                {props.videos.map(video => (
                <VideoItem key={video.id} video={video} />
                ))}
            </ul>
    );

export default VideoList;