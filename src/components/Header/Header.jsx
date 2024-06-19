import profilePic from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className="flex justify-between items-center mx-auto">
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img src={profilePic} alt="" />
        </div>
    );
};

export default Header;