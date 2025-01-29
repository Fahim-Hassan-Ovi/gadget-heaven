import BannerImg from "../assets/banner.jpg"
const Banner = () => {
    return (
      
            <div className="h-[870px]">
                <div className="md:px-[210px] pt-8 justify-center items-center text-center bg-[#9538E2] h-[630px] rounded-b-2xl">
                <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with<br />Gadget Heaven Accessories</h1>
                <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="btn btn-primary rounded-full bg-white mb-6 text-[#9538E2]">Shop Now</button>
                <img className="rounded-2xl"  src={BannerImg} alt="" />
            </div>
            </div>
        
    );
};

export default Banner;