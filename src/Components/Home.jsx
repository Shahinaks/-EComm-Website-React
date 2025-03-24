import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Background Video */}
            <video autoPlay loop muted className="bg-video">
                <source 
                    src="https://v.ftcdn.net/10/13/87/79/700_F_1013877952_PDYyVA1Xp8Z79ksYkXAzOsfcUH7a0Hnm_ST.mp4" 
                    type="video/mp4" 
                />
            </video>

            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">ShopEase</div>
                <button type="button" className="login-btn" onClick={() => navigate('/login')}>
                    Login
                </button>
            </nav>

            {/* Main Content */}
            <div className="home-content">
                <h1 className="title">Revolutionize Your Shopping Experience</h1>
                <p className="subtitle">Shop the latest trends with ease.</p>
                <div className="button-group">
                    <button className="shop-btn" onClick={() => navigate('/login')}>
                        Start Shopping
                    </button>
                    {/* <button className="discover-btn">
                        Discover More
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
