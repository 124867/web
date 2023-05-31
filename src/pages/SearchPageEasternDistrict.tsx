import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SearchPageEasternDistrict: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1383px] overflow-hidden text-left text-5xl text-gray-200 font-inter">
      <div className="absolute top-[0px] left-[1px] w-[1430px] h-[239px]">
        <img
          className="absolute h-[58.58%] w-[58.74%] top-[0%] right-[41.26%] bottom-[41.42%] left-[0%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
          alt=""
          src="/logo1@2x.png"
          onClick={onLogoImageClick}
        />
        <div className="absolute h-[24.27%] w-[37.76%] top-[75.73%] right-[55.03%] bottom-[0%] left-[7.2%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-indianred" />
          <div className="absolute top-[25.86%] left-[31.67%]">
            專線小巴路線指南
          </div>
        </div>
        <div className="absolute h-[24.27%] w-[37.76%] top-[75.73%] right-[5.45%] bottom-[0%] left-[56.78%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-indianred" />
          <div className="absolute top-[25.86%] left-[31.67%]">
            公共小巴路線指南
          </div>
        </div>
        <div className="absolute h-[51.91%] w-[34.55%] top-[7.11%] right-[0%] bottom-[40.98%] left-[65.45%] text-45xl text-black">
          <div className="absolute h-[47.56%] w-[8.5%] top-[28.21%] right-[91.5%] bottom-[24.23%] left-[0%] flex flex-col p-2.5 box-border items-start justify-start text-13xl text-gray-400">
            <div className="relative">{`A `}</div>
          </div>
          <img
            className="absolute h-full w-[0.2%] top-[0%] right-[69.09%] bottom-[0%] left-[30.71%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector-3@2x.png"
          />
          <div
            className="absolute h-[78.18%] w-[17%] top-[3.05%] right-[51.39%] bottom-[18.77%] left-[31.61%] flex flex-col p-2.5 box-border items-start justify-start cursor-pointer"
            onClick={onFrameContainer1Click}
          >
            <div className="relative">繁</div>
          </div>
          <div className="absolute h-[78.18%] w-[17%] top-[4.03%] right-[32.79%] bottom-[17.79%] left-[50.2%] flex flex-col p-2.5 box-border items-center justify-start">
            <div className="relative">簡</div>
          </div>
          <div className="absolute h-[78.18%] w-[31.17%] top-[4.03%] right-[0%] bottom-[17.79%] left-[68.83%] flex flex-row p-2.5 box-border items-start justify-end">
            <div className="relative">ENG</div>
          </div>
          <div className="absolute top-[26.6%] left-[10.12%] text-29xl text-gray-500">{`A `}</div>
          <div className="absolute top-[13.7%] left-[18.42%] text-gray-500 text-center">
            <span>A</span>
            <span className="text-13xl">{` `}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[1199px] left-[-28px] w-[1468px] h-[184px] text-17xl text-black">
        <div className="absolute h-[47.62%] w-full top-[0%] right-[0%] bottom-[52.38%] left-[0%] bg-paleturquoise" />
        <a
          className="absolute h-1/5 w-[35.93%] top-[20.11%] left-[8.45%] [text-decoration:underline] text-[inherit] inline-block"
          href="mailto:admin@16seats.net"
          target="_blank"
        >
          admin@16seats.net
        </a>
        <div className="absolute h-[48.57%] w-full top-[51.43%] right-[0%] bottom-[0%] left-[0%] bg-royalblue-200" />
        <div className="absolute h-[9.24%] w-[8.45%] top-[4.89%] left-[2.25%] text-xl inline-block">
          聯絡我們
        </div>
        <img
          className="absolute h-[21.9%] w-[4.39%] top-[20%] right-[93.17%] bottom-[58.1%] left-[2.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-icon-envelope-closed1.svg"
        />
        <div className="absolute h-[30.48%] w-[54.15%] top-[60.33%] left-[22.96%] text-white inline-block">
          © www.16seats.net 2009-2023 著作權所有
        </div>
      </div>
      <img
        className="absolute top-[271px] left-[1px] w-[1439px] h-[411px] object-cover"
        alt=""
        src="/r-1@2x.png"
      />
      <div className="absolute top-[494px] left-[125px] w-[1201px] h-[92px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-25.svg"
        />
        <div className="absolute h-[54.35%] w-[3.78%] top-[22.83%] right-[94.56%] bottom-[22.83%] left-[1.67%] overflow-hidden flex flex-row items-start justify-start">
          <img
            className="relative w-[45px] h-[50px]"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="absolute top-[289px] left-[578px] text-109xl text-white">
        東區
      </div>
    </div>
  );
};

export default SearchPageEasternDistrict;
