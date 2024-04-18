
import videoHomePage from '../../assets/video-homepage.mp4';

const HomePage = (props) => {
    return (
        <div className="homepage-container">

            <video autoPlay muted loop>
                <source
                    src={videoHomePage}
                    type='video/mp4'
                />
            </video>

            <div className='homepage-content'>
                <div className='title-1'>
                    There is a best my way
                </div>
                <div className='title-2'>
                    There is a best my way There is a best my way There is a best my way
                    There is a best my way There is a best my way There is a best my way
                    There is a best my way There is a best my way There is a best my way
                </div>
                <div className='title-3'>
                    <button>There is a best my way</button>
                </div>
            </div>



        </div>
    )
}

export default HomePage;


