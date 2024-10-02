'use client';

const SidebarIcon = ({ onClick }) => {
  return (
    <div
      className="w-[30px] h-[30px] flex rounded-md border border-grey cursor-pointer"
      onClick={onClick} // Attach the click event directly here
    >
      {/* left */}
      <div className="w-[60%] flex flex-col gap-[6px] justify-center items-center bg-slate-100 border-r border-grey rounded-l-md ml-[1px] h-[100%]">
        <div className="w-[60%] h-[1px] bg-slate-600"></div>
        <div className="w-[60%] h-[1px] bg-slate-600"></div>
        <div className="w-[60%] h-[1px] bg-slate-600"></div>
      </div>
      {/* right */}
      <div className="w-[40%] rounded-r-sm rounded-br-sm h-[100%]"></div>
    </div>
  );
};

export default SidebarIcon;
