import { FunctionComponent } from "react";

type BusInfoType = {
  onClose?: () => void;
};

const BusInfo: FunctionComponent<BusInfoType> = ({ onClose }) => {
  return (
    <div className="relative bg-white w-[372px] h-[519px] overflow-hidden max-w-full max-h-full text-left text-base text-black font-inter">
      <div className="absolute top-[15px] left-[37px] w-[321px] h-[473px]">
        <div className="absolute top-[0px] left-[0px] w-[321px] h-[271px]">
          <div className="absolute top-[0px] left-[0px] text-5xl">
            收費備註欄
          </div>
          <div className="absolute top-[40px] left-[0px] text-xl">
            港鐵轉乘優惠
          </div>
          <div className="absolute top-[75px] left-[0px] text-xl inline-block w-[321px]">
            乘客於90分鐘內，以同一張八達通連續乘搭本線及港鐵／港鐵及本線，第二程將享有車費優惠。
          </div>
          <div className="absolute top-[158px] left-[0px]">行程</div>
          <div className="absolute top-[158px] left-[111px] inline-block w-[68px]">
            成人八達通節省
          </div>
          <div className="absolute top-[158px] left-[210px] inline-block w-[90px]">
            其他八達通節省
          </div>
          <img
            className="absolute top-[202.5px] left-[0px] w-[290px] h-px"
            alt=""
            src="/line-3-stroke.svg"
          />
          <div className="absolute top-[214px] left-[0px] inline-block w-28">
            本線 ◄► 任何港鐵站(輕鐵及機場快綫除外)
          </div>
          <div className="absolute top-[229px] left-[128px]">$0.3</div>
          <div className="absolute top-[229px] left-[238px]">$0.3</div>
        </div>
        <div className="absolute top-[281.5px] left-[0px] w-[314px] h-[191.5px] text-5xl">
          <div className="absolute top-[12.5px] left-[0px]">附加資訊</div>
          <img
            className="absolute top-[0px] left-[0px] w-[314px] h-px"
            alt=""
            src="/line-4-stroke.svg"
          />
          <div className="absolute top-[52.5px] left-[0px]">營辦商資料</div>
          <div className="absolute top-[104.5px] left-[3px] whitespace-pre-wrap inline-block w-[295px]">
            <p className="m-0">營辦商 景益有限公司</p>
            <p className="m-0">查詢電話 2522 2770</p>
            <p className="m-0">圖文傳真 2523 8233</p>
          </div>
          <div className="absolute top-[97px] left-[102.5px] box-border w-px h-[95px] border-r-[1px] border-solid border-black" />
        </div>
      </div>
      <img
        className="absolute top-[15px] left-[312px] w-[30px] h-[30px] overflow-hidden"
        alt=""
        src="/close-logo.svg"
      />
    </div>
  );
};

export default BusInfo;
