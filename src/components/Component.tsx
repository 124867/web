import { FunctionComponent, useState, useCallback } from "react";
import BusInfo from "./BusInfo";
import PortalPopup from "./PortalPopup";

const Component: FunctionComponent = () => {
  const [isBusInfoOpen, setBusInfoOpen] = useState(false);

  const openBusInfo = useCallback(() => {
    setBusInfoOpen(true);
  }, []);

  const closeBusInfo = useCallback(() => {
    setBusInfoOpen(false);
  }, []);

  return (
    <>
      <div
        className="absolute top-[159px] left-[13px] cursor-pointer"
        onClick={openBusInfo}
      >
        乘客資料
      </div>
      {isBusInfoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBusInfo}
        >
          <BusInfo onClose={closeBusInfo} />
        </PortalPopup>
      )}
    </>
  );
};

export default Component;
