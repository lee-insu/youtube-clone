import React from 'react';

const VideoItem = (props) => (
            <>
            <div>{props.video.snippet.title}</div>
            <div>{props.video.snippet.channelTitle}</div>
            </>
    );

export default VideoItem;