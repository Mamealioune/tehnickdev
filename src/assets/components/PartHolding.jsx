import React from "react";

const PartHolding = ({ children }) => {
  return (
    <div>
      <div className="flex items-center ml-4">
        <div className="flex ">
          <div class="h-[130px]  bg-green-500 w-[5px] rounded"></div>

          <h3 className="text-green-400 ml-2 font-titillium">{children}</h3>
        </div>

        <div className="text-slate-200 text-4xl font-titillium ">
          <hr className="border-green-600 border-4 rounded-full w-40" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PartHolding;
