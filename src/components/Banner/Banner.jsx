import banner from '../../assets/img/banner.png';

const Banner = () => {
    return (
        <div className="hero mt-10 h-[550px] w-[1315px] mx-[100px] rounded-[30px]" style={{ backgroundImage: 'url(https://i.ibb.co/89VVN7N/banner.png)' }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-10 text-5xl font-bold w-[897px] -ml-[220px] text-white">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-10 w-[900px] -ml-[220px]">Chef's Table brings you exciting 20 different cuisines under one roof to satisfy all your cravings. Try something new everyday from our diverse cuisines and get a fresh start everyday!</p>
                    <div className='space-x-10'>
                    <button className="bg-[#0BE58A] py-3 px-6 rounded-full text-black font-bold hover:bg-gray-300">Explore Now</button>
                    <button className="py-3 px-6 rounded-full border-white border-2 font-bold hover:bg-gray-400">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;