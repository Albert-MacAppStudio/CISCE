import React, { useEffect } from "react";
import { useNavGuideData } from "../../../Context/Navigation/NavGuideProvider";
import { useLocation } from "react-router-dom";
import "./NavGuideOverLay.css";
const NavguideOverLay = (props) => {
  const { renderNavItems, onClose } = props;
  const { guideData, setGuideData } = useNavGuideData();

  const location = useLocation();
  useEffect(() => {
    setGuideData("");
    onClose();
  }, [location.pathname, setGuideData]);

  if (!guideData) return null;
  return (
    <div
      id={"navigation-overlay"}
      onClick={(e) => {
        e.stopPropagation();
        setGuideData("");
      }}
    >
      <div
        className="navigation-overlay-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>{guideData?.title}</h1>
        <ul>
          {guideData?.body?.map((item, i) =>
            renderNavItems(
              item,
              i,
              guideData?.path +
                "/" +
                guideData?.title
                  .replaceAll(" ", "-")
                  .replaceAll("(", "")
                  .replaceAll(")", "")
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavguideOverLay;
