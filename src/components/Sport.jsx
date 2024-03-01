import { imageSiderSport } from "../assets"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const Sport = () => {
    return (
        <div className="mx-8 my-[70px]">
          <div className="flex justify-between">
            <h2 className="text-[22px] font-semibold">Tout pour ton sport</h2>
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
            {imageSiderSport.map((item, index) => (
              <div key={index} className="relative shrink-0 pb-8">
                <img src={item.url} alt={item.text} className="w-[600px]"/>
                <button className={`absolute bottom-[67px] left-[40px]  mb-4 ml-4 px-4 py-2 bg-white rounded-full ${item.title.split(' ').length > 2 ? 'w-[200px]' : 'w-[110px]'}`}>{item.title}</button>
              </div>
            ))}
          </div>
        </div>
      );
      
      
}

export default Sport