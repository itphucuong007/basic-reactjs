
import videoHomePage from '../../assets/video-homepage.mp4';

import { useSelector } from 'react-redux';

const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);
    console.log('isAuthenticated: ', isAuthenticated, "account: ", account);

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


