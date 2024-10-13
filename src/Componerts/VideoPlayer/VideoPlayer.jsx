// Import the useRef hook from React
import  { useRef } from 'react';
// Import PropTypes for type checking
import PropTypes from 'prop-types';
// Import the CSS file for styling
import './VidePlayer.css';
// Import the video file
import video from '../../assets/Campus-video.mp4';

// Define the VideoPlayer component
const VideoPlayer = ({ playState, setPlayState }) => {
  // Create a reference to the video player
  const player = useRef(null);

  // Function to close the video player
  const closePlayer = (e) => {
    // If the click event target is the video player, set the play state to false
    if (e.target === player.current) {
      setPlayState(false);
    }
  };


  // Return the video player component
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} onClick={closePlayer} ref={player}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};



// Define the propTypes for the VideoPlayer component
VideoPlayer.propTypes = {
  // The play state of the video player
  playState: PropTypes.bool.isRequired,
  // The function to set the play state
  setPlayState: PropTypes.func.isRequired,
};
// Export the VideoPlayer component
export default VideoPlayer;