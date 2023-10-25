import { useState } from "react";
import { changeTheme } from "./utils/helper";

const Playground = () => {
  const [theme, setTheme] = useState('default');
  return (
    <div className="relative bg-interface-surface-page w-full h-[1080px] overflow-hidden text-left text-base text-interface-text-title font-text-xs-font-normal">
      <div className="absolute top-[-0.5px] left-[96px] bg-interface-surface-component box-border w-[1824px] h-24 flex flex-row items-center justify-between py-0 pr-0 pl-boundvariablesdata text-interface-text-subtitle border-b-[1px] border-solid border-light-theme-border-default">
        <div className="rounded-lg bg-interface-surface-component-muted shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1)] w-[457px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[15px] px-5 box-border gap-[15px]">
          <div className="flex-1 relative tracking-[-0.02em] leading-[24px] inline-block h-[25.08px]">
            Quick Search
          </div>
          <img
            className="relative w-6 h-6"
            alt=""
            src="/iconsearchsearchnormal.svg"
          />
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center justify-end text-2xs text-interface-surface-component">
          <div className="self-stretch flex flex-row items-center justify-start py-boundvariablesdata pr-boundvariablesdata7 pl-0 gap-[8px]">
            <div className="rounded-md bg-snow hidden flex-row items-center justify-start py-2 px-[11px] gap-[12px] text-sm text-gray-100">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/3844467-magnifier-search-zoom-icon-1.svg"
              />
              <div className="relative leading-[100%]">
                What are you looking for?
              </div>
            </div>
            <div className="hidden flex-row items-center justify-start gap-[20px] text-sm text-light-theme-text-title">
              <div className="flex flex-row items-center justify-start relative gap-[12px]">
                <img
                  className="relative rounded-[50%] w-12 h-12 object-cover z-[0]"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[8px] z-[1]">
                  <div className="relative font-semibold">Jhon Nassir Jr.</div>
                  <div className="relative text-xs leading-[100%] text-light-theme-text-default">
                    Executive
                  </div>
                </div>
                <img
                  className="absolute my-0 mx-[!important] h-[49.98%] w-[14.99%] top-[52.09%] right-[68.13%] bottom-[-2.07%] left-[16.88%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/clip-path-group.svg"
                />
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/352466-arrow-down-icon-1.svg"
              />
            </div>
            <div className="rounded-81xl flex flex-row items-center justify-center p-3 relative gap-[10px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden z-[0]"
                alt=""
                src="/2203538-alarm-bell-notification-ring-icon1-1.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hidden z-[1]"
                alt=""
                src="/iconsaxboldshoppingcart.svg"
              />
              <div className="my-0 mx-[!important] absolute top-[-2px] left-[32px] rounded-81xl bg-alert-red w-5 h-5 hidden flex-col items-center justify-center p-2.5 box-border z-[2]">
                <div className="relative leading-[100%] font-semibold">2</div>
              </div>
              <img
                className="relative w-6 h-6 z-[3]"
                alt=""
                src="/iconmessagesmessages3.svg"
              />
              <span 
                className={`${theme==='default' ? 'text-brand-primary-pure' : 'text-interface-text-subtitle'} cursor-pointer`} 
                onClick={()=>{
                  changeTheme('default');
                  setTheme('default');
                }}
              >Default theme</span>              
              <span 
                className={`${theme==='pink' ? 'text-brand-primary-pure' : 'text-interface-text-subtitle'} cursor-pointer`} 
                onClick={()=>{
                  changeTheme('pink');
                  setTheme('pink');
                }}
              >Pink theme</span>
              <span 
                className={`${theme==='green' ? 'text-brand-primary-pure' : 'text-interface-text-subtitle'} cursor-pointer`} 
                onClick={()=>{
                  changeTheme('green');
                  setTheme('green');
                }}
              >Green theme</span>
              <span 
                className={`${theme==='dark' ? 'text-brand-primary-pure' : 'text-interface-text-subtitle'} cursor-pointer`} 
                onClick={()=>{
                  changeTheme('dark');
                  setTheme('dark');
                }}
              >Dark theme</span>
            </div>
            <div className="flex flex-row items-center justify-start relative gap-[8px]">
              <div className="rounded-81xl w-12 h-12 flex flex-row items-center justify-center z-[0]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconnotificationnotification.svg"
                />
              </div>
              <div className="my-0 mx-[!important] absolute top-[8px] left-[32px] rounded-81xl bg-red-600 w-1 h-1 flex flex-col items-center justify-center p-2.5 box-border z-[1]">
                <div className="relative leading-[100%] font-semibold hidden">
                  3
                </div>
              </div>
            </div>
            <div className="rounded-81xl flex flex-row items-center justify-center p-3 relative gap-[10px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden z-[0]"
                alt=""
                src="/2203538-alarm-bell-notification-ring-icon1-11.svg"
              />
              <img
                className="relative w-6 h-6 z-[1]"
                alt=""
                src="/iconshopshoppingcart.svg"
              />
              <div className="my-0 mx-[!important] absolute top-[8px] left-[32px] rounded-81xl bg-alert-red w-1 h-1 flex flex-col items-center justify-center p-2.5 box-border z-[2]">
                <div className="relative leading-[100%] font-semibold hidden">
                  2
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-right text-xs text-text-menu font-sig-12">
            <div className="self-stretch overflow-hidden hidden flex-col items-end justify-center p-2 gap-[3px]">
              <img
                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlineararrowright.svg"
              />
              <div className="relative leading-[100%]">
                <p className="m-0">Applied</p>
                <p className="m-0">Filters</p>
              </div>
            </div>
            <div className="self-stretch bg-brand-primary-pure overflow-hidden flex flex-row items-center justify-center py-2 px-4 gap-[10px] text-left text-interface-surface-component">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsaxlinearexport.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialfiltersearch.svg"
              />
              <div className="flex flex-col items-start justify-center gap-[2px]">
                <div className="relative leading-[100%]">
                  <p className="m-0">All</p>
                  <p className="m-0">Filters</p>
                </div>
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/iconsaxlineararrowright1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[127.5px] left-[120px] w-[1251px] flex flex-col items-start justify-start gap-[2px] text-[28px]">
        <div className="relative tracking-[-0.02em] leading-[100%] font-semibold">
          Title page
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px] text-3xs text-interface-text-subtitle">
          <div className="relative tracking-[-0.02em] leading-[18px]">Home</div>
          <img
            className="relative w-2 h-2"
            alt=""
            src="/iconarrowarrowright.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[18px]">
            Page 1
          </div>
          <img
            className="relative w-2 h-2"
            alt=""
            src="/iconarrowarrowright1.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[18px]">
            Page 2
          </div>
          <img
            className="relative w-2 h-2"
            alt=""
            src="/iconarrowarrowright2.svg"
          />
          <div className="relative tracking-[-0.02em] leading-[18px] text-brand-primary-pure">{`Current Page `}</div>
        </div>
      </div>
      <div className="absolute top-[131.5px] left-[1371px] rounded-rounded-3xl bg-brand-primary-pure overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-interface-surface-component">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/cartplus.svg"
        />
        <b className="relative leading-[150%]">default</b>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/arrowright.svg"
        />
      </div>
      <div className="absolute top-[131.5px] left-[1459px] rounded-rounded-3xl bg-interface-surface-component flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-gray-600">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/cartplus1.svg"
        />
        <div className="relative leading-[150%]">Business</div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/arrowright1.svg"
        />
      </div>
      <div className="absolute top-[131.5px] left-[1559px] rounded-rounded-3xl bg-interface-surface-component flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-gray-600">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/cartplus2.svg"
        />
        <div className="relative leading-[150%]">Detailed</div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/arrowright2.svg"
        />
      </div>
      <div className="absolute top-[131.5px] left-[1654px] rounded-rounded-3xl bg-interface-surface-component flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-gray-600">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/cartplus3.svg"
        />
        <div className="relative leading-[150%]">KPI Details</div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/arrowright3.svg"
        />
      </div>
      <div className="absolute top-[131.5px] left-[1767px] rounded-rounded-3xl bg-interface-surface-component flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-gray-600">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/cartplus4.svg"
        />
        <div className="relative leading-[150%]">Comparative</div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
          alt=""
          src="/arrowright4.svg"
        />
      </div>
      <div className="absolute top-[127.5px] left-[668px] rounded-lg bg-gray-200 box-border h-[65px] overflow-hidden hidden flex-row items-center justify-start py-0 pr-0 pl-2 gap-[16px] text-3xs text-text-menu font-sig-12 border-[1px] border-solid border-gainsboro">
        <div className="flex flex-row items-center justify-end gap-[4px]">
          <div className="flex flex-row items-start justify-start">
            <div className="rounded overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
                <div className="relative leading-[100%]">Main KPI</div>
              </div>
              <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
                <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                  <div className="relative leading-[110%]">Pricing</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
              <div className="relative leading-[100%]">Metric</div>
            </div>
            <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
              <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                <div className="relative leading-[110%]">Facings</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-1">
            <img
              className="self-stretch relative max-h-full w-0"
              alt=""
              src="/vector-772.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <div className="rounded overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
                <div className="relative leading-[100%]">Dimension 1</div>
              </div>
              <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
                <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                  <div className="relative leading-[110%]">Country</div>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
                <div className="relative leading-[100%]">Dimension 2</div>
              </div>
              <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
                <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                  <div className="relative leading-[110%]">Segment</div>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
                <div className="relative leading-[100%]">Dimension 3</div>
              </div>
              <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
                <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                  <div className="relative leading-[110%]">Pack Type</div>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
                <div className="relative leading-[100%]">Dimension 4</div>
              </div>
              <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
                <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                  <div className="relative leading-[110%]">Brand</div>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
                <div className="relative leading-[100%]">Dimension 5</div>
              </div>
              <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
                <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                  <div className="relative leading-[110%]">SKU</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-1">
            <img
              className="self-stretch relative max-h-full w-0"
              alt=""
              src="/vector-7721.svg"
            />
          </div>
          <div className="rounded overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
              <div className="relative leading-[100%]">Duration</div>
            </div>
            <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
              <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                <div className="relative leading-[110%]">Year</div>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch bg-interface-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
              <div className="relative leading-[100%]">Period</div>
            </div>
            <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-start py-1 px-0 text-sm text-text">
              <div className="shadow-[0px_0px_0px_#0033a0] flex flex-col items-start justify-center py-1 px-3">
                <div className="relative leading-[110%]">2022 - 2023</div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start py-1.5 px-2">
            <img className="relative w-3 h-3" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-right text-xs">
          <div className="self-stretch overflow-hidden hidden flex-col items-end justify-center p-2 gap-[3px]">
            <img
              className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlineararrowright2.svg"
            />
            <div className="relative leading-[100%]">
              <p className="m-0">Applied</p>
              <p className="m-0">Filters</p>
            </div>
          </div>
          <div className="self-stretch bg-darkslategray-200 overflow-hidden flex flex-row items-center justify-center py-2 px-4 gap-[10px] text-left text-interface-surface-component">
            <img
              className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearfilteradd.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlinearexport1.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[2px]">
              <div className="relative leading-[100%]">
                <p className="m-0">All</p>
                <p className="m-0">Filters</p>
              </div>
              <img
                className="relative w-3.5 h-3.5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsaxlineararrowright3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-interface-surface-component box-border w-[96.5px] h-[1080px] flex flex-col items-start justify-start text-sm text-interface-text-subtitle border-r-[1px] border-solid border-gray-200">
        <div className="flex-1 w-24 flex flex-col items-start justify-start pt-0 px-spacing-5 pb-boundvariablesdata8 box-border z-[0]">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[16px] border-b-[1px] border-solid border-gray-200">
            <div className="w-[94px] h-20 flex flex-col items-start justify-center pt-boundvariablesdata px-0 pb-0 box-border gap-[8px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-16 shrink-0 hidden"
                alt=""
                src="/logo.svg"
              />
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[22px] px-4">
                <img
                  className="relative w-[34px] h-[39px] overflow-hidden shrink-0"
                  alt=""
                  src="/logosymbol.svg"
                />
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[0.5px] shrink-0"
              alt=""
              src="/divisor.svg"
            />
            <div className="self-stretch flex-1 overflow-y-auto flex flex-col items-start justify-start gap-[8px]">
              <div className="rounded-3xs w-[280px] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata box-border gap-[12px] text-brand-primary-pure">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/iconsettingscategory2.svg"
                  />
                </div>
                <div className="relative leading-[150%] font-semibold hidden">
                  Dashboard
                </div>
              </div>
              <div className="rounded-3xs [backdrop-filter:blur(150px)] w-[280px] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata box-border gap-[12px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/iconsettingscategory21.svg"
                  />
                </div>
                <div className="relative leading-[140%] hidden">Profile</div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[0.5px] shrink-0"
                alt=""
                src="/divisor1.svg"
              />
              <div className="self-stretch rounded-3xs [backdrop-filter:blur(150px)] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[12px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/iconsettingscategory22.svg"
                  />
                </div>
                <div className="relative leading-[140%] hidden">
                  Manage Users
                </div>
              </div>
              <div className="self-stretch rounded-3xs [backdrop-filter:blur(150px)] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[12px] text-center text-xs">
                <div className="relative rounded-spacing-05 w-6 h-6 overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] bg-gray-300 w-6 h-6" />
                  <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_8px)] leading-[150%] font-medium">
                    AB
                  </div>
                </div>
                <div className="relative text-sm leading-[140%] text-left hidden">
                  Dashboard
                </div>
              </div>
              <div className="self-stretch rounded-3xs [backdrop-filter:blur(150px)] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[12px] text-center text-xs">
                <div className="relative rounded-spacing-05 w-6 h-6 overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] bg-gray-300 w-6 h-6" />
                  <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_8px)] leading-[150%] font-medium">
                    ZY
                  </div>
                </div>
                <div className="relative text-sm leading-[140%] text-left hidden">
                  Dashboard
                </div>
              </div>
              <div className="self-stretch rounded-3xs [backdrop-filter:blur(150px)] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[12px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/iconsettingscategory23.svg"
                  />
                </div>
                <div className="relative leading-[140%] hidden">Dashboard</div>
              </div>
              <div className="self-stretch rounded-3xs [backdrop-filter:blur(150px)] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[12px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/iconsettingscategory24.svg"
                  />
                </div>
                <div className="relative leading-[140%] hidden">Dashboard</div>
              </div>
              <div className="self-stretch rounded-3xs [backdrop-filter:blur(150px)] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[12px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/iconsettingscategory25.svg"
                  />
                </div>
                <div className="relative leading-[140%] hidden">Dashboard</div>
              </div>
              <div className="self-stretch rounded-3xs [backdrop-filter:blur(150px)] flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[12px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/iconsettingscategory26.svg"
                  />
                </div>
                <div className="relative leading-[140%] hidden">{`Invoice & Billing`}</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <button className="cursor-pointer [border:none] py-boundvariablesdata3 px-boundvariablesdata bg-[transparent] self-stretch rounded-3xs flex flex-row items-center justify-start">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconsettingssetting2.svg"
                />
              </button>
              <button className="cursor-pointer [border:none] py-boundvariablesdata3 px-boundvariablesdata bg-[transparent] self-stretch rounded-3xs flex flex-row items-center justify-start">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/icondesign-toolsmask.svg"
                />
              </button>
              <button className="cursor-pointer [border:none] py-boundvariablesdata3 px-boundvariablesdata bg-brand-primary-pure self-stretch rounded-3xs [backdrop-filter:blur(150px)] flex flex-row items-center justify-start">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconsaxlineari24support.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-boundvariablesdata px-boundvariablesdata8 z-[1] text-base text-interface-text-default border-t-[0.5px] border-solid border-gray-200">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative rounded-81xl w-12 h-12 object-cover"
              alt=""
              src="/avatar@2x.png"
            />
            <div className="hidden flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[16px] font-semibold">
                Jese Leos
              </div>
              <div className="relative text-sm leading-[14px] text-interface-text-subtitle">
                Joined in August 2014
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[82px] left-[calc(50%_-_13.25px)] rounded-border-radius-rounded-full bg-interface-surface-component overflow-hidden flex flex-row items-center justify-center z-[2]">
          <div className="bg-gray-400 flex flex-row items-center justify-center p-1">
            <img
              className="relative w-[18px] h-[18px]"
              alt=""
              src="/iconsecurityunlock.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[204px] left-[136px] rounded-4xs bg-interface-surface-component shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] w-[282px] overflow-hidden flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 text-xs">
          <img
            className="relative w-[41.92px] h-[42px] hidden"
            alt=""
            src={`🦆 icon "people"_52`}
          />
          <div className="flex-1 relative text-base leading-[150%] font-medium">
            Revenue Across Cards (US$)
          </div>
          <div className="rounded bg-color-warning-tint100 hidden flex-row items-center justify-start p-1.5 gap-[4px] text-color-warning-tint400">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlinearshoppingcart.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
              Discount Interest
            </div>
          </div>
          <div className="rounded-8xs hidden flex-row items-start justify-start gap-[4px] text-neutral-200">
            <div className="rounded-8xs flex flex-row items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[18px] hidden">
                Month
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsaxlineararrowdown2.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearfilteradd1.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[18px] hidden">
              Month
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlineararrowdown21.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[13px] text-21xl">
          <b className="relative tracking-[-0.02em] leading-[72px]">
            1,270,600
          </b>
          <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[18px] object-cover"
                alt=""
                src="/purepng@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                60% from Azure
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[10.76px] object-cover"
                alt=""
                src="/2000pxamazon-web-services-logo@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                20% from AWS
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-center justify-between py-0 px-5 text-light-theme-text-subtitle">
          <div className="relative w-[175px] h-[89px]">
            <img
              className="absolute top-[0px] left-[29.15px] w-[110.89px] h-[89px]"
              alt=""
              src="/chart.svg"
            />
            <div className="absolute top-[calc(50%_+_12.9px)] left-[calc(50%_+_52.03px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[35.47px] h-[15.49px]">
              62%
            </div>
            <div className="absolute top-[calc(50%_-_36.5px)] left-[calc(50%_-_87.5px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[39px] h-4">
              38%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-sm">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-darkslateblue w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Active
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-gold w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Inactive
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-col items-center justify-center text-xl text-light-theme-text-default">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotonenotepad2.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                Contracts
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">50</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotoneprofile2user.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                End Customer
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">1</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[5px] text-lg text-light-theme-text-default">
          <div className="relative tracking-[-0.02em] leading-[28px]">
            5.57%
          </div>
          <img
            className="relative w-6 h-6"
            alt=""
            src={`🦆 icon "arrow up"_62`}
          />
        </div>
        <div className="self-stretch bg-interface-surface-component flex flex-row items-start justify-between py-2.5 px-5 text-color-gray-text-teritiary">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
              .
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
              LP Var%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                11.2%
              </div>
              <img
                className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                alt=""
                src="/uparrow-1.svg"
              />
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
              change
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[204px] left-[430px] rounded-4xs bg-interface-surface-component shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] w-[282px] overflow-hidden flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 text-xs">
          <img
            className="relative w-[41.92px] h-[42px] hidden"
            alt=""
            src={`🦆 icon "people"_64`}
          />
          <div className="flex-1 relative text-base leading-[150%] font-medium">
            Card Portfolio Growth Rate
          </div>
          <div className="rounded bg-color-warning-tint100 hidden flex-row items-center justify-start p-1.5 gap-[4px] text-color-warning-tint400">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlinearshoppingcart1.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
              Discount Interest
            </div>
          </div>
          <div className="rounded-8xs hidden flex-row items-start justify-start gap-[4px] text-neutral-200">
            <div className="rounded-8xs flex flex-row items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[18px] hidden">
                Month
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsaxlineararrowdown22.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearfilteradd2.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[18px] hidden">
              Month
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlineararrowdown23.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[13px] text-21xl">
          <b className="relative tracking-[-0.02em] leading-[72px]">45%</b>
          <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[18px] object-cover"
                alt=""
                src="/purepng1@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                60% from Azure
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[10.76px] object-cover"
                alt=""
                src="/2000pxamazon-web-services-logo1@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                20% from AWS
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-center justify-between py-0 px-5 text-light-theme-text-subtitle">
          <div className="relative w-[175px] h-[89px]">
            <img
              className="absolute top-[0px] left-[29.15px] w-[110.89px] h-[89px]"
              alt=""
              src="/chart1.svg"
            />
            <div className="absolute top-[calc(50%_+_12.9px)] left-[calc(50%_+_52.03px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[35.47px] h-[15.49px]">
              62%
            </div>
            <div className="absolute top-[calc(50%_-_36.5px)] left-[calc(50%_-_87.5px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[39px] h-4">
              38%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-sm">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-darkslateblue w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Active
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-gold w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Inactive
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-col items-center justify-center text-xl text-light-theme-text-default">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotonenotepad21.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                Contracts
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">50</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotoneprofile2user1.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                End Customer
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">1</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[5px] text-lg text-light-theme-text-default">
          <div className="relative tracking-[-0.02em] leading-[28px]">
            5.57%
          </div>
          <img
            className="relative w-6 h-6"
            alt=""
            src={`🦆 icon "arrow up"_74`}
          />
        </div>
        <div className="self-stretch bg-interface-surface-component flex flex-row items-start justify-between py-2.5 px-5 text-color-gray-text-teritiary">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
              .
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
              LP Var%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                8.5%
              </div>
              <img
                className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                alt=""
                src="/uparrow-11.svg"
              />
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
              change
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[204px] left-[724px] rounded-4xs bg-interface-surface-component shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] w-[282px] overflow-hidden flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 text-xs">
          <img
            className="relative w-[41.92px] h-[42px] hidden"
            alt=""
            src={`🦆 icon "people"_76`}
          />
          <div className="flex-1 relative text-base leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="font-medium">{`Total Margin Value `}</span>
            <span>(US$)</span>
          </div>
          <div className="rounded bg-color-warning-tint100 hidden flex-row items-center justify-start p-1.5 gap-[4px] text-color-warning-tint400">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlinearshoppingcart2.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
              Discount Interest
            </div>
          </div>
          <div className="rounded-8xs hidden flex-row items-start justify-start gap-[4px] text-neutral-200">
            <div className="rounded-8xs flex flex-row items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[18px] hidden">
                Month
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsaxlineararrowdown24.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearfilteradd3.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[18px] hidden">
              Month
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlineararrowdown25.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[13px] text-21xl">
          <b className="relative tracking-[-0.02em] leading-[72px]">198,320</b>
          <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[18px] object-cover"
                alt=""
                src="/purepng2@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                60% from Azure
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[10.76px] object-cover"
                alt=""
                src="/2000pxamazon-web-services-logo2@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                20% from AWS
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-center justify-between py-0 px-5 text-light-theme-text-subtitle">
          <div className="relative w-[175px] h-[89px]">
            <img
              className="absolute top-[0px] left-[29.15px] w-[110.89px] h-[89px]"
              alt=""
              src="/chart2.svg"
            />
            <div className="absolute top-[calc(50%_+_12.9px)] left-[calc(50%_+_52.03px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[35.47px] h-[15.49px]">
              62%
            </div>
            <div className="absolute top-[calc(50%_-_36.5px)] left-[calc(50%_-_87.5px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[39px] h-4">
              38%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-sm">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-darkslateblue w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Active
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-gold w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Inactive
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-col items-center justify-center text-xl text-light-theme-text-default">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotonenotepad22.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                Contracts
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">50</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotoneprofile2user2.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                End Customer
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">1</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[5px] text-lg text-light-theme-text-default">
          <div className="relative tracking-[-0.02em] leading-[28px]">
            5.57%
          </div>
          <img
            className="relative w-6 h-6"
            alt=""
            src={`🦆 icon "arrow up"_86`}
          />
        </div>
        <div className="self-stretch bg-interface-surface-component flex flex-row items-start justify-between py-2.5 px-5 text-color-gray-text-teritiary">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
              .
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
              LP Var%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                7.8%
              </div>
              <img
                className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                alt=""
                src="/uparrow-12.svg"
              />
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
              change
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[204px] left-[1018px] rounded-4xs bg-interface-surface-component shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] w-[282px] overflow-hidden flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch h-14 flex flex-row items-center justify-start py-4 px-5 box-border text-xs">
          <img
            className="relative w-[41.92px] h-[42px] hidden"
            alt=""
            src={`🦆 icon "people"_88`}
          />
          <div className="flex-1 relative text-base leading-[150%] font-medium">
            Average Revenue Per Account (US$)
          </div>
          <div className="rounded bg-color-warning-tint100 hidden flex-row items-center justify-start p-1.5 gap-[4px] text-color-warning-tint400">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlinearshoppingcart3.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
              Discount Interest
            </div>
          </div>
          <div className="rounded-8xs hidden flex-row items-start justify-start gap-[4px] text-neutral-200">
            <div className="rounded-8xs flex flex-row items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[18px] hidden">
                Month
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsaxlineararrowdown26.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearfilteradd4.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[18px] hidden">
              Month
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlineararrowdown27.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[13px] text-21xl">
          <b className="relative tracking-[-0.02em] leading-[72px]">1,200</b>
          <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[18px] object-cover"
                alt=""
                src="/purepng3@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                60% from Azure
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[10.76px] object-cover"
                alt=""
                src="/2000pxamazon-web-services-logo3@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                20% from AWS
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-center justify-between py-0 px-5 text-light-theme-text-subtitle">
          <div className="relative w-[175px] h-[89px]">
            <img
              className="absolute top-[0px] left-[29.15px] w-[110.89px] h-[89px]"
              alt=""
              src="/chart3.svg"
            />
            <div className="absolute top-[calc(50%_+_12.9px)] left-[calc(50%_+_52.03px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[35.47px] h-[15.49px]">
              62%
            </div>
            <div className="absolute top-[calc(50%_-_36.5px)] left-[calc(50%_-_87.5px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[39px] h-4">
              38%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-sm">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-darkslateblue w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Active
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-gold w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Inactive
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-col items-center justify-center text-xl text-light-theme-text-default">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotonenotepad23.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                Contracts
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">50</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotoneprofile2user3.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                End Customer
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">1</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[5px] text-lg text-light-theme-text-default">
          <div className="relative tracking-[-0.02em] leading-[28px]">
            5.57%
          </div>
          <img
            className="relative w-6 h-6"
            alt=""
            src={`🦆 icon "arrow up"_98`}
          />
        </div>
        <div className="self-stretch bg-interface-surface-component flex flex-row items-start justify-between py-2.5 px-5 text-color-gray-text-teritiary">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
              .
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
              LP Var%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                9.7%
              </div>
              <img
                className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                alt=""
                src="/uparrow-13.svg"
              />
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
              change
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[204px] left-[1312px] rounded-4xs bg-interface-surface-component shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] w-[282px] overflow-hidden flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 text-xs">
          <img
            className="relative w-[41.92px] h-[42px] hidden"
            alt=""
            src={`🦆 icon "people"_100`}
          />
          <div className="flex-1 relative text-base leading-[150%] font-medium">
            Total Interest Income (US$)
          </div>
          <div className="rounded bg-color-warning-tint100 hidden flex-row items-center justify-start p-1.5 gap-[4px] text-color-warning-tint400">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlinearshoppingcart4.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
              Discount Interest
            </div>
          </div>
          <div className="rounded-8xs hidden flex-row items-start justify-start gap-[4px] text-neutral-200">
            <div className="rounded-8xs flex flex-row items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[18px] hidden">
                Month
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsaxlineararrowdown28.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearfilteradd5.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[18px] hidden">
              Month
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlineararrowdown29.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[13px] text-21xl">
          <b className="relative tracking-[-0.02em] leading-[72px]">180,000</b>
          <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[18px] object-cover"
                alt=""
                src="/purepng4@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                60% from Azure
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[10.76px] object-cover"
                alt=""
                src="/2000pxamazon-web-services-logo4@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                20% from AWS
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-center justify-between py-0 px-5 text-light-theme-text-subtitle">
          <div className="relative w-[175px] h-[89px]">
            <img
              className="absolute top-[0px] left-[29.15px] w-[110.89px] h-[89px]"
              alt=""
              src="/chart4.svg"
            />
            <div className="absolute top-[calc(50%_+_12.9px)] left-[calc(50%_+_52.03px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[35.47px] h-[15.49px]">
              62%
            </div>
            <div className="absolute top-[calc(50%_-_36.5px)] left-[calc(50%_-_87.5px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[39px] h-4">
              38%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-sm">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-darkslateblue w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Active
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-gold w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Inactive
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-col items-center justify-center text-xl text-light-theme-text-default">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotonenotepad24.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                Contracts
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">50</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotoneprofile2user4.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                End Customer
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">1</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[5px] text-lg text-light-theme-text-default">
          <div className="relative tracking-[-0.02em] leading-[28px]">
            5.57%
          </div>
          <img
            className="relative w-6 h-6"
            alt=""
            src={`🦆 icon "arrow up"_110`}
          />
        </div>
        <div className="self-stretch bg-interface-surface-component flex flex-row items-start justify-between py-2.5 px-5 text-color-gray-text-teritiary">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
              .
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
              LP Var%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                8.7%
              </div>
              <img
                className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                alt=""
                src="/uparrow-14.svg"
              />
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
              change
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[204px] left-[1606px] rounded-4xs bg-interface-surface-component shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] w-[282px] overflow-hidden flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 text-xs">
          <img
            className="relative w-[41.92px] h-[42px] hidden"
            alt=""
            src={`🦆 icon "people"_112`}
          />
          <div className="flex-1 relative text-base leading-[150%] font-medium">
            Total Written off Value (US$)
          </div>
          <div className="rounded bg-color-warning-tint100 hidden flex-row items-center justify-start p-1.5 gap-[4px] text-color-warning-tint400">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlinearshoppingcart5.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
              Discount Interest
            </div>
          </div>
          <div className="rounded-8xs hidden flex-row items-start justify-start gap-[4px] text-neutral-200">
            <div className="rounded-8xs flex flex-row items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[18px] hidden">
                Month
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconsaxlineararrowdown210.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearfilteradd6.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[18px] hidden">
              Month
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconsaxlineararrowdown211.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[13px] text-21xl">
          <b className="relative tracking-[-0.02em] leading-[72px]">28,960</b>
          <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[18px] object-cover"
                alt=""
                src="/purepng5@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                60% from Azure
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
              <img
                className="relative w-[18px] h-[10.76px] object-cover"
                alt=""
                src="/2000pxamazon-web-services-logo5@2x.png"
              />
              <div className="relative tracking-[-0.02em] leading-[24px]">
                20% from AWS
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-center justify-between py-0 px-5 text-light-theme-text-subtitle">
          <div className="relative w-[175px] h-[89px]">
            <img
              className="absolute top-[0px] left-[29.15px] w-[110.89px] h-[89px]"
              alt=""
              src="/chart5.svg"
            />
            <div className="absolute top-[calc(50%_+_12.9px)] left-[calc(50%_+_52.03px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[35.47px] h-[15.49px]">
              62%
            </div>
            <div className="absolute top-[calc(50%_-_36.5px)] left-[calc(50%_-_87.5px)] tracking-[-0.02em] leading-[20.4px] font-medium inline-block w-[39px] h-4">
              38%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-sm">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-darkslateblue w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Active
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative rounded-[50%] bg-gold w-[9px] h-[9px]" />
                <div className="relative tracking-[-0.02em] leading-[24px]">
                  Inactive
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-col items-center justify-center text-xl text-light-theme-text-default">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotonenotepad25.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                Contracts
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">50</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxtwotoneprofile2user5.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[30px]">
                End Customer
              </div>
            </div>
            <div className="relative tracking-[-0.02em] text-light-theme-text-title text-5xl">
              <b className="leading-[32px]">1</b>
              <span className="text-17xl leading-[44px] font-medium">{` `}</span>
            </div>
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[5px] text-lg text-light-theme-text-default">
          <div className="relative tracking-[-0.02em] leading-[28px]">
            5.57%
          </div>
          <img
            className="relative w-6 h-6"
            alt=""
            src={`🦆 icon "arrow up"_122`}
          />
        </div>
        <div className="self-stretch bg-interface-surface-component flex flex-row items-center justify-between py-2.5 px-5 text-color-gray-text-teritiary">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
              .
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
              LP Var%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                4.3%
              </div>
              <img
                className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                alt=""
                src="/uparrow-15.svg"
              />
            </div>
            <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
              change
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[432px] left-[136px] w-[1752px] h-[301px] flex flex-row items-start justify-start text-3xs text-interface-text-subtitle">
        <div className="self-stretch flex-1 rounded-2xl shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t-2xl rounded-b-none bg-interface-surface-component box-border h-20 flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[16px] text-sm text-interface-text-title border-b-[1px] border-solid border-interface-stroke-default">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[4px] text-base">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Trend view Revenue
              </div>
              <div className="self-stretch relative text-sm leading-[20px] text-interface-text-subtitle hidden">
                Card Subtitle
              </div>
            </div>
            <div className="rounded-lg box-border w-[188px] hidden flex-col items-start justify-start p-3 text-interface-text-subtitle border-[1px] border-solid border-interface-stroke-default">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[125%]">By Type</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
            <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden hidden flex-row items-start justify-start text-gray-800 border-[1px] border-solid border-gray-200">
              <div className="bg-brand-primary-pure overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-interface-surface-component">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus5.svg"
                />
                <div className="relative leading-[150%] font-medium">Top 5</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright5.svg"
                />
              </div>
              <div className="hidden flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus6.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Second
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright6.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus7.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Bottom 5
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright7.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="hidden flex-row items-center justify-start p-2 gap-[8px]">
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/iconessentialfiltersquare.svg"
                />
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconessentialfilteradd.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/iconessentialfiltersquare1.svg"
                />
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconessentialmoresquare.svg"
                />
              </div>
            </div>
            <div className="hidden flex-row items-center justify-end gap-[12px]">
              <img
                className="relative w-4 h-4"
                alt=""
                src="/vuesaxlinearaddsquare.svg"
              />
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearlampon.svg"
              />
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearinfocircle.svg"
              />
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearmoresquare.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-1 bg-interface-surface-component overflow-hidden flex flex-row items-center justify-center p-4 gap-[8px] text-right font-sig-12">
            <div className="flex-1 relative h-[145px]">
              <div className="absolute w-[calc(100%_-_114.66px)] top-[113.9px] right-[84.54px] left-[30.11px] box-border h-[0.9px] border-t-[0.9px] border-dashed border-gray-200" />
              <div className="absolute w-[calc(100%_-_114.66px)] top-[71.37px] right-[84.54px] left-[30.11px] box-border h-[0.9px] border-t-[0.9px] border-dashed border-gray-200" />
              <div className="absolute w-[calc(100%_-_114.66px)] top-[48.21px] right-[84.54px] left-[30.11px] box-border h-[0.9px] border-t-[0.9px] border-dashed border-gray-200" />
              <div className="absolute w-[calc(100%_-_30.21px)] top-[27.01px] right-[-0.45px] left-[30.66px] box-border h-[0.9px] border-t-[0.9px] border-dashed border-gray-200" />
              <div className="absolute w-[calc(100%_-_30.21px)] top-[93.31px] right-[-0.45px] left-[30.66px] box-border h-[0.9px] border-t-[0.9px] border-dashed border-gray-200" />
              <img
                className="absolute w-[calc(100%_-_48.89px)] top-[4.4px] right-[17.78px] left-[31.11px] max-w-full overflow-hidden h-[0.9px]"
                alt=""
                src="/line-18.svg"
              />
              <div className="absolute top-[138px] left-[47.88px] w-[1672.12px] flex flex-row items-center justify-center py-0 px-[3px] box-border gap-[4px]">
                <div className="flex-1 relative leading-[100%]">Feb</div>
                <div className="flex-1 relative leading-[100%]">Mar</div>
                <div className="flex-1 relative leading-[100%]">Apr</div>
                <div className="flex-1 relative leading-[100%]">May</div>
                <div className="flex-1 relative leading-[100%]">Jun</div>
                <div className="flex-1 relative leading-[100%]">Jul</div>
                <div className="flex-1 relative leading-[100%]">Aug</div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[25.35px] h-[114.68px] flex flex-col items-end justify-between text-4xs font-kanit">
                <div className="relative leading-[100%] flex items-center w-[34px] h-[7px] shrink-0">
                  250,000
                </div>
                <div className="relative leading-[100%]">200,000</div>
                <div className="relative leading-[100%]">150,000</div>
                <div className="relative leading-[100%]">100,000</div>
                <div className="relative leading-[100%]">50,000</div>
                <div className="relative leading-[100%] flex items-center w-3 h-[11px] shrink-0">
                  0
                </div>
              </div>
              <img
                className="absolute w-[calc(100%_-_1231.32px)] top-[19.89px] right-[0px] left-[1231.32px] max-w-full overflow-hidden h-[96.11px]"
                alt=""
                src="/yellow.svg"
              />
              <img
                className="absolute w-[calc(100%_-_30.44px)] top-[40.58px] right-[0px] left-[30.44px] max-w-full overflow-hidden h-[76.28px]"
                alt=""
                src="/blue.svg"
              />
              <img
                className="absolute w-[calc(100%_-_1206.99px)] top-[4.17px] right-[-14.31px] left-[1221.29px] max-w-full overflow-hidden h-[60.97px]"
                alt=""
                src="/blue1.svg"
              />
              <img
                className="absolute w-[calc(100%_-_4.17px)] top-[25.58px] right-[-6.58px] left-[10.76px] max-w-full overflow-hidden h-[106.76px]"
                alt=""
                src="/green.svg"
              />
              <div className="absolute h-[calc(100%_-_134.32px)] w-[calc(100%_-_1710.09px)] top-[38px] right-[481.12px] bottom-[96.32px] left-[1228.97px] rounded-[50%] bg-brand-support-1-pure shadow-[0px_2px_12px_#9b772c] box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="absolute h-[calc(100%_-_134.32px)] w-[calc(100%_-_1710.09px)] top-[15px] right-[238.89px] bottom-[119.32px] left-[1471.2px] rounded-[50%] bg-brand-support-1-pure shadow-[0px_2px_12px_#9b772c] box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="absolute h-[calc(100%_-_134.32px)] w-[calc(100%_-_1710.09px)] top-[36.63px] right-[721.47px] bottom-[97.7px] left-[988.62px] rounded-[50%] bg-brand-primary-pure shadow-[0px_2px_12px_#07496d] box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="absolute h-[calc(100%_-_134.32px)] w-[calc(100%_-_1710.09px)] top-[61px] right-[481.12px] bottom-[73.32px] left-[1228.97px] rounded-[50%] bg-brand-primary-pure shadow-[0px_2px_12px_#07496d] box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="absolute h-[calc(100%_-_134.32px)] w-[calc(100%_-_1710.09px)] top-[35px] right-[238.89px] bottom-[99.32px] left-[1471.2px] rounded-[50%] bg-brand-primary-pure shadow-[0px_2px_12px_#07496d] box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="absolute h-[calc(100%_-_134.32px)] w-[calc(100%_-_1710.09px)] top-[48px] right-[1441.58px] bottom-[86.32px] left-[268.52px] rounded-[50%] bg-brand-primary-pure shadow-[0px_2px_12px_#07496d] box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="absolute h-[calc(100%_-_134.32px)] w-[calc(100%_-_1710.09px)] top-[73.03px] right-[1197.47px] bottom-[61.29px] left-[512.62px] rounded-[50%] bg-brand-primary-pure shadow-[0px_2px_12px_#07496d] box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="absolute h-[calc(100%_-_134.32px)] w-[calc(100%_-_1710.09px)] top-[53px] right-[963.69px] bottom-[81.32px] left-[746.4px] rounded-[50%] bg-brand-primary-pure shadow-[0px_2px_12px_#07496d] box-border border-[1px] border-solid border-interface-surface-component" />
            </div>
            <div className="relative text-13xl leading-[100%] text-darkslategray-100 text-left hidden">
              Detach this instance
            </div>
          </div>
          <div className="self-stretch rounded-t-none rounded-b-2xl bg-interface-surface-component flex flex-row items-center justify-start p-4 gap-[16px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
              <div className="flex flex-row items-center justify-start gap-[5px]">
                <div className="relative rounded-sm bg-brand-primary-pure w-2 h-2" />
                <div className="relative">Pre-Acquisition</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[5px]">
                <div className="relative rounded-sm bg-brand-support-1-pure w-2 h-2" />
                <div className="relative">Post-Acquisition</div>
              </div>
              <div className="hidden flex-row items-center justify-start gap-[5px]">
                <div className="relative rounded-sm bg-teal-600 w-2 h-2" />
                <div className="relative">Series 3</div>
              </div>
              <div className="hidden flex-row items-center justify-start gap-[5px]">
                <div className="relative rounded-sm bg-social-dribbble w-2 h-2" />
                <div className="relative">Series 4</div>
              </div>
              <div className="hidden flex-row items-center justify-start gap-[5px]">
                <div className="relative rounded-sm bg-interface-text-subtitle w-2 h-2" />
                <div className="relative">Legend 5</div>
              </div>
            </div>
            <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden hidden flex-row items-start justify-start text-sm text-gray-800 border-[1px] border-solid border-gray-200">
              <div className="bg-primary-700 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-interface-surface-component">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus8.svg"
                />
                <div className="relative leading-[150%] font-medium">First</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright8.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus9.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Second
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright9.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus10.svg"
                />
                <div className="relative leading-[150%] font-medium">Third</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright10.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[757px] left-[136px] rounded-2xl shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] w-[605px] h-[770px] overflow-hidden flex flex-col items-start justify-start text-sm">
        <div className="self-stretch rounded-t-2xl rounded-b-none bg-interface-surface-component flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[16px] border-b-[1px] border-solid border-interface-stroke-default">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[4px] text-base">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Card Type
            </div>
            <div className="self-stretch relative text-sm leading-[20px] text-interface-text-subtitle hidden">
              Card Subtitle
            </div>
          </div>
          <div className="rounded-lg box-border w-[188px] hidden flex-col items-start justify-start p-3 text-interface-text-subtitle border-[1px] border-solid border-interface-stroke-default">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 relative leading-[125%]">By Type</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
          </div>
          <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden flex flex-row items-start justify-start text-interface-surface-component border-[1px] border-solid border-gray-200">
            <div className="bg-brand-primary-pure overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus11.svg"
              />
              <div className="relative leading-[150%] font-medium">Top 5</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright11.svg"
              />
            </div>
            <div className="hidden flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] text-gray-800 border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus12.svg"
              />
              <div className="relative leading-[150%] font-medium">Second</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright12.svg"
              />
            </div>
            <div className="bg-interface-surface-component flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] text-interface-text-title border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus13.svg"
              />
              <div className="relative leading-[150%] font-medium">
                Bottom 5
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright13.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/iconessentialfiltersquare2.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialfilteradd1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/iconessentialfiltersquare3.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialmoresquare1.svg"
              />
            </div>
          </div>
          <div className="hidden flex-row items-center justify-end gap-[12px]">
            <img
              className="relative w-4 h-4"
              alt=""
              src="/vuesaxlinearaddsquare1.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearlampon1.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearinfocircle1.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearmoresquare1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 bg-interface-surface-component overflow-hidden flex flex-col items-center justify-center p-4 gap-[16px] text-base text-color-gray-text-teritiary">
          <div className="relative text-13xl leading-[100%] font-sig-12 text-darkslategray-100 hidden">
            Detach this instance
          </div>
          <div className="self-stretch rounded-2xl bg-interface-surface-component-muted overflow-hidden flex flex-row items-center justify-start relative">
            <div className="relative w-[173px] h-[110px] z-[0]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-36@2x.png"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-0 pr-6 pl-boundvariablesdata7 z-[1]">
              <div className="flex flex-col items-start justify-start text-interface-text-title font-poppins">
                <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                  Rewards
                </div>
                <div className="w-[149px] flex flex-row items-center justify-start gap-[23px] text-13xl font-text-xs-font-normal">
                  <b className="flex-1 relative tracking-[-0.02em]">288,000</b>
                  <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[18px] object-cover"
                        alt=""
                        src="/purepng6@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        60% from Azure
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[10.76px] object-cover"
                        alt=""
                        src="/2000pxamazon-web-services-logo6@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        20% from AWS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    Pre-acquisition
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-lg text-interface-text-title">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <b className="relative leading-[130%]">212,300</b>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/uparrow-16.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    LP Var%
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                      12.7%
                    </div>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                      alt=""
                      src="/uparrow-17.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[calc(50%_-_23px)] left-[148px] rounded-rounded-full bg-brand-highlight-600 flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 z-[2] text-center text-sm text-interface-surface-component border-[5px] border-solid border-interface-surface-component">
              <div className="relative leading-[150%] font-medium">#5</div>
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-interface-surface-component-muted overflow-hidden flex flex-row items-center justify-start relative">
            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-0 pr-boundvariablesdata7 pl-6 z-[0]">
              <div className="flex flex-col items-start justify-start text-interface-text-title font-poppins">
                <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                  Premier
                </div>
                <div className="w-[149px] flex flex-row items-center justify-start gap-[23px] text-13xl font-text-xs-font-normal">
                  <b className="flex-1 relative tracking-[-0.02em]">328,000</b>
                  <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[18px] object-cover"
                        alt=""
                        src="/purepng7@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        60% from Azure
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[10.76px] object-cover"
                        alt=""
                        src="/2000pxamazon-web-services-logo7@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        20% from AWS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    Pre-acquisition
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-lg text-interface-text-title">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <b className="relative leading-[130%]">212,300</b>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/uparrow-18.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    LP Var%
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                      12.7%
                    </div>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                      alt=""
                      src="/uparrow-19.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[173px] h-[110px] z-[1]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-35@2x.png"
              />
            </div>
            <div className="my-0 mx-[!important] absolute top-[calc(50%_-_23px)] right-[146px] rounded-rounded-full bg-brand-highlight-600 flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 z-[2] text-center text-sm text-interface-surface-component border-[5px] border-solid border-interface-surface-component">
              <div className="relative leading-[150%] font-medium">#4</div>
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-interface-surface-component-muted overflow-hidden flex flex-row items-center justify-start relative">
            <div className="relative w-[173px] h-[110px] z-[0]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-38@2x.png"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-0 pr-6 pl-boundvariablesdata7 z-[1]">
              <div className="flex flex-col items-start justify-start text-interface-text-title font-poppins">
                <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                  Gold Card
                </div>
                <div className="w-[149px] flex flex-row items-center justify-start gap-[23px] text-13xl font-text-xs-font-normal">
                  <b className="flex-1 relative tracking-[-0.02em]">288,000</b>
                  <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[18px] object-cover"
                        alt=""
                        src="/purepng8@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        60% from Azure
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[10.76px] object-cover"
                        alt=""
                        src="/2000pxamazon-web-services-logo8@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        20% from AWS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    Pre-acquisition
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-lg text-interface-text-title">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <b className="relative leading-[130%]">212,300</b>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/uparrow-110.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    LP Var%
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                      12.7%
                    </div>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                      alt=""
                      src="/uparrow-111.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[calc(50%_-_23px)] left-[148px] rounded-rounded-full bg-brand-highlight-600 flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 z-[2] text-center text-sm text-interface-surface-component border-[5px] border-solid border-interface-surface-component">
              <div className="relative leading-[150%] font-medium">#3</div>
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-interface-surface-component-muted overflow-hidden flex flex-row items-center justify-start relative">
            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-0 pr-boundvariablesdata7 pl-6 z-[0]">
              <div className="flex flex-col items-start justify-start text-interface-text-title font-poppins">
                <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                  Platinum Card
                </div>
                <div className="w-[149px] flex flex-row items-center justify-start gap-[23px] text-13xl font-text-xs-font-normal">
                  <b className="flex-1 relative tracking-[-0.02em]">328,000</b>
                  <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[18px] object-cover"
                        alt=""
                        src="/purepng9@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        60% from Azure
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[10.76px] object-cover"
                        alt=""
                        src="/2000pxamazon-web-services-logo9@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        20% from AWS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    Pre-acquisition
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-lg text-interface-text-title">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <b className="relative leading-[130%]">212,300</b>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/uparrow-112.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    LP Var%
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                      12.7%
                    </div>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                      alt=""
                      src="/uparrow-113.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[173px] h-[110px] z-[1]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-37@2x.png"
              />
            </div>
            <div className="my-0 mx-[!important] absolute top-[calc(50%_-_23px)] right-[146px] rounded-rounded-full bg-brand-highlight-600 flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 z-[2] text-center text-sm text-interface-surface-component border-[5px] border-solid border-interface-surface-component">
              <div className="relative leading-[150%] font-medium">#2</div>
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-interface-surface-component-muted overflow-hidden flex flex-row items-center justify-start relative">
            <div className="relative w-[173px] h-[110px] z-[0]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-361@2x.png"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-0 pr-6 pl-boundvariablesdata7 z-[1]">
              <div className="flex flex-col items-start justify-start text-interface-text-title font-poppins">
                <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                  World Card
                </div>
                <div className="w-[149px] flex flex-row items-center justify-start gap-[23px] text-13xl font-text-xs-font-normal">
                  <b className="flex-1 relative tracking-[-0.02em]">288,000</b>
                  <div className="hidden flex-col items-start justify-center gap-[5px] text-base text-light-theme-text-default">
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[18px] object-cover"
                        alt=""
                        src="/purepng10@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        60% from Azure
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-1 gap-[16px]">
                      <img
                        className="relative w-[18px] h-[10.76px] object-cover"
                        alt=""
                        src="/2000pxamazon-web-services-logo10@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[24px]">
                        20% from AWS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    Pre-acquisition
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-lg text-interface-text-title">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <b className="relative leading-[130%]">212,300</b>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/uparrow-114.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-2.5 px-0">
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-semibold hidden">
                    .
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-interface-text-subtitle">
                    LP Var%
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2px] text-brand-highlight-600">
                  <div className="flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
                      12.7%
                    </div>
                    <img
                      className="relative w-[10.69px] h-[13px] overflow-hidden shrink-0"
                      alt=""
                      src="/uparrow-115.svg"
                    />
                  </div>
                  <div className="relative text-xs tracking-[-0.02em] leading-[18px] text-color-gray-text-teritiary hidden">
                    change
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[calc(50%_-_23px)] left-[148px] rounded-rounded-full bg-brand-highlight-600 flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 z-[2] text-center text-sm text-interface-surface-component border-[5px] border-solid border-interface-surface-component">
              <div className="relative leading-[150%] font-medium">#1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[757px] left-[765px] rounded-2xl w-[605px] h-[770px] overflow-hidden flex flex-col items-center justify-start py-0.5 px-0 box-border text-sm text-interface-surface-component">
        <div className="self-stretch rounded-t-2xl rounded-b-none bg-interface-surface-component flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[16px] z-[0] text-interface-text-title">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[4px] text-base">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Branches
            </div>
            <div className="self-stretch relative text-sm leading-[20px] text-interface-text-subtitle hidden">
              Card Subtitle
            </div>
          </div>
          <div className="rounded-lg box-border w-[188px] hidden flex-col items-start justify-start p-3 text-interface-text-subtitle border-[1px] border-solid border-interface-stroke-default">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 relative leading-[125%]">By Type</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevrondown2.svg"
              />
            </div>
          </div>
          <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden flex flex-row items-start justify-start text-interface-surface-component border-[1px] border-solid border-gray-200">
            <div className="bg-brand-primary-pure overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus14.svg"
              />
              <div className="relative leading-[150%] font-medium">Top 5</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright14.svg"
              />
            </div>
            <div className="hidden flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] text-gray-800 border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus15.svg"
              />
              <div className="relative leading-[150%] font-medium">Second</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright15.svg"
              />
            </div>
            <div className="bg-interface-surface-component-muted flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] text-interface-text-title border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus16.svg"
              />
              <div className="relative leading-[150%] font-medium">
                Bottom 5
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright16.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/iconessentialfiltersquare4.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialfilteradd2.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/iconessentialfiltersquare5.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialmoresquare2.svg"
              />
            </div>
          </div>
          <div className="hidden flex-row items-center justify-end gap-[12px]">
            <img
              className="relative w-4 h-4"
              alt=""
              src="/vuesaxlinearaddsquare2.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearlampon2.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearinfocircle2.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearmoresquare2.svg"
            />
          </div>
        </div>
        <div className="self-stretch relative h-[694px] z-[1]">
          <img
            className="absolute top-[0px] left-[0px] w-[1046px] h-[703px] object-cover"
            alt=""
            src="/image-41@2x.png"
          />
          <div className="absolute bottom-[24px] left-[16px] flex flex-col items-center justify-end gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <img
                className="relative w-8 h-8 mix-blend-normal"
                alt=""
                src="/subtract.svg"
              />
              <img
                className="relative w-8 h-8 mix-blend-normal"
                alt=""
                src="/map--basictools--plus.svg"
              />
              <img
                className="relative w-8 h-8"
                alt=""
                src="/map--basictools--minus.svg"
              />
            </div>
            <img
              className="relative rounded-[7px] w-10 h-10 object-cover"
              alt=""
              src="/image-15@2x.png"
            />
          </div>
        </div>
        <div className="absolute my-0 mx-[!important] top-[319px] left-[289px] shadow-[0px_17px_18px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.15)] w-[66px] h-[63px] z-[2]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxbulklocation.svg"
          />
          <b className="absolute top-[18px] left-[28px] leading-[125%]">3</b>
        </div>
        <div className="absolute my-0 mx-[!important] top-[231px] left-[109px] shadow-[0px_17px_18px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.15)] w-[66px] h-[63px] z-[3]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxbulklocation1.svg"
          />
          <b className="absolute top-[18px] left-[28px] leading-[125%]">1</b>
        </div>
        <div className="absolute my-0 mx-[!important] top-[494px] left-[123px] shadow-[0px_17px_18px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.15)] w-[66px] h-[63px] z-[4]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxbulklocation2.svg"
          />
          <b className="absolute top-[18px] left-[28px] leading-[125%]">5</b>
        </div>
        <div className="absolute my-0 mx-[!important] top-[489px] left-[394px] shadow-[0px_17px_18px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.15)] w-[66px] h-[63px] z-[5]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxbulklocation3.svg"
          />
          <b className="absolute top-[18px] left-[28px] leading-[125%]">2</b>
        </div>
        <div className="absolute my-0 mx-[!important] top-[580px] left-[322px] shadow-[0px_17px_18px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.15)] w-[66px] h-[63px] z-[6]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxbulklocation4.svg"
          />
          <b className="absolute top-[18px] left-[28px] leading-[125%]">4</b>
        </div>
        <div className="my-0 mx-[!important] absolute top-[106px] left-[16px] w-[149px] flex flex-row items-center justify-start z-[7]">
          <div className="self-stretch flex-1 rounded-lg bg-neutral-50 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata5 pr-[19px] pl-boundvariablesdata6 gap-[8px]">
            <img className="relative w-5 h-3.5" alt="" src="/flags--bh.svg" />
            <div className="relative leading-[150%] font-medium">Bahrain</div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/chevrondown3.svg"
            />
          </div>
          <div className="rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-interface-text-title box-border w-[229px] hidden flex-col items-start justify-start p-3 text-gray-400 border-[1px] border-solid border-gray-600">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="self-stretch flex-1 relative leading-[125%] flex items-center">
                State
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevrondown4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[757px] left-[1394px] rounded-2xl shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] w-[494px] h-[373px] flex flex-col items-start justify-start text-sm text-interface-text-subtitle">
        <div className="self-stretch rounded-t-2xl rounded-b-none bg-interface-surface-component flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[16px] text-interface-text-title border-b-[1px] border-solid border-interface-stroke-default">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[4px] text-base">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Customer Segments
            </div>
            <div className="self-stretch relative text-sm leading-[20px] text-interface-text-subtitle">
              By Age
            </div>
          </div>
          <div className="rounded-lg box-border w-[188px] hidden flex-col items-start justify-start p-3 text-interface-text-subtitle border-[1px] border-solid border-interface-stroke-default">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 relative leading-[125%]">Age</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevrondown5.svg"
              />
            </div>
          </div>
          <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden hidden flex-row items-start justify-start text-gray-800 border-[1px] border-solid border-gray-200">
            <div className="bg-primary-700 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-interface-surface-component">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus17.svg"
              />
              <div className="relative leading-[150%] font-medium">First</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright17.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus18.svg"
              />
              <div className="relative leading-[150%] font-medium">Second</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright18.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus19.svg"
              />
              <div className="relative leading-[150%] font-medium">Third</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright19.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/iconessentialfiltersquare6.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialfilteradd3.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/iconessentialfiltersquare7.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialmoresquare3.svg"
              />
            </div>
          </div>
          <div className="hidden flex-row items-center justify-end gap-[12px]">
            <img
              className="relative w-4 h-4"
              alt=""
              src="/vuesaxlinearaddsquare3.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearlampon3.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearinfocircle3.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearmoresquare3.svg"
            />
          </div>
        </div>
        <div className="self-stretch bg-interface-surface-component h-[263px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border gap-[8px] text-center">
          <div className="flex-1 flex flex-row items-end justify-center py-4 pr-0 pl-10 relative gap-[16px]">
            <div className="my-0 mx-[!important] absolute h-[86.03%] w-[92.42%] top-[6.76%] right-[0.22%] bottom-[7.21%] left-[7.36%] flex flex-col items-start justify-between z-[0] text-right">
              <div className="self-stretch relative h-px">
                <div className="absolute top-[-946.4%] left-[-8.13%] leading-[134%]">
                  10M
                </div>
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
              </div>
              <div className="self-stretch relative h-px">
                <div className="absolute top-[-946.4%] left-[-6.72%] leading-[134%]">
                  8M
                </div>
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
              </div>
              <div className="self-stretch relative h-px">
                <div className="absolute top-[-946.4%] left-[-6.72%] leading-[134%]">
                  6M
                </div>
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
              </div>
              <div className="self-stretch relative h-px">
                <div className="absolute top-[-946.4%] left-[-6.72%] leading-[134%]">
                  4M
                </div>
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
              </div>
              <div className="self-stretch relative h-px">
                <div className="absolute top-[-946.4%] left-[-6.49%] leading-[134%]">
                  2M
                </div>
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
              </div>
              <div className="self-stretch relative h-px">
                <div className="absolute top-[-946.4%] left-[-3.68%] leading-[134%]">
                  0
                </div>
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
              </div>
            </div>
            <div className="flex-1 relative h-[191.17px] z-[1]">
              <div className="absolute bottom-[-30.83px] left-[calc(50%_-_23.8px)] leading-[134%]">
                31 - 40
              </div>
              <div className="absolute h-[80.03%] w-[calc(100%_-_37.6px)] top-[19.92%] right-[37.6px] bottom-[0.04%] left-[0px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
              </div>
              <div className="absolute h-[99.91%] w-[calc(100%_-_37.6px)] top-[0.05%] right-[-0.4px] bottom-[0.04%] left-[38px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-support-1-pure" />
              </div>
              <div className="absolute top-[-18px] left-[calc(50%_-_9.8px)] text-3xs leading-[10px] text-body-text">
                10M
              </div>
            </div>
            <div className="flex-1 relative h-[141px] z-[2]">
              <div className="absolute bottom-[-31px] left-[calc(50%_-_22.8px)] leading-[134%]">
                51 - 60
              </div>
              <div className="absolute h-[80.03%] w-[calc(100%_-_37.6px)] top-[19.92%] right-[37.6px] bottom-[0.04%] left-[0px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
              </div>
              <div className="absolute h-[99.91%] w-[calc(100%_-_37.6px)] top-[0.05%] right-[-0.4px] bottom-[0.04%] left-[38px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-support-1-pure" />
              </div>
              <div className="absolute top-[-18px] left-[calc(50%_-_9.8px)] text-3xs leading-[10px] text-body-text">
                10M
              </div>
            </div>
            <div className="flex-1 relative h-[77px] z-[3]">
              <div className="absolute bottom-[-31px] left-[calc(50%_-_14.8px)] leading-[134%]">
                60 +
              </div>
              <div className="absolute h-[80.03%] w-[calc(100%_-_37.6px)] top-[19.92%] right-[37.6px] bottom-[0.04%] left-[0px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
              </div>
              <div className="absolute h-[99.91%] w-[calc(100%_-_37.6px)] top-[0.05%] right-[-0.4px] bottom-[0.04%] left-[38px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-support-1-pure" />
              </div>
              <div className="absolute top-[-18px] left-[calc(50%_-_9.8px)] text-3xs leading-[10px] text-body-text">
                10M
              </div>
            </div>
            <div className="flex-1 relative h-[68px] z-[4]">
              <div className="absolute bottom-[-31px] left-[calc(50%_-_19.8px)] leading-[134%]">
                18-30
              </div>
              <div className="absolute h-[80.03%] w-[calc(100%_-_37.6px)] top-[19.92%] right-[37.6px] bottom-[0.04%] left-[0px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
              </div>
              <div className="absolute h-[99.91%] w-[calc(100%_-_37.6px)] top-[0.05%] right-[-0.4px] bottom-[0.04%] left-[38px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-support-1-pure" />
              </div>
              <div className="absolute top-[-18px] left-[calc(50%_-_9.8px)] text-3xs leading-[10px] text-body-text">
                10M
              </div>
            </div>
            <div className="flex-1 relative h-[30px] z-[5]">
              <div className="absolute bottom-[-31px] left-[calc(50%_-_22.8px)] leading-[134%]">
                41 - 50
              </div>
              <div className="absolute h-[80.03%] w-[calc(100%_-_37.6px)] top-[19.92%] right-[37.6px] bottom-[0.04%] left-[0px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
              </div>
              <div className="absolute h-[99.91%] w-[calc(100%_-_37.6px)] top-[0.05%] right-[-0.4px] bottom-[0.04%] left-[38px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-support-1-pure" />
              </div>
              <div className="absolute top-[-18px] left-[calc(50%_-_9.8px)] text-3xs leading-[10px] text-body-text">
                10M
              </div>
            </div>
            <div className="absolute my-0 mx-[!important] w-[20.35%] top-[calc(50%_+_12.91px)] left-[-2.6%] leading-[134%] text-tertiary-text-light hidden items-end justify-center h-[17.18px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[6]">
              Y-axis caption
            </div>
            <div className="absolute my-0 mx-[!important] h-[34.41%] w-[11.37%] top-[51.4%] right-[3.79%] bottom-[14.18%] left-[84.85%] z-[7] text-secondary-text">
              <div className="absolute bottom-[-31.2px] left-[calc(50%_-_12.26px)] leading-[134%] hidden">
                Jun
              </div>
              <div className="absolute h-full w-[calc(100%_+_0.49px)] top-[0%] right-[-0.49px] bottom-[0%] left-[0px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-charts-color-0 hidden" />
              </div>
              <div className="absolute top-[-18px] left-[15px] text-3xs leading-[10px] text-body-text text-left hidden">
                4
              </div>
            </div>
          </div>
          <div className="relative text-13xl leading-[100%] font-sig-12 text-darkslategray-100 text-left hidden">
            Detach this instance
          </div>
        </div>
        <div className="self-stretch rounded-t-none rounded-b-2xl bg-interface-surface-component flex flex-row items-center justify-start p-4 gap-[16px] text-3xs">
          <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-brand-primary-pure w-2 h-2" />
              <div className="relative">Pre-acquisition</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-brand-support-1-pure w-2 h-2" />
              <div className="relative">Post-acquisition</div>
            </div>
            <div className="hidden flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-teal-600 w-2 h-2" />
              <div className="relative">Series 3</div>
            </div>
            <div className="hidden flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-peachpuff w-2 h-2" />
              <div className="relative">Series 4</div>
            </div>
            <div className="hidden flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-interface-text-subtitle w-2 h-2" />
              <div className="relative">Legend 5</div>
            </div>
          </div>
          <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden hidden flex-row items-start justify-start text-sm text-gray-800 border-[1px] border-solid border-gray-200">
            <div className="bg-primary-700 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-interface-surface-component">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus20.svg"
              />
              <div className="relative leading-[150%] font-medium">First</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright20.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus21.svg"
              />
              <div className="relative leading-[150%] font-medium">Second</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright21.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus22.svg"
              />
              <div className="relative leading-[150%] font-medium">Third</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright22.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1154px] left-[1394px] rounded-2xl shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] w-[494px] flex flex-col items-start justify-start text-sm">
        <div className="self-stretch rounded-t-2xl rounded-b-none bg-interface-surface-component flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[16px] border-b-[1px] border-solid border-interface-stroke-default">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[4px] text-base">
            <div className="self-stretch relative leading-[150%] font-semibold">
              By Products
            </div>
            <div className="self-stretch relative text-sm leading-[20px] text-interface-text-subtitle hidden">
              Card Subtitle
            </div>
          </div>
          <div className="rounded-lg box-border w-[188px] hidden flex-col items-start justify-start p-3 text-interface-text-subtitle border-[1px] border-solid border-interface-stroke-default">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 relative leading-[125%]">By Type</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevrondown6.svg"
              />
            </div>
          </div>
          <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden hidden flex-row items-start justify-start text-gray-800 border-[1px] border-solid border-gray-200">
            <div className="bg-primary-700 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-interface-surface-component">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus23.svg"
              />
              <div className="relative leading-[150%] font-medium">First</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright23.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus24.svg"
              />
              <div className="relative leading-[150%] font-medium">Second</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright24.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus25.svg"
              />
              <div className="relative leading-[150%] font-medium">Third</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright25.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/iconessentialfiltersquare8.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialfilteradd4.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
              <img
                className="relative w-6 h-6 hidden"
                alt=""
                src="/iconessentialfiltersquare9.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/iconessentialmoresquare4.svg"
              />
            </div>
          </div>
          <div className="hidden flex-row items-center justify-end gap-[12px]">
            <img
              className="relative w-4 h-4"
              alt=""
              src="/vuesaxlinearaddsquare4.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearlampon4.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearinfocircle4.svg"
            />
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/iconsaxlinearmoresquare4.svg"
            />
          </div>
        </div>
        <div className="self-stretch bg-interface-surface-component h-[265px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border gap-[8px] text-13xl text-darkslategray-100 font-sig-12">
          <div className="relative leading-[100%] hidden">
            Detach this instance
          </div>
          <div className="relative w-[464px] h-[221px] overflow-hidden shrink-0 text-center text-xs text-interface-text-subtitle font-text-xs-font-normal">
            <div className="absolute w-[87.58%] right-[4.55%] bottom-[23px] left-[7.86%] flex flex-row items-start justify-between">
              <div className="relative w-px h-2.5" />
              <div className="relative w-px h-2.5">
                <div className="absolute w-[4000%] bottom-[-23px] left-[-4002.44%] leading-[150%] flex items-end justify-center">
                  50
                </div>
                <div className="absolute h-full w-full top-[0%] right-[2102.44%] bottom-[0%] left-[-2102.44%] bg-interface-surface-page" />
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[3900%] bottom-[-23px] left-[-3756.35%] leading-[150%] flex items-end justify-center">
                  100
                </div>
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[3900%] bottom-[-23px] left-[-3610.25%] leading-[150%] flex items-end justify-center">
                  150
                </div>
                <div className="absolute h-full w-full top-[0%] right-[1710.25%] bottom-[0%] left-[-1710.25%] bg-interface-surface-page" />
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[4000%] bottom-[-23px] left-[-3464.16%] leading-[150%] flex items-end justify-center">
                  200
                </div>
                <div className="absolute h-full w-full top-[0%] right-[1464.16%] bottom-[0%] left-[-1464.16%] bg-interface-surface-page" />
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[4000%] bottom-[-23px] left-[-3218.07%] leading-[150%] flex items-end justify-center">
                  250
                </div>
                <div className="absolute h-full w-full top-[0%] right-[1318.07%] bottom-[0%] left-[-1318.07%] bg-interface-surface-page" />
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[3900%] bottom-[-23px] left-[-2971.87%] leading-[150%] flex items-end justify-center">
                  300
                </div>
                <div className="absolute h-full w-full top-[0%] right-[1071.88%] bottom-[0%] left-[-1071.87%] bg-interface-surface-page" />
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[4000%] bottom-[-23px] left-[-2825.78%] leading-[150%] flex items-end justify-center">
                  350
                </div>
                <div className="absolute h-full w-full top-[0%] right-[825.78%] bottom-[0%] left-[-825.78%] bg-interface-surface-page" />
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[4000%] bottom-[-23px] left-[-2579.7%] leading-[150%] flex items-end justify-center">
                  400
                </div>
                <div className="absolute h-full w-full top-[0%] right-[579.7%] bottom-[0%] left-[-579.7%] bg-interface-surface-page" />
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[3900%] bottom-[-23px] left-[-2333.59%] leading-[150%] flex items-end justify-center">
                  450
                </div>
                <div className="absolute h-full w-full top-[0%] right-[433.59%] bottom-[0%] left-[-433.59%] bg-interface-surface-page" />
              </div>
              <div className="relative w-px h-2.5">
                <div className="absolute w-[4000%] bottom-[-23px] left-[-2187.5%] leading-[150%] flex items-end justify-center">
                  500
                </div>
                <div className="absolute h-full w-full top-[0%] right-[287.5%] bottom-[0%] left-[-287.5%] bg-interface-surface-page" />
              </div>
            </div>
            <div className="absolute h-[4.52%] w-[0.22%] top-[85.07%] right-[78.45%] bottom-[10.41%] left-[21.34%] bg-interface-surface-page" />
            <div className="absolute h-[89.59%] w-[97.93%] top-[-0.9%] right-[2.43%] bottom-[11.31%] left-[-0.36%] overflow-hidden flex flex-col items-start justify-between text-right text-sm">
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.97%] top-[-18.85%] left-[-0.04%] leading-[134%] flex items-center">
                  450k
                </div>
                <div className="absolute h-full w-[92.52%] top-[881.15%] right-[0.04%] bottom-[-881.15%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.98%] top-[-70.02%] left-[-0.05%] leading-[134%] flex items-center">
                  400k
                </div>
                <div className="absolute h-full w-[92.52%] top-[891.11%] right-[0.04%] bottom-[-891.11%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[6.48%] top-[-40.04%] left-[-0.55%] leading-[134%] flex items-center">
                  350k
                </div>
                <div className="absolute h-full w-[92.52%] top-[901.17%] right-[0.04%] bottom-[-901.17%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.98%] top-[-109.96%] left-[-0.05%] leading-[134%] flex items-center">
                  300k
                </div>
                <div className="absolute h-full w-[92.52%] top-[911.13%] right-[0.04%] bottom-[-911.13%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.98%] top-[-79.98%] left-[-0.05%] leading-[134%] flex items-center">
                  250k
                </div>
                <div className="absolute h-full w-[92.52%] top-[921.19%] right-[0.04%] bottom-[-921.19%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.97%] top-[-150%] left-[-0.04%] leading-[134%] flex items-center">
                  200k
                </div>
                <div className="absolute h-full w-[92.52%] top-[831.15%] right-[0.04%] bottom-[-831.15%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.48%] top-[-120.02%] left-[0.45%] leading-[134%] flex items-center">
                  150k
                </div>
                <div className="absolute h-full w-[92.52%] top-[841.11%] right-[0.04%] bottom-[-841.11%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.97%] top-[-27.25%] left-[-0.04%] leading-[134%] flex items-center">
                  100k
                </div>
                <div className="absolute h-full w-[92.52%] top-[851.17%] right-[0.04%] bottom-[-851.17%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.04%] top-[-114.16%] left-[0.89%] leading-[134%] flex items-center">
                  50k
                </div>
                <div className="absolute h-full w-[92.52%] top-[861.13%] right-[0.04%] bottom-[-861.13%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[5.22%] top-[-101.07%] left-[0.7%] leading-[134%] flex items-center">
                  0
                </div>
                <div className="absolute h-full w-[92.52%] top-[871.19%] right-[0.04%] bottom-[-871.19%] left-[7.43%] bg-interface-surface-page" />
              </div>
              <div className="relative w-[602px] h-px">
                <div className="absolute w-[1.5%] top-[-65.23%] left-[4.4%] leading-[134%] flex items-center">
                  0
                </div>
                <div className="absolute h-full w-[92.52%] top-[881.15%] right-[0.04%] bottom-[-881.15%] left-[7.43%] bg-interface-surface-page" />
              </div>
            </div>
            <img
              className="absolute top-[calc(50%_-_98.5px)] left-[calc(50%_-_183.16px)] w-[494.6px] h-[183.13px]"
              alt=""
              src="/data.svg"
            />
            <img
              className="absolute top-[calc(50%_+_10.5px)] left-[calc(50%_-_195px)] w-[53px] h-[53px]"
              alt=""
              src="/partsbubble.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-t-none rounded-b-2xl bg-interface-surface-component flex flex-row items-center justify-start p-4 gap-[16px] text-3xs text-interface-text-subtitle">
          <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-brand-primary-pure w-2 h-2" />
              <div className="relative">Rewards Credit Card</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-brand-highlight-600 w-2 h-2" />
              <div className="relative"> Premier Credit Card</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-teal-600 w-2 h-2" />
              <div className="relative">{`Gold & Classic Card`}</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-peachpuff w-2 h-2" />
              <div className="relative">Platinum Card</div>
            </div>
            <div className="hidden flex-row items-center justify-start gap-[5px]">
              <div className="relative rounded-sm bg-interface-text-subtitle w-2 h-2" />
              <div className="relative">Legend 5</div>
            </div>
          </div>
          <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden hidden flex-row items-start justify-start text-sm text-gray-800 border-[1px] border-solid border-gray-200">
            <div className="bg-primary-700 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-interface-surface-component">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus26.svg"
              />
              <div className="relative leading-[150%] font-medium">First</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright26.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus27.svg"
              />
              <div className="relative leading-[150%] font-medium">Second</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright27.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/cartplus28.svg"
              />
              <div className="relative leading-[150%] font-medium">Third</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowright28.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1551px] left-[136px] w-[1752px] h-[373px] flex flex-row items-start justify-start text-sm">
        <div className="flex-1 rounded-2xl shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t-2xl rounded-b-none bg-interface-surface-component box-border h-20 flex flex-row items-center justify-start py-boundvariablesdata3 px-boundvariablesdata gap-[16px] border-b-[1px] border-solid border-interface-stroke-default">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[4px] text-base">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Category / Department
              </div>
              <div className="self-stretch relative text-sm leading-[20px] text-interface-text-subtitle">
                Revenue by different dimensions
              </div>
            </div>
            <div className="rounded-lg box-border w-[188px] hidden flex-col items-start justify-start p-3 text-interface-text-subtitle border-[1px] border-solid border-interface-stroke-default">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[125%]">By Type</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/chevrondown7.svg"
                />
              </div>
            </div>
            <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden hidden flex-row items-start justify-start text-interface-surface-component border-[1px] border-solid border-gray-200">
              <div className="bg-brand-primary-pure overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus29.svg"
                />
                <div className="relative leading-[150%] font-medium">Top 5</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright29.svg"
                />
              </div>
              <div className="hidden flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] text-gray-800 border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus30.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Second
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright30.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] text-interface-text-title border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus31.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Bottom 5
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright31.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/iconessentialfiltersquare10.svg"
                />
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconessentialfilteradd5.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start p-2 gap-[8px]">
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/iconessentialfiltersquare11.svg"
                />
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/iconessentialmoresquare5.svg"
                />
              </div>
            </div>
            <div className="hidden flex-row items-center justify-end gap-[12px]">
              <img
                className="relative w-4 h-4"
                alt=""
                src="/vuesaxlinearaddsquare5.svg"
              />
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearlampon5.svg"
              />
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearinfocircle5.svg"
              />
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearmoresquare5.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-interface-surface-component h-[331px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-4 box-border gap-[8px] text-interface-text-subtitle">
            <div className="self-stretch relative w-[1708px] text-center">
              <div className="absolute w-[5.5%] top-[calc(50%_+_21.5px)] left-[-2.6%] leading-[134%] text-tertiary-text-light hidden items-end justify-center h-[63.51px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                Y-axis caption
              </div>
              <div className="absolute h-[79.25%] w-[94.72%] top-[7.88%] right-[0%] bottom-[12.86%] left-[5.28%] flex flex-col items-start justify-between text-right">
                <div className="self-stretch relative h-px">
                  <div className="absolute top-[-946.4%] left-[-4.97%] leading-[134%]">
                    250,000
                  </div>
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
                </div>
                <div className="self-stretch relative h-px">
                  <div className="absolute top-[-946.4%] left-[-4.97%] leading-[134%]">
                    200,000
                  </div>
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
                </div>
                <div className="self-stretch relative h-px">
                  <div className="absolute top-[-946.4%] left-[-4.85%] leading-[134%]">
                    150,000
                  </div>
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
                </div>
                <div className="self-stretch relative h-px">
                  <div className="absolute top-[-946.4%] left-[-4.85%] leading-[134%]">
                    100,000
                  </div>
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
                </div>
                <div className="self-stretch relative h-px">
                  <div className="absolute top-[-946.4%] left-[-4.42%] leading-[134%]">
                    50,000
                  </div>
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
                </div>
                <div className="self-stretch relative h-px">
                  <div className="absolute top-[-946.4%] left-[-2.07%] leading-[134%]">
                    0
                  </div>
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
                </div>
              </div>
              <div className="absolute h-[8.49%] w-[3.69%] top-[78.77%] right-[86.12%] bottom-[12.74%] left-[10.2%] text-left text-3xs">
                <div className="absolute top-[-159.91px] left-[-75.15px] w-[1596px] flex flex-row items-start justify-start gap-[40px]">
                  <div className="flex-1 h-[211px] flex flex-col items-start justify-start gap-[12px] z-[0]">
                    <div className="self-stretch flex flex-row items-end justify-center gap-[4px]">
                      <div className="flex-1 relative h-[180px]">
                        <div className="absolute h-[100.56%] w-[calc(100%_-_0.25px)] top-[-0.35%] right-[0.25px] bottom-[-0.21%] left-[0px]">
                          <div className="absolute h-[106.11%] w-full top-[-5.9%] right-[0%] bottom-[-0.21%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                          <div className="absolute h-[76.67%] w-full top-[23.54%] right-[0%] bottom-[-0.21%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[45%] w-full top-[55.21%] right-[0%] bottom-[-0.21%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[4.42%] w-[51.25%] top-[-14.92%] left-[23.75%] leading-[10px] flex items-center">
                            200,000
                          </div>
                          <div className="absolute h-[26.11%] w-full top-[74.1%] right-[0%] bottom-[-0.21%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                        </div>
                      </div>
                      <div className="flex-1 relative h-[180px]">
                        <div className="absolute h-[121.67%] w-[99.69%] top-[-21.46%] right-[-0.62%] bottom-[-0.21%] left-[0.93%] rounded-t-2xl rounded-b-none bg-brand-highlight-600" />
                        <div className="absolute h-[4.44%] w-[51.09%] top-[-30.35%] left-[27.1%] leading-[10px] flex items-center">
                          225,000
                        </div>
                        <div className="absolute h-full w-[99.69%] top-[0.21%] right-[0.62%] bottom-[-0.21%] left-[-0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-500" />
                        <div className="absolute h-[81.11%] w-[100.93%] top-[19.1%] right-[-0.62%] bottom-[-0.21%] left-[-0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-400" />
                        <div className="absolute h-[42.78%] w-[99.69%] top-[57.43%] right-[0.62%] bottom-[-0.21%] left-[-0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-300" />
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[134%] text-center">
                      Jan 23
                    </div>
                  </div>
                  <div className="flex-1 h-[211px] flex flex-col items-center justify-end gap-[12px] z-[1]">
                    <div className="self-stretch flex flex-row items-end justify-center gap-[4px]">
                      <div className="flex-1 relative h-[180px]">
                        <div className="absolute h-full w-[calc(100%_-_0.25px)] top-[0%] right-[0.25px] bottom-[0%] left-[0px]">
                          <div className="absolute h-[128.33%] w-full top-[-28.12%] right-[0.63%] bottom-[-0.21%] left-[-0.62%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                          <div className="absolute h-[4.44%] w-[51.25%] top-[-37.01%] left-[26.88%] leading-[10px] flex items-center">
                            250,000
                          </div>
                          <div className="absolute h-[113.33%] w-full top-[-13.12%] right-[-0.62%] bottom-[-0.21%] left-[0.63%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[85%] w-full top-[15.21%] right-[-0.62%] bottom-[-0.21%] left-[0.63%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[43.33%] w-full top-[56.88%] right-[-0.62%] bottom-[-0.21%] left-[0.63%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                        </div>
                      </div>
                      <div className="flex-1 relative h-[257px]">
                        <div className="absolute h-[87.22%] w-[99.92%] top-[12.78%] right-[0.15%] bottom-[0%] left-[-0.08%] rounded-t-2xl rounded-b-none bg-brand-highlight-600" />
                        <div className="absolute h-[74.71%] w-[99.69%] top-[25.44%] right-[0%] bottom-[-0.15%] left-[0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-500" />
                        <div className="absolute h-[62.26%] w-[99.69%] top-[37.89%] right-[0%] bottom-[-0.15%] left-[0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-400" />
                        <div className="absolute h-[27.63%] w-[99.69%] top-[72.52%] right-[0%] bottom-[-0.15%] left-[0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-300" />
                        <div className="absolute h-[3.11%] w-[51.09%] top-[6.37%] left-[23.99%] leading-[10px] flex items-center">
                          245,000
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[134%] text-center">
                      Feb 23
                    </div>
                  </div>
                  <div className="flex-1 h-[211px] flex flex-col items-start justify-start gap-[12px] z-[2]">
                    <div className="self-stretch flex flex-row items-end justify-center gap-[4px]">
                      <div className="flex-1 relative h-[180px]">
                        <div className="absolute h-[84.44%] w-[calc(100%_-_0.25px)] top-[15.56%] right-[0.5px] bottom-[0%] left-[-0.25px]">
                          <div className="absolute h-[134.21%] w-full top-[-33.96%] right-[-0.31%] bottom-[-0.25%] left-[0.31%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                          <div className="absolute h-[5.26%] w-[51.25%] top-[-44.49%] left-[24.06%] leading-[10px] flex items-center">
                            215,000
                          </div>
                          <div className="absolute h-[108.55%] w-full top-[-8.3%] right-[-0.31%] bottom-[-0.25%] left-[0.31%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[88.82%] w-full top-[11.43%] right-[-0.31%] bottom-[-0.25%] left-[0.31%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[47.37%] w-full top-[52.88%] right-[-0.31%] bottom-[-0.25%] left-[0.31%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                        </div>
                      </div>
                      <div className="flex-1 relative h-[117px]">
                        <div className="absolute h-[199.15%] w-[100.93%] top-[-98.82%] right-[-0.62%] bottom-[-0.32%] left-[-0.31%] rounded-t-2xl rounded-b-none bg-brand-highlight-600" />
                        <div className="absolute h-[119.66%] w-[100.93%] top-[-19.34%] right-[-0.62%] bottom-[-0.32%] left-[-0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-500" />
                        <div className="absolute h-[76.92%] w-[100.93%] top-[23.4%] right-[-0.62%] bottom-[-0.32%] left-[-0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-400" />
                        <div className="absolute h-[36.75%] w-[100.93%] top-[63.57%] right-[-0.62%] bottom-[-0.32%] left-[-0.31%] rounded-t-lg rounded-b-none bg-brand-highlight-300" />
                        <div className="absolute h-[6.84%] w-[51.09%] top-[-112.5%] left-[24.61%] leading-[10px] flex items-center">
                          250,000
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[134%] text-center">
                      Mar 23
                    </div>
                  </div>
                  <div className="flex-1 h-[211px] flex flex-col items-start justify-start gap-[12px] z-[3]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-center gap-[4px]">
                      <div className="flex-1 relative h-[140px]">
                        <div className="absolute h-full w-[calc(100%_-_0.25px)] top-[0%] right-[0.25px] bottom-[0%] left-[0px]">
                          <div className="absolute h-[156.43%] w-full top-[-56.16%] right-[-0.62%] bottom-[-0.27%] left-[0.63%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                          <div className="absolute h-[5.71%] w-[51.25%] top-[-67.59%] left-[25.63%] leading-[10px] flex items-center">
                            230,000
                          </div>
                          <div className="absolute h-[133.57%] w-full top-[-33.3%] right-[-0.62%] bottom-[-0.27%] left-[0.63%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[65.71%] w-full top-[34.55%] right-[-0.62%] bottom-[-0.27%] left-[0.63%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[30.71%] w-full top-[69.55%] right-[-0.62%] bottom-[-0.27%] left-[0.63%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                        </div>
                      </div>
                      <div className="flex-1 relative h-[215px]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-highlight-600" />
                        <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-500" />
                        <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-400" />
                        <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-300" />
                        <div className="absolute h-[3.72%] w-[51.09%] top-[-7.73%] left-[25.23%] leading-[10px] flex items-center">
                          230,000
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[134%] text-center">
                      Apr 23
                    </div>
                  </div>
                  <div className="flex-1 h-[211px] flex flex-col items-start justify-start gap-[12px] z-[4]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-center gap-[4px]">
                      <div className="flex-1 relative h-[209px]">
                        <div className="absolute h-full w-[calc(100%_-_0.25px)] top-[0%] right-[0.25px] bottom-[0%] left-[0px]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                          <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                        </div>
                        <div className="absolute h-[3.83%] w-[51.09%] top-[-7.95%] left-[24.92%] leading-[10px] flex items-center">
                          210,000
                        </div>
                      </div>
                      <div className="flex-1 relative h-[163px]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-highlight-600" />
                        <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-500" />
                        <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-400" />
                        <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-300" />
                        <div className="absolute h-[4.91%] w-[51.09%] top-[-10.2%] left-[24.61%] leading-[10px] flex items-center">
                          180,000
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[134%] text-center">
                      May 23
                    </div>
                  </div>
                  <div className="flex-1 h-[211px] flex flex-col items-start justify-start gap-[12px] z-[5]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-center gap-[4px]">
                      <div className="flex-1 relative h-[190px]">
                        <div className="absolute h-full w-[calc(100%_-_0.25px)] top-[0%] right-[0.25px] bottom-[0%] left-[0px]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                          <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                        </div>
                        <div className="absolute h-[4.21%] w-[51.09%] top-[-8.75%] left-[24.3%] leading-[10px] flex items-center">
                          200,000
                        </div>
                      </div>
                      <div className="flex-1 relative h-[250px]">
                        <div className="absolute h-[87.22%] w-[99.69%] top-[12.78%] right-[0%] bottom-[0%] left-[0.31%] rounded-t-2xl rounded-b-none bg-brand-highlight-600" />
                        <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-500" />
                        <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-400" />
                        <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-300" />
                        <div className="absolute h-[3.2%] w-[51.09%] top-[6.15%] left-[23.99%] leading-[10px] flex items-center">
                          230,000
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[134%] text-center">
                      Jun 23
                    </div>
                  </div>
                  <div className="flex-1 h-[211px] flex flex-col items-start justify-start gap-[12px] z-[6]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-center gap-[4px]">
                      <div className="flex-1 relative h-[165px]">
                        <div className="absolute h-full w-[calc(100%_-_0.25px)] top-[0%] right-[0.25px] bottom-[0%] left-[0px]">
                          <div className="absolute h-[95.76%] w-full top-[4.47%] right-[0%] bottom-[-0.23%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                          <div className="absolute h-[4.85%] w-[51.25%] top-[-5.23%] left-[26.25%] leading-[10px] flex items-center">
                            140,000
                          </div>
                          <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                        </div>
                      </div>
                      <div className="flex-1 relative h-[232px]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-highlight-600" />
                        <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-500" />
                        <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-400" />
                        <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-300" />
                        <div className="absolute h-[3.45%] w-[51.09%] top-[-7.17%] left-[25.86%] leading-[10px] flex items-center">
                          250,000
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[134%] text-center">
                      Jul 23
                    </div>
                  </div>
                  <div className="flex-1 h-[211px] flex flex-col items-start justify-start gap-[12px] z-[7]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-center gap-[4px]">
                      <div className="flex-1 relative h-[214px]">
                        <div className="absolute h-full w-[calc(100%_-_0.25px)] top-[0%] right-[0.25px] bottom-[0%] left-[0px]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                          <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-700" />
                          <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-2xl rounded-b-none bg-brand-primary-pure" />
                        </div>
                        <div className="absolute h-[3.74%] w-[51.09%] top-[-7.77%] left-[25.55%] leading-[10px] flex items-center">
                          230,000
                        </div>
                      </div>
                      <div className="flex-1 relative h-[137px]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-600" />
                        <div className="absolute h-[71.67%] w-full top-[28.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-500" />
                        <div className="absolute h-[46.67%] w-full top-[53.33%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-400" />
                        <div className="absolute h-[26.11%] w-full top-[73.89%] right-[0%] bottom-[0%] left-[0%] rounded-t-lg rounded-b-none bg-brand-highlight-300" />
                        <div className="absolute h-[5.84%] w-[51.09%] top-[-12.13%] left-[25.23%] leading-[10px] flex items-center">
                          150,000
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[134%] text-center">
                      Aug 23
                    </div>
                  </div>
                  <img
                    className="absolute my-0 mx-[!important] top-[36px] left-[4px] rounded-4xs w-[1592px] h-[82px] z-[8]"
                    alt=""
                    src="/vector-389.svg"
                  />
                  <img
                    className="absolute my-0 mx-[!important] top-[-5.12px] left-[1102px] rounded-4xs w-[496px] h-[40.38px] z-[9]"
                    alt=""
                    src="/vector-390.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[249px] flex flex-col items-center justify-between">
              <div className="relative leading-[134%] flex items-center w-9 h-[22px] shrink-0">
                100%
              </div>
              <div className="relative leading-[134%] flex items-center w-[29px] h-[23px] shrink-0">
                80%
              </div>
              <div className="relative leading-[134%] flex items-center w-[29px] h-[22px] shrink-0">
                60%
              </div>
              <div className="relative leading-[134%] flex items-center w-[30px] h-[23px] shrink-0">
                40%
              </div>
              <div className="relative leading-[134%] flex items-center w-[29px] h-[22px] shrink-0">
                20%
              </div>
              <div className="self-stretch relative leading-[134%] flex items-center h-[23px] shrink-0">
                0
              </div>
            </div>
            <div className="relative text-13xl leading-[100%] font-sig-12 text-darkslategray-100 hidden">
              Detach this instance
            </div>
          </div>
          <div className="self-stretch rounded-t-none rounded-b-2xl bg-interface-surface-component flex flex-row items-center justify-start p-4 gap-[16px] text-xs">
            <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[8px] border-r-[1px] border-solid border-gray-200">
              <div className="relative leading-[150%]">Category</div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[12px] text-3xs text-interface-text-subtitle">
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-sm bg-lightsteelblue w-2 h-2" />
                  <div className="relative">Retail</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-sm bg-lightslategray w-2 h-2" />
                  <div className="relative">Medical</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-sm bg-steelblue-100 w-2 h-2" />
                  <div className="relative">E-commerce</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-sm bg-brand-primary-pure w-2 h-2" />
                  <div className="relative">Others</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[8px] border-r-[1px] border-solid border-gray-200">
              <div className="relative leading-[150%]">Department</div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[12px] text-3xs text-interface-text-subtitle">
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-sm bg-tan-100 w-2 h-2" />
                  <div className="relative">Department 1</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-sm bg-tan-200 w-2 h-2" />
                  <div className="relative">Department 2</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-sm bg-brand-highlight-500 w-2 h-2" />
                  <div className="relative">Department 3</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-sm bg-brand-highlight-600 w-2 h-2" />
                  <div className="relative">Department 4</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[8px] border-r-[1px] border-solid border-gray-200">
              <div className="relative leading-[150%]">Consolidated</div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[12px] text-3xs text-interface-text-subtitle">
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <img
                    className="relative w-3 h-0"
                    alt=""
                    src="/legend-preview.svg"
                  />
                  <div className="relative">Pre-acquisition</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <div className="relative rounded-12xs bg-brand-support-1-400 w-2.5 h-0.5" />
                  <div className="relative">Post-acquisition</div>
                </div>
              </div>
            </div>
            <div className="rounded-rounded-lg bg-interface-surface-component overflow-hidden hidden flex-row items-start justify-start text-sm text-gray-800 border-[1px] border-solid border-gray-200">
              <div className="bg-primary-700 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] text-interface-surface-component">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus32.svg"
                />
                <div className="relative leading-[150%] font-medium">First</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright32.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus33.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Second
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright33.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3 gap-[8px] ml-[-1px] border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/cartplus34.svg"
                />
                <div className="relative leading-[150%] font-medium">Third</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/arrowright34.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
