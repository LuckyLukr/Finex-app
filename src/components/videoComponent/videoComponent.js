import './videoStyles.css';

function Video( {onVideo} ) {

    return (
        <div className='videoContainer' onClick={()=> onVideo()}>
            <iframe title="YTPlayer" src="https://www.youtube.com/embed/sW9npZVpiMI?autoplay=1&mute=0" className='video' />
        </div>
    )
}

export default Video;