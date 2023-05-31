import { FunctionComponent, useState, useCallback } from "react";
import RouteAndFees from "../components/RouteAndFees";
import PortalPopup from "../components/PortalPopup";
import TimeTable from "../components/TimeTable";
import Component from "../components/Component";
import { useNavigate } from "react-router-dom";

const Desktop4: FunctionComponent = () => {
  const [isRouteAndFeesOpen, setRouteAndFeesOpen] = useState(false);
  const [isTimeTableOpen, setTimeTableOpen] = useState(false);
  const navigate = useNavigate();

  const openRouteAndFees = useCallback(() => {
    setRouteAndFeesOpen(true);
  }, []);

  const closeRouteAndFees = useCallback(() => {
    setRouteAndFeesOpen(false);
  }, []);

  const openTimeTable = useCallback(() => {
    setTimeTableOpen(true);
  }, []);

  const closeTimeTable = useCallback(() => {
    setTimeTableOpen(false);
  }, []);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-5xl text-white font-inter">
        <div className="absolute top-[156px] left-[30px] w-[379px] h-[825px]">
          <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[379px] h-[825px]" />
          <div className="absolute top-[109px] left-[187px] text-black">
            山頂
          </div>
          <img
            className="absolute h-[1.78%] w-[7.39%] top-[11.39%] right-[40.63%] bottom-[86.83%] left-[51.98%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group.svg"
          />
          <div className="absolute h-[6.91%] w-[14.25%] top-[8.61%] right-[80.21%] bottom-[84.48%] left-[5.54%] bg-royalblue-100" />
          <div className="absolute top-[80px] left-[40px] text-13xl">1</div>
          <div className="absolute top-[12px] left-[11px] text-13xl text-black text-center">
            小巴路線
          </div>
          <div className="absolute top-[65px] left-[175px] text-black">
            香港站
          </div>
          <div className="absolute top-[152px] left-[3px] bg-blueviolet w-[376px] h-[43px]" />
          <div
            className="absolute top-[159px] left-[137px] cursor-pointer"
            onClick={openRouteAndFees}
          >
            路線及收費
          </div>
          <Component />
          <div
            className="absolute top-[159px] left-[285px] cursor-pointer"
            onClick={openTimeTable}
          >
            時間表
          </div>
        </div>
        <img
          className="absolute top-[156px] left-[410px] w-[1008px] h-[825px]"
          alt=""
          src="/group-46.svg"
        />
        <img
          className="absolute h-[14.45%] w-[61.94%] top-[0%] right-[37.43%] bottom-[85.55%] left-[0.63%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
          alt=""
          src="/logo@2x.png"
          onClick={onLogoImageClick}
        />
      </div>
      {isRouteAndFeesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRouteAndFees}
        >
          <RouteAndFees onClose={closeRouteAndFees} />
        </PortalPopup>
      )}
      {isTimeTableOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTimeTable}
        >
          <TimeTable onClose={closeTimeTable} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop4;
