import { imageSider1 } from "../assets"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const Actually = () => {
    return (
        <div className="mx-8 my-[70px]">
          <div className="flex justify-between">
            <h2 className="text-[22px] font-semibold">En ce moment</h2>
            <div className="flex justify-center gap-3">
              <div className="w-8 h-8 bg-slate-200 items-center justify-center flex rounded-full">
                <ChevronLeftIcon className="h-6 w-6 mr-2" />
              </div>
              <div className="w-8 h-8 bg-slate-200 items-center justify-center flex rounded-full">
                <ChevronRightIcon className="h-6 w-6 mr-2" />
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-8 overflow-x-auto scrollbar-hide">
            {imageSider1.map((item, index) => (
              <div key={index} className="  shrink-0 pb-8">
                <img src={item.url} alt={item.text} className="w-[600px]"/>
                <p className="pt-8 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
      
      
}

export default Actually