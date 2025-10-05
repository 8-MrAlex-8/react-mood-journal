import ReactLogo from "../assets/react.svg";
import ViteLogo from "../assets/vite.svg";

const TopNav = () => {
  return (
    <nav className="w-screen bg-black h-[10vh] flex justify-center items-center gap-8">
      <img src={ViteLogo} alt="Vite Logo" style={{ height: "50%" }} />
      <p className="text-white">
        Made by Lanz Alexander Malto. Made with Vite/React.
      </p>
      <img src={ReactLogo} alt="React Logo" style={{ height: "50%" }} />
    </nav>
  );
};

export default TopNav;
