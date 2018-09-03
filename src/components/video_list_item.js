import React from 'react';

const VideoListItem = ({video,onVideoSelect}) => {
  // const video = props.video;instead the above {video}
// const onVideoSelect =props.onVideoSelect;instead the above {onVideoSelect}
  const imageUrl = video.snippet.thumbnails.default.url;
  const topic = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)}  className="list-group-item">
      <div className="video-list media">
       <div className="media-left">
          <img className="media-object" src={imageUrl} />
       </div>

       <div className="media-body">
        <div className="media-heading">{topic}</div>
       </div>
      </div>
    </li>
  );
};

export default VideoListItem;
