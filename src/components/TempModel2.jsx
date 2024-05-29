import React from "react";

const TempModel2 =({today,icon,temp1,temp2,bgColorh,bgColorb,roundedTop,roundedBottom})=>{
    return(
        <div className="flex flex-col justify-center items-center w-[18%] ">
            <div className={`text-gray-300 text-xl flex flex-row items-center justify-center w-full py-3 ${bgColorh} ${roundedTop}`}>{today}</div>
            <div className={`flex flex-col justify-around items-center h-[300px] w-full ${bgColorb} ${roundedBottom}`}>
                <h1 className="text-6xl text-blue-400">{icon}</h1>
                <div className="flex flex-col justify-center items-center">
                <h4 className="text-3xl text-white font-bold">{`${temp1} C˚`}</h4>
                <h5 className="text-white text-lg mt-2">{`${temp2} C˚`}</h5>
                </div>
            </div>
        </div>
    )
}
export default TempModel2;