import { NextArrow } from "../../../Assets/Icon/Icons";
import { useNavGuideData } from "../../../Context/Navigation/NavGuideProvider";
import "./NavGuide.css";
const NavGuide = (props) => {
  const { title, body, currentKey } = props;
  const { guideData, setGuideData } = useNavGuideData();
  const handleOnClick = (e) => {
    e.stopPropagation();
    setGuideData({ title: title, body: body, path: currentKey });
  };

  return (
    <li
      className={`nav-guide nav-link-row ${
        guideData?.title === title ? "nav-guide-active" : ""
      }`}
      onClick={(e) => {
        handleOnClick(e);
      }}
    >
      <span className="link-text">{title}</span>

      <span>
        {" "}
        <NextArrow />{" "}
      </span>
    </li>
  );
};

export default NavGuide;
