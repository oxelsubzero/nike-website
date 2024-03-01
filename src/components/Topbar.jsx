import { jordanLogo, converseLogo } from "../assets"

const Topbar = () => {
  return (
    <div className="hidden  lg:block">
    <div className="flex justify-between items-center px-12 bg-slate-100 ">
      
      <div className="flex">
        <a href="">
          <img src={jordanLogo} alt="logo jordan"  className="w-[35px] h-[35px]"/>
        </a>
        <a href="">
          <img src={converseLogo} alt="logo converse" className="w-[35px] h-[35px]"/>
        </a>
      </div>

      <div className="flex gap-4 text-slate-800 text-[11px] font-bold ">
        <a href="#" className="hover:text-slate-500">Trouver un magazin | </a>
        <a href="#" className="hover:text-slate-500">Aide | </a>
        <a href="#" className="hover:text-slate-500">Nous rejoindre | </a>
        <a href="#" className="hover:text-slate-500">S'identifer </a>
      </div>

    </div>
    </div>
  )
}

export default Topbar