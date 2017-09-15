import React from 'react'

//instead of (props) you can reference property directly so {video}
const VideoListItem = ({video, onVideoSelect}) => {
    //video is passed in as a prop on <VideoListItem /> in video_list
    //const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;