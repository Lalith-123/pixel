import { useNavigate } from "react-router-dom";

function HeaderButtons() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/pixel/contactUs/");
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleContactClick}
        className="px-4 py-2 text-[#cab06f] border-2 border-[#cab06f] rounded-lg hover:bg-[#cab06f] hover:text-white transition-colors"
      >
        Contact us
      </button>
    </div>
  );
}

export default HeaderButtons;
