import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MainIndexSimplified: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[3721px] overflow-hidden text-left text-base text-black font-inter">
      <div className="absolute top-[282px] left-[0px] w-[1468px] h-[3209px] text-13xl">
        <div className="absolute top-[1579px] left-[36px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1395.28px] h-[1630px]">
          <div className="absolute top-[0px] left-[0px] w-[1395.28px] h-[1630px]">
            <div className="absolute top-[158px] left-[0.28px] w-[634px] h-[714px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[633px] h-[572px] object-cover"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="absolute top-[581px] left-[1px] rounded-xl bg-gainsboro-100 w-[633px] h-[133px]" />
              <div className="absolute top-[589px] left-[1px] rounded-xl flex flex-row p-2.5 items-start justify-start">
                <div className="relative">太平山顶</div>
              </div>
              <div className="absolute top-[648px] left-[11px] text-xl">
                以下小巴路线带你直达
              </div>
              <div
                className="absolute top-[678px] left-[11px] w-14 h-9 cursor-pointer text-base text-white"
                onClick={onGroupContainerClick}
              >
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[24px]">1</div>
              </div>
            </div>
            <div className="absolute top-[158px] left-[761.28px] w-[633px] h-[714px] text-base">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[633px] h-[572px] object-cover"
                alt=""
                src="/featstanley1-1@2x.png"
              />
              <div className="absolute top-[581px] left-[0px] rounded-xl bg-gainsboro-100 w-[633px] h-[133px]" />
              <div className="absolute top-[589px] left-[0px] rounded-xl flex flex-row p-2.5 items-start justify-start text-13xl">
                <div className="relative">赤柱</div>
              </div>
              <div className="absolute top-[648px] left-[10px] text-xl">
                以下小巴路线带你直达
              </div>
              <div className="absolute top-[678px] left-[10px] w-14 h-9 text-white">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[13px]">16A</div>
              </div>
              <div className="absolute top-[678px] left-[82px] w-[347px] h-9 text-white">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[12px]">16M</div>
                <div className="absolute top-[0px] left-[72px] w-[275px] h-9">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[14px]">16X</div>
                  <div className="absolute top-[0px] left-[70px] w-[205px] h-9">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                    <div className="absolute top-[8px] left-[17px]">40</div>
                    <div className="absolute top-[0px] left-[75px] w-[130px] h-9">
                      <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                      <div className="absolute top-[8px] left-[12px]">40X</div>
                      <div className="absolute top-[0px] left-[74px] w-14 h-9">
                        <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                        <div className="absolute top-[8px] left-[18px]">52</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[916px] left-[2.28px] w-[633px] h-[714px] text-base text-white">
              <div className="absolute top-[581px] left-[0px] rounded-xl bg-gainsboro-100 w-[633px] h-[133px]" />
              <div className="absolute top-[678px] left-[232px] w-[311px] h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[8px]">101M</div>
                <div className="absolute top-[0px] left-[74px] w-28 h-9">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-xl w-28 h-9"
                    alt=""
                    src="/rectangle-201.svg"
                  />
                  <div className="absolute top-[8px] left-[16px]">
                    西貢—觀塘
                  </div>
                </div>
                <div className="absolute top-[0px] left-[199px] w-28 h-9">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-xl w-28 h-9"
                    alt=""
                    src="/rectangle-201.svg"
                  />
                  <div className="absolute top-[8px] left-[16px]">
                    西貢—旺角
                  </div>
                </div>
              </div>
              <div className="absolute top-[678px] left-[158px] w-14 h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[19px]">12</div>
              </div>
              <div className="absolute top-[678px] left-[84px] w-14 h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[18px]">1A</div>
              </div>
              <div className="absolute top-[589px] left-[0px] rounded-xl flex flex-row p-2.5 items-start justify-start text-13xl text-black">
                <div className="relative">西贡</div>
              </div>
              <div className="absolute top-[648px] left-[10px] text-xl text-black">
                以下小巴路线带你直达
              </div>
              <div className="absolute top-[678px] left-[10px] w-14 h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[24px]">1</div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[633px] h-[572px] object-cover"
                alt=""
                src="/featsaikung1-1@2x.png"
              />
            </div>
            <div className="absolute top-[916px] left-[761.28px] w-[634px] h-[714px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl w-[633px] h-[572px]" />
              <div className="absolute top-[581px] left-[1px] rounded-xl bg-gainsboro-100 w-[633px] h-[133px]" />
              <div className="absolute top-[589px] left-[1px] rounded-xl flex flex-row p-2.5 items-start justify-start">
                <div className="relative inline-block w-[213px] h-[39px] shrink-0">
                  <p className="m-0">启德邮轮码头</p>
                </div>
              </div>
              <div className="absolute top-[648px] left-[11px] text-xl">
                以下小巴路线带你直达
              </div>
              <div className="absolute top-[678px] left-[11px] w-14 h-9 text-base text-white">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[18px]">86</div>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[633px] h-[572px] object-cover"
                alt=""
                src="/featktct1-1@2x.png"
              />
            </div>
            <div className="absolute top-[0px] left-[0px] w-[1394.6px] h-[151.95px] text-45xl">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-silver-100 w-[1394.6px] h-[130.95px]" />
              <div className="absolute top-[21px] left-[543.28px] inline-block w-[380.13px] h-[130.95px]">
                <p className="m-0">热门目的地</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1468px] h-[751.79px] text-17xl text-white">
          <img
            className="absolute top-[0px] left-[0px] w-[1468px] h-[751.79px] object-cover"
            alt=""
            src="/rectangle-82@2x.png"
          />
          <div className="absolute top-[35.12px] left-[101.94px] w-[469.38px] h-[682.12px] text-13xl text-gray-300">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-gray-100 w-[469.38px] h-[682.12px]" />
            <div className="absolute top-[10.3px] left-[40.78px] rounded-xl bg-gainsboro-100 w-[387.39px] h-[81.43px] opacity-[0.5]" />
            <div className="absolute top-[207.11px] left-[12.19px] rounded-xl bg-white w-[441.95px] h-[69.79px]" />
            <div className="absolute top-[296.88px] left-[19.37px] inline-block w-[113.16px] h-[43.85px]">
              目的地
            </div>
            <div className="absolute top-[542.88px] left-[160.06px] rounded-xl bg-white w-[149px] h-[60px] flex flex-row p-2.5 box-border items-start justify-start text-center">
              <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                查看路线
              </div>
            </div>
            <div className="absolute top-[373.7px] left-[64.01px] w-[338.32px] h-[72.04px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-white w-[120.39px] h-[72.04px]" />
              <img
                className="absolute top-[0px] left-[135.63px] rounded-xl w-[67.05px] h-[67.54px] object-cover"
                alt=""
                src="/image-2@2x.png"
              />
              <div className="absolute top-[0px] left-[217.93px] rounded-xl bg-white w-[120.39px] h-[72.04px]" />
            </div>
            <div className="absolute top-[115.22px] left-[9.17px] rounded-xl flex flex-row p-2.5 items-start justify-start">
              <div className="relative">选择路线</div>
            </div>
            <div className="absolute top-[19.69px] left-[178.4px] inline-block w-[130.49px] h-[61.07px] [-webkit-text-stroke:1px_#151414]">
              路线搜寻
            </div>
          </div>
          <img
            className="absolute top-[584.18px] left-[1295.57px] rounded-xl w-[135.15px] h-[142.96px]"
            alt=""
            src="/rectangle-15.svg"
          />
          <div className="absolute top-[624px] left-[1341px] flex flex-col p-2.5 items-start justify-start">
            <div className="relative">{`>`}</div>
          </div>
          <div className="absolute top-[584.12px] left-[1104.06px] rounded-xl bg-lightcoral-200 w-[135.15px] h-[142.96px]" />
          <div className="absolute top-[624px] left-[1150px] flex flex-col p-2.5 items-start justify-start">
            <div className="relative">{`<`}</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1075px] left-[0px] bg-white w-[734px] h-[695px] overflow-hidden text-white">
        <div className="absolute top-[145px] left-[690px] rounded-xl bg-gainsboro-200 w-3 h-[544px]" />
        <div className="absolute top-[147px] left-[690px] rounded-xl bg-gainsboro-100 w-3 h-[97px]" />
        <div className="absolute top-[115px] left-[12px] w-[665px] h-[1225px]">
          <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
            <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                alt=""
                src="/rectangle-182.svg"
              />
              <div className="absolute top-[59px] left-[249.21px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[68px] left-[259.95px] inline-block w-[38.67px]">
                110A
              </div>
              <div className="absolute top-[59px] left-[341.59px] w-[60.15px] h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[17.19px] inline-block w-[24.71px]">
                  111
                </div>
              </div>
            </div>
            <div className="absolute top-[65px] left-[29px] text-xl text-black inline-block w-[128.9px]">
              受影响路线：
            </div>
            <div className="absolute top-[10px] left-[29px] text-13xl text-black inline-block w-[610px]">
              九龙湾特别交通安排配合道路工程
            </div>
            <div className="absolute top-[59px] left-[161.13px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
            <div className="absolute top-[59px] left-[161.13px] w-[60.15px] h-9">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[8px] left-[15.87px] inline-block w-[42px]">
                110
              </div>
            </div>
            <div className="absolute top-[105px] left-[29px] text-black inline-block w-[205.17px]">
              30/11/2022 - 31/05/2023
            </div>
            <div className="absolute top-[115px] left-[416px] rounded-xl bg-white w-[141.79px] flex flex-row p-2.5 box-border items-start justify-start">
              <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                浏览运输署公告
              </div>
            </div>
          </div>
          <div className="absolute top-[177px] left-[0px] w-[665px] h-[163px]">
            <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                alt=""
                src="/rectangle-182.svg"
              />
              <div className="absolute top-[59px] left-[249.21px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 hidden border-[1px] border-solid border-black" />
              <div className="absolute top-[68px] left-[259.95px] hidden w-[38.67px]">
                110A
              </div>
              <div className="absolute top-[59px] left-[341.59px] w-[60.15px] h-9 hidden">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[17.19px] hidden w-[24.71px]">
                  111
                </div>
              </div>
            </div>
            <div className="absolute top-[65px] left-[29px] text-xl text-black inline-block w-[128.9px]">
              受影响路线：
            </div>
            <div className="absolute top-[10px] left-[29px] text-13xl text-black inline-block w-[610px]">
              上水特别交通安排配合道路改善工程
            </div>
            <div className="absolute top-[59px] left-[161.13px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
            <div className="absolute top-[59px] left-[161.13px] w-[60.15px] h-9">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[8px] left-[15.87px] inline-block w-[42px]">
                51K
              </div>
            </div>
            <div className="absolute top-[105px] left-[29px] text-black inline-block w-[205.17px]">
              22/02/2023 - 07/01/2024
            </div>
            <div className="absolute top-[115px] left-[416px] rounded-xl bg-white w-[141.79px] flex flex-row p-2.5 box-border items-start justify-start">
              <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                浏览运输署公告
              </div>
            </div>
          </div>
          <div className="absolute top-[354px] left-[0px] w-[665px] h-[694px]">
            <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                alt=""
                src="/rectangle-182.svg"
              />
              <div className="absolute top-[59px] left-[249.21px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[68px] left-[259.95px] inline-block w-[38.67px]">
                110A
              </div>
              <div className="absolute top-[59px] left-[341.59px] w-[60.15px] h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[17.19px] inline-block w-[24.71px]">
                  111
                </div>
              </div>
            </div>
            <div className="absolute top-[65px] left-[29px] text-xl text-black inline-block w-[128.9px]">
              受影响路线：
            </div>
            <div className="absolute top-[10px] left-[29px] text-13xl text-black inline-block w-[610px]">
              A
            </div>
            <div className="absolute top-[59px] left-[161.13px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
            <div className="absolute top-[59px] left-[161.13px] w-[60.15px] h-9">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[8px] left-[15.87px] inline-block w-11">
                110
              </div>
            </div>
            <div className="absolute top-[105px] left-[29px] text-black inline-block w-[205.17px]">
              30/11/2022 - 31/05/2023
            </div>
            <div className="absolute top-[115px] left-[416px] rounded-xl bg-white w-[141.79px] flex flex-row p-2.5 box-border items-start justify-start">
              <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                浏览运输署公告
              </div>
            </div>
            <div className="absolute top-[354px] left-[0px] w-[665px] h-[163px]">
              <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                  alt=""
                  src="/rectangle-182.svg"
                />
                <div className="absolute top-[59px] left-[249.21px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[68px] left-[259.95px] inline-block w-[38.67px]">
                  110A
                </div>
                <div className="absolute top-[59px] left-[341.59px] w-[60.15px] h-9">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[17.19px] inline-block w-[24.71px]">
                    111
                  </div>
                </div>
              </div>
              <div className="absolute top-[65px] left-[29px] text-xl text-black inline-block w-[128.9px]">
                受影響路線：
              </div>
              <div className="absolute top-[10px] left-[29px] text-13xl text-black inline-block w-[610px]">
                A
              </div>
              <div className="absolute top-[59px] left-[161.13px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[59px] left-[161.13px] w-[60.15px] h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[16.11px] inline-block w-[26.85px]">
                  110
                </div>
              </div>
              <div className="absolute top-[105px] left-[29px] text-black inline-block w-[205.17px]">
                30/11/2022 - 31/05/2023
              </div>
              <div className="absolute top-[115px] left-[416px] rounded-xl bg-white w-[141.79px] flex flex-row p-2.5 box-border items-start justify-start">
                <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                  瀏覽運輸署公告
                </div>
              </div>
            </div>
            <div className="absolute top-[531px] left-[0px] w-[665px] h-[163px]">
              <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                  alt=""
                  src="/rectangle-182.svg"
                />
                <div className="absolute top-[59px] left-[249.21px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[68px] left-[259.95px] inline-block w-[38.67px]">
                  110A
                </div>
                <div className="absolute top-[59px] left-[341.59px] w-[60.15px] h-9">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[17.19px] inline-block w-[24.71px]">
                    111
                  </div>
                </div>
              </div>
              <div className="absolute top-[65px] left-[29px] text-xl text-black inline-block w-[128.9px]">
                受影響路線：
              </div>
              <div className="absolute top-[10px] left-[29px] text-13xl text-black inline-block w-[610px]">
                A
              </div>
              <div className="absolute top-[59px] left-[161.13px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[59px] left-[161.13px] w-[60.15px] h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[16.11px] inline-block w-[26.85px]">
                  110
                </div>
              </div>
              <div className="absolute top-[105px] left-[29px] text-black inline-block w-[205.17px]">
                30/11/2022 - 31/05/2023
              </div>
              <div className="absolute top-[115px] left-[416px] rounded-xl bg-white w-[141.79px] flex flex-row p-2.5 box-border items-start justify-start">
                <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                  瀏覽運輸署公告
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[531px] left-[0px] w-[665px] h-[694px]">
            <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                alt=""
                src="/rectangle-182.svg"
              />
              <div className="absolute top-[59px] left-[249.21px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[68px] left-[259.95px] inline-block w-[38.67px]">
                110A
              </div>
              <div className="absolute top-[59px] left-[341.59px] w-[60.15px] h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[17.19px] inline-block w-[24.71px]">
                  111
                </div>
              </div>
            </div>
            <div className="absolute top-[65px] left-[29px] text-xl text-black inline-block w-[128.9px]">
              受影響路線：
            </div>
            <div className="absolute top-[10px] left-[29px] text-13xl text-black inline-block w-[354px]">
              A
            </div>
            <div className="absolute top-[59px] left-[161.13px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
            <div className="absolute top-[59px] left-[161.13px] w-[60.15px] h-9">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[8px] left-[16.11px] inline-block w-[26.85px]">
                110
              </div>
            </div>
            <div className="absolute top-[105px] left-[29px] text-black inline-block w-[205.17px]">
              30/11/2022 - 31/05/2023
            </div>
            <div className="absolute top-[115px] left-[416px] rounded-xl bg-white w-[141.79px] flex flex-row p-2.5 box-border items-start justify-start">
              <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                瀏覽運輸署公告
              </div>
            </div>
            <div className="absolute top-[354px] left-[0px] w-[665px] h-[163px]">
              <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                  alt=""
                  src="/rectangle-182.svg"
                />
                <div className="absolute top-[59px] left-[249.21px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[68px] left-[259.95px] inline-block w-[38.67px]">
                  110A
                </div>
                <div className="absolute top-[59px] left-[341.59px] w-[60.15px] h-9">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[17.19px] inline-block w-[24.71px]">
                    111
                  </div>
                </div>
              </div>
              <div className="absolute top-[65px] left-[29px] text-xl text-black inline-block w-[128.9px]">
                受影響路線：
              </div>
              <div className="absolute top-[10px] left-[29px] text-13xl text-black inline-block w-[23.63px]">
                A
              </div>
              <div className="absolute top-[59px] left-[161.13px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[59px] left-[161.13px] w-[60.15px] h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[16.11px] inline-block w-[26.85px]">
                  110
                </div>
              </div>
              <div className="absolute top-[105px] left-[29px] text-black inline-block w-[205.17px]">
                30/11/2022 - 31/05/2023
              </div>
              <div className="absolute top-[115px] left-[416px] rounded-xl bg-white w-[141.79px] flex flex-row p-2.5 box-border items-start justify-start">
                <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                  瀏覽運輸署公告
                </div>
              </div>
            </div>
            <div className="absolute top-[531px] left-[0px] w-[665px] h-[163px]">
              <div className="absolute top-[0px] left-[0px] w-[665px] h-[163px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                  alt=""
                  src="/rectangle-182.svg"
                />
                <div className="absolute top-[59px] left-[249.21px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[68px] left-[259.95px] inline-block w-[38.67px]">
                  110A
                </div>
                <div className="absolute top-[59px] left-[341.59px] w-[60.15px] h-9">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[17.19px] inline-block w-[24.71px]">
                    111
                  </div>
                </div>
              </div>
              <div className="absolute top-[65px] left-[29px] text-xl text-black inline-block w-[128.9px]">
                受影響路線：
              </div>
              <div className="absolute top-[10px] left-[29px] text-13xl text-black inline-block w-[610px]">
                A
              </div>
              <div className="absolute top-[59px] left-[161.13px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
              <div className="absolute top-[59px] left-[161.13px] w-[60.15px] h-9">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-[60.15px] h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[16.11px] inline-block w-[26.85px]">
                  110
                </div>
              </div>
              <div className="absolute top-[105px] left-[29px] text-black inline-block w-[205.17px]">
                30/11/2022 - 31/05/2023
              </div>
              <div className="absolute top-[115px] left-[416px] rounded-xl bg-white w-[141.79px] flex flex-row p-2.5 box-border items-start justify-start">
                <div className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] opacity-[0.5]">
                  瀏覽運輸署公告
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[720px] h-[100px]"
          alt=""
          src="/rectangle-21.svg"
        />
        <div className="absolute top-[26px] left-[285px] text-21xl text-black">
          服务异动
        </div>
        <img
          className="absolute h-[6.62%] w-[4.22%] top-[3.74%] right-[63.22%] bottom-[89.64%] left-[32.56%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </div>
      <div className="absolute top-[1075px] left-[735px] bg-white w-[734px] h-[695px] overflow-hidden">
        <div className="absolute top-[114px] left-[12px] w-[668px] h-[1253px]">
          <div className="absolute top-[0px] left-[1px] w-[665px] h-[163px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
              alt=""
              src="/rectangle-18.svg"
            />
            <div className="absolute top-[19px] left-[21px] w-[244px] h-[137px]">
              <div className="absolute top-[118px] left-[0px]">
                ■ 最后服务日期为25/03/2023
              </div>
              <div className="absolute top-[79px] left-[0px] text-xl">
                永久取消路线
              </div>
              <div className="absolute top-[27px] left-[0px] w-[244px] h-9 text-xl">
                <div className="absolute top-[8px] left-[204px]">号线</div>
                <div className="absolute top-[6px] left-[0px]">
                  九龙区专线小巴
                </div>
                <div className="absolute top-[0px] left-[144px] w-14 h-9 text-base text-white">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[15px]">75B</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px]">26/03/2023</div>
            </div>
          </div>
          <div className="absolute top-[180px] left-[2px] w-[663px] h-[163px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[663px] h-[163px]"
              alt=""
              src="/rectangle-181.svg"
            />
            <div className="absolute top-[72px] left-[21px]">开办新路线</div>
            <div className="absolute top-[103px] left-[20px]">
              ■ 来往海达邨及深水埗(桂林街)
            </div>
            <div className="absolute top-[134px] left-[20px]">
              ■ 全程收費$4.5
            </div>
            <div className="absolute top-[15px] left-[21px]">26/03/2023</div>
            <div className="absolute top-[34px] left-[20px] w-[244px] h-9 text-xl">
              <div className="absolute top-[8px] left-[204px]">号线</div>
              <div className="absolute top-[6px] left-[0px]">
                九龙区专线小巴
              </div>
              <div className="absolute top-[0px] left-[144px] w-14 h-9 text-base text-white">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[15px]">75C</div>
              </div>
            </div>
          </div>
          <div className="absolute top-[363px] left-[0px] w-[667px] h-[710px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
              alt=""
              src="/rectangle-18.svg"
            />
            <div className="absolute top-[19px] left-[21px] w-[244px] h-[137px]">
              <div className="absolute top-[118px] left-[0px]">
                ■ 最后服务日期为25/03/2023
              </div>
              <div className="absolute top-[79px] left-[0px] text-xl">
                永久取消路线
              </div>
              <div className="absolute top-[27px] left-[0px] w-[244px] h-9 text-xl">
                <div className="absolute top-[8px] left-[204px]">号线</div>
                <div className="absolute top-[6px] left-[0px]">
                  九龙区专线小巴
                </div>
                <div className="absolute top-[0px] left-[144px] w-14 h-9 text-base text-white">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[15px]">75B</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px]">26/03/2023</div>
            </div>
            <div className="absolute top-[367px] left-[2px] w-[665px] h-[163px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                alt=""
                src="/rectangle-18.svg"
              />
              <div className="absolute top-[19px] left-[21px] w-[244px] h-[137px]">
                <div className="absolute top-[118px] left-[0px]">
                  ■ 最後服務日期為25/03/2023
                </div>
                <div className="absolute top-[79px] left-[0px] text-xl">
                  永久取消路線
                </div>
                <div className="absolute top-[27px] left-[0px] w-[244px] h-9 text-xl">
                  <div className="absolute top-[8px] left-[204px]">號線</div>
                  <div className="absolute top-[6px] left-[0px]">
                    九龍區專線小巴
                  </div>
                  <div className="absolute top-[0px] left-[144px] w-14 h-9 text-base text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                    <div className="absolute top-[8px] left-[15px]">75B</div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px]">26/03/2023</div>
              </div>
            </div>
            <div className="absolute top-[547px] left-[3px] w-[663px] h-[163px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[663px] h-[163px]"
                alt=""
                src="/rectangle-181.svg"
              />
              <div className="absolute top-[72px] left-[21px]">開辦新路線</div>
              <div className="absolute top-[103px] left-[20px]">
                ■ 來往海達邨及深水埗(桂林街)
              </div>
              <div className="absolute top-[134px] left-[20px]">
                ■ 全程收費$4.5
              </div>
              <div className="absolute top-[15px] left-[21px]">26/03/2023</div>
              <div className="absolute top-[34px] left-[20px] w-[244px] h-9 text-xl">
                <div className="absolute top-[8px] left-[204px]">號線</div>
                <div className="absolute top-[6px] left-[0px]">
                  九龍區專線小巴
                </div>
                <div className="absolute top-[0px] left-[144px] w-14 h-9 text-base text-white">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[15px]">75C</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[543px] left-[1px] w-[667px] h-[710px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[663px] h-[163px]"
              alt=""
              src="/rectangle-181.svg"
            />
            <div className="absolute top-[72px] left-[21px]">開辦新路線</div>
            <div className="absolute top-[103px] left-[20px]">
              ■ 來往海達邨及深水埗(桂林街)
            </div>
            <div className="absolute top-[134px] left-[20px]">
              ■ 全程收費$4.5
            </div>
            <div className="absolute top-[15px] left-[21px]">26/03/2023</div>
            <div className="absolute top-[34px] left-[20px] w-[244px] h-9 text-xl">
              <div className="absolute top-[8px] left-[204px]">號線</div>
              <div className="absolute top-[6px] left-[0px]">
                九龍區專線小巴
              </div>
              <div className="absolute top-[0px] left-[144px] w-14 h-9 text-base text-white">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                <div className="absolute top-[8px] left-[15px]">75C</div>
              </div>
            </div>
            <div className="absolute top-[367px] left-[2px] w-[665px] h-[163px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[665px] h-[163px]"
                alt=""
                src="/rectangle-18.svg"
              />
              <div className="absolute top-[19px] left-[21px] w-[244px] h-[137px]">
                <div className="absolute top-[118px] left-[0px]">
                  ■ 最後服務日期為25/03/2023
                </div>
                <div className="absolute top-[79px] left-[0px] text-xl">
                  永久取消路線
                </div>
                <div className="absolute top-[27px] left-[0px] w-[244px] h-9 text-xl">
                  <div className="absolute top-[8px] left-[204px]">號線</div>
                  <div className="absolute top-[6px] left-[0px]">
                    九龍區專線小巴
                  </div>
                  <div className="absolute top-[0px] left-[144px] w-14 h-9 text-base text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                    <div className="absolute top-[8px] left-[15px]">75B</div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px]">26/03/2023</div>
              </div>
            </div>
            <div className="absolute top-[547px] left-[3px] w-[663px] h-[163px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[663px] h-[163px]"
                alt=""
                src="/rectangle-181.svg"
              />
              <div className="absolute top-[72px] left-[21px]">開辦新路線</div>
              <div className="absolute top-[103px] left-[20px]">
                ■ 來往海達邨及深水埗(桂林街)
              </div>
              <div className="absolute top-[134px] left-[20px]">
                ■ 全程收費$4.5
              </div>
              <div className="absolute top-[15px] left-[21px]">26/03/2023</div>
              <div className="absolute top-[34px] left-[20px] w-[244px] h-9 text-xl">
                <div className="absolute top-[8px] left-[204px]">號線</div>
                <div className="absolute top-[6px] left-[0px]">
                  九龍區專線小巴
                </div>
                <div className="absolute top-[0px] left-[144px] w-14 h-9 text-base text-white">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-mediumseagreen box-border w-14 h-9 border-[1px] border-solid border-black" />
                  <div className="absolute top-[8px] left-[15px]">75C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[145px] left-[690px] rounded-xl bg-gainsboro-200 w-3 h-[544px]" />
        <div className="absolute top-[147px] left-[690px] rounded-xl bg-gainsboro-100 w-3 h-[97px]" />
        <div className="absolute top-[-3px] left-[2px] bg-gainsboro-100 w-[720px] h-[100px]" />
        <div className="absolute top-[26px] left-[285px] text-21xl inline-block w-[180px] h-[39px]">
          <p className="m-0">路线消息</p>
        </div>
        <img
          className="absolute h-[4.27%] w-[5.72%] top-[5.04%] right-[65.26%] bottom-[90.69%] left-[29.02%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
      </div>
      <div className="absolute top-[18px] left-[18px] w-[1430px] h-[239px] text-5xl text-gray-200">
        <img
          className="absolute h-[58.58%] w-[58.74%] top-[0%] right-[41.26%] bottom-[41.42%] left-[0%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
          alt=""
          src="/logo1@2x.png"
          onClick={onLogoImageClick}
        />
        <div className="absolute h-[24.27%] w-[37.76%] top-[75.73%] right-[55.03%] bottom-[0%] left-[7.2%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-indianred" />
          <div className="absolute top-[25.86%] left-[31.67%]">
            专线小巴路线指南
          </div>
        </div>
        <div className="absolute h-[24.27%] w-[37.76%] top-[75.73%] right-[5.45%] bottom-[0%] left-[56.78%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-indianred" />
          <div className="absolute top-[25.86%] left-[31.67%]">
            公共小巴路线指南
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
            onClick={onFrameContainer6Click}
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
      <div className="absolute top-[3537px] left-[0px] w-[1468px] h-[184px] text-17xl">
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
          联络我们
        </div>
        <img
          className="absolute h-[21.9%] w-[4.39%] top-[20%] right-[93.17%] bottom-[58.1%] left-[2.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/-icon-envelope-closed1.svg"
        />
        <div className="absolute h-[30.48%] w-[54.15%] top-[60.33%] left-[22.96%] text-white inline-block">
          © www.16seats.net 2009-2023 著作权所有
        </div>
      </div>
      <img
        className="absolute h-[0.69%] w-[2.99%] top-[14.67%] right-[64.04%] bottom-[84.64%] left-[32.97%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group1.svg"
      />
    </div>
  );
};

export default MainIndexSimplified;
