import { itemsThisweek } from "../assets"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const Thisweek = () => {
    return (
        <div className="mx-8 my-[70px]">
          <div className="flex justify-between">
            <h2 className="text-[22px] font-semibold">Nouveau cette semaine</h2>
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
            {itemsThisweek.map((item, index) => (
              <div key={index} className="  shrink-0 pb-8">
                <img src={item.url} alt={item.data[0]} className="w-[600px]"/>
                <h1 className="pt-8 text-md font-bold text-slate-950">{item.data[0]}</h1>
                <h1 className="pt-1 text-lg text-slate-500">{item.data[1]}</h1>
                <h1 className="pt-1 text-lg font-bold text-slate-950">{item.data[2]} €</h1>
              </div>
            ))}
          </div>
        </div>
      );
      
      
}

export default Thisweek