const CARD = () => {
  return (
    <div className="relative rounded-[10px] shadow-[4px_0px_64px_rgba(0,_0,_0,_0.08)] w-full h-[337px] overflow-hidden flex flex-col items-center justify-start text-left text-2xs text-subtitle font-open-sans">
      <div className="self-stretch bg-light-theme-bg-component flex flex-row items-center justify-between py-2.5 px-8">
        <div className="self-stretch w-[674px] flex flex-col items-start justify-center py-1 px-0 box-border gap-[4px]">
          <div className="self-stretch relative tracking-[0.5px] capitalize font-semibold hidden">
            Card Info
          </div>
          <div className="self-stretch relative text-[18px] leading-[18px] font-semibold text-light-theme-text-default">
            Category trend analysis
          </div>
          <div className="self-stretch relative text-xs font-semibold hidden">
            Card Description
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[10px] text-xs text-text">
          <div className="rounded-8xs bg-bg-light hidden flex-row items-center justify-start py-2.5 px-3 gap-[54px]">
            <div className="relative uppercase font-semibold">Card Options</div>
            <img className="relative w-3.5 h-2" alt="" src="/vector-352.svg" />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[5px] gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/vector-352.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch relative bg-bg-light h-[67px] overflow-hidden shrink-0 hidden" />
      <div className="self-stretch flex-1 bg-light-theme-bg-component overflow-hidden flex flex-col items-start justify-start py-[25px] px-8 text-center text-light-theme-text-subtitle">
        <div className="flex-1 relative bg-light-theme-bg-component w-[729px] overflow-hidden">
          <div className="absolute w-[calc(100%_-_31px)] right-[3.48px] bottom-[21.5px] left-[27.52px] flex flex-row items-start justify-start">
            <div className="relative inline-block w-[38px] shrink-0">Jan</div>
            <div className="relative inline-block w-[83px] shrink-0">Feb</div>
            <div className="relative inline-block w-[37px] shrink-0">Mar</div>
            <div className="relative inline-block w-[83px] shrink-0">Apr</div>
            <div className="relative inline-block w-[38px] shrink-0">May</div>
            <div className="relative inline-block w-[83px] shrink-0">Jun</div>
            <div className="relative inline-block w-[35px] shrink-0">Jul</div>
            <div className="relative inline-block w-[83px] shrink-0">Aug</div>
            <div className="relative inline-block w-[39px] shrink-0">Sep</div>
            <div className="relative inline-block w-[79px] shrink-0">Oct</div>
            <div className="relative inline-block w-[41px] shrink-0">Nov</div>
            <div className="relative inline-block w-[78px] shrink-0">Dec</div>
          </div>
          <div className="absolute h-[calc(100%_-_31px)] top-[-2.5px] bottom-[33.5px] left-[-0.48px] w-[19px] flex flex-col items-start justify-between text-right">
            <div className="self-stretch relative">100</div>
            <div className="self-stretch relative">80</div>
            <div className="self-stretch relative">60</div>
            <div className="self-stretch relative">40</div>
            <div className="self-stretch relative">20</div>
            <div className="self-stretch relative">0</div>
          </div>
          <div className="absolute h-[calc(100%_-_44px)] w-[calc(100%_-_25px)] top-[5.5px] right-[0.48px] bottom-[38.5px] left-[24.52px] flex flex-col items-start justify-between">
            <div className="self-stretch relative box-border h-px border-t-[1px] border-dashed border-light-theme-border-default" />
            <div className="self-stretch relative box-border h-px border-t-[1px] border-dashed border-light-theme-border-default" />
            <div className="self-stretch relative box-border h-px border-t-[1px] border-dashed border-light-theme-border-default" />
            <div className="self-stretch relative box-border h-px border-t-[1px] border-dashed border-light-theme-border-default" />
            <div className="self-stretch relative box-border h-px border-t-[1px] border-dashed border-light-theme-border-default" />
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-light-theme-border-default" />
          </div>
          <div className="absolute h-[calc(100%_-_32px)] w-[calc(100%_-_45px)] top-[-6.5px] right-[10.48px] bottom-[38.5px] left-[34.52px] flex flex-row items-end justify-between text-xs text-light-theme-bg-component font-inter">
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-28 overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-28 overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_11.5px)] tracking-[-0.02em] leading-[12.64px] hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_11.5px)] tracking-[-0.02em] leading-[12.64px] hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_11.5px)] tracking-[-0.02em] leading-[12.64px] hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_11.5px)] tracking-[-0.02em] leading-[12.64px] hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-[136px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-28 overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-[118px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_6.75px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_6.75px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_6.75px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_6.75px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-[98px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-[78px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_6.75px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_6.75px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_6.75px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_6.75px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-28 overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
            <div className="rounded-t-8xs rounded-b-none w-[25px] h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 relative bg-palevioletred overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-darkslateblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-cadetblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-mediumseagreen overflow-hidden">
                <div className="absolute top-[calc(50%_-_7.25px)] left-[calc(50%_-_12.5px)] tracking-[-0.02em] leading-[12.64px] font-semibold hidden">
                  50%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[15px] text-left">
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <div className="relative rounded-10xs bg-mediumseagreen w-[11px] h-[11px]" />
            <div className="relative">Service Validity</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <div className="relative rounded-10xs bg-cadetblue w-[11px] h-[11px]" />
            <div className="relative">Subscription</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <div className="relative rounded-10xs bg-darkslateblue w-[11px] h-[11px]" />
            <div className="relative">Service</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <div className="relative rounded-10xs bg-palevioletred w-[11px] h-[11px]" />
            <div className="relative">Billing</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <div className="relative rounded-10xs bg-orange w-[11px] h-[11px]" />
            <div className="relative">User Account</div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-bg-light overflow-hidden hidden flex-col items-start justify-start py-2.5 px-[25px]">
        <div className="self-stretch relative h-[50px] overflow-hidden shrink-0" />
      </div>
    </div>
  );
};

export default CARD;
