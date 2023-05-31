import { FunctionComponent } from "react";

type TimeTableType = {
  onClose?: () => void;
};

const TimeTable: FunctionComponent<TimeTableType> = ({ onClose }) => {
  return (
    <div className="relative w-[372px] h-[618px] overflow-hidden max-w-full max-h-full text-left text-base text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-white w-[372px] h-[618px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[340px] h-[1002px]">
          <div className="absolute top-[0px] left-[0px] w-[338px] h-[465px]">
            <div className="absolute top-[71px] left-[3px] bg-gainsboro-100 w-[335px] h-[33px]" />
            <div className="absolute top-[75px] left-[108px] text-5xl">
              星期一至六
            </div>
            <div className="absolute top-[111px] left-[32px]">時間</div>
            <div className="absolute top-[111px] left-[208px]">班次(分鐘)</div>
            <img
              className="absolute top-[129px] left-[3px] w-[303px] h-0.5"
              alt=""
              src="/line-1.svg"
            />
            <div className="absolute top-[157px] left-[25px]">06:45</div>
            <div className="absolute top-[238px] left-[26px]">24:25</div>
            <img
              className="absolute top-[189px] left-[36px] w-6 h-[35px] object-cover"
              alt=""
              src="/image-6@2x.png"
            />
            <div className="absolute top-[172px] left-[197px] text-17xl">
              5 - 12
            </div>
            <div className="absolute top-[279px] left-[3px] bg-gainsboro-100 w-[335px] h-[33px]" />
            <div className="absolute top-[283px] left-[75px] text-5xl">
              星期日及公眾假期
            </div>
            <div className="absolute top-[319px] left-[32px]">時間</div>
            <div className="absolute top-[319px] left-[208px]">班次(分鐘)</div>
            <img
              className="absolute top-[337px] left-[3px] w-[303px] h-0.5"
              alt=""
              src="/line-1.svg"
            />
            <div className="absolute top-[365px] left-[25px]">07:00</div>
            <div className="absolute top-[446px] left-[26px]">24:00</div>
            <img
              className="absolute top-[398px] left-[32px] w-6 h-[37px] object-cover"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="absolute top-[380px] left-[197px] text-17xl">
              5 - 12
            </div>
            <div className="absolute top-[0px] left-[0px] text-5xl">
              <p className="m-0">由山頂開出</p>
              <p className="m-0">經文輝道、馬己仙峽道、中環站</p>
            </div>
          </div>
          <div className="absolute top-[477px] left-[2px] w-[338px] h-[525px]">
            <div className="absolute top-[131px] left-[3px] bg-gainsboro-100 w-[335px] h-[33px]" />
            <div className="absolute top-[135px] left-[108px] text-5xl">
              星期一至六
            </div>
            <div className="absolute top-[171px] left-[32px]">時間</div>
            <div className="absolute top-[171px] left-[208px]">班次(分鐘)</div>
            <img
              className="absolute top-[667px] left-[5px] w-[303px] h-0"
              alt=""
              src="/line-1.svg"
            />
            <div className="absolute top-[217px] left-[25px]">06:30</div>
            <div className="absolute top-[298px] left-[26px]">24:00</div>
            <img
              className="absolute top-[727px] left-[50px] w-[33px] h-0"
              alt=""
              src="/arrow-15.svg"
            />
            <div className="absolute top-[232px] left-[197px] text-17xl">
              5 - 12
            </div>
            <div className="absolute top-[339px] left-[3px] bg-gainsboro-100 w-[335px] h-[33px]" />
            <div className="absolute top-[343px] left-[75px] text-5xl">
              星期日及公眾假期
            </div>
            <div className="absolute top-[379px] left-[32px]">時間</div>
            <div className="absolute top-[379px] left-[208px]">班次(分鐘)</div>
            <img
              className="absolute top-[875px] left-[5px] w-[303px] h-0"
              alt=""
              src="/line-1.svg"
            />
            <div className="absolute top-[425px] left-[25px]">07:25</div>
            <div className="absolute top-[506px] left-[26px]">24:45</div>
            <img
              className="absolute top-[939px] left-[35px] w-6 h-[37px] object-cover"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="absolute top-[440px] left-[197px] text-17xl">
              5 - 12
            </div>
            <div className="absolute top-[0px] left-[0px] text-5xl inline-block w-[333px]">
              <p className="m-0">由香港站開出</p>
              <p className="m-0">
                經馬己仙峽道、文輝道(部分時段)、山頂道、明德醫院(部分時段)
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[37px] left-[350px] rounded-xl bg-gainsboro-200 w-3 h-[544px]" />
        <div className="absolute top-[39px] left-[350px] rounded-xl bg-gainsboro-100 w-3 h-[97px]" />
      </div>
      <img
        className="absolute top-[7px] left-[338px] w-[30px] h-[30px] overflow-hidden"
        alt=""
        src="/close-logo.svg"
      />
    </div>
  );
};

export default TimeTable;
