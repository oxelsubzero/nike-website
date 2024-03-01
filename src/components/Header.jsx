import { nikeLogo } from "../assets";
import React, { useState } from 'react';
import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon, Bars4Icon} from '@heroicons/react/24/outline'


const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className="flex justify-between items-center px-12 py-3">
        <img src={nikeLogo} alt="logo nike" />
        <nav>
            <ul className="flex gap-6 text-slate-800 text-sm font-bold font-montserrat max-lg:hidden">
                <li> <a href="#"> Nouveautés et articles du moments </a></li>
                <li> <a href="#"> Homme </a></li>
                <li> <a href="#"> Femme </a></li>
                <li> <a href="#"> Enfant </a></li>
                <li> <a href="#"> Offres </a></li>
            </ul>
        </nav>

        <div className="flex gap-2 justify-center items-center">
            <div className='max-lg:hidden flex gap-3 border border-slate-100 bg-slate-100 rounded-full p-2 hover:bg-slate-200'>
                <MagnifyingGlassIcon className="h-6 w-6 mr-2" />
                <input type='text' placeholder='Rechercher' className='input bg-slate-100' />
            </div>
            <MagnifyingGlassIcon className="h-6 w-6 mr-2 lg:hidden" />
            <HeartIcon className="h-6 w-6 mr-2" /> {/* Adjust size and color as needed */}
            <ShoppingCartIcon className="h-6 w-6 " /> {/* Adjust size and color as needed */}
            <Bars4Icon className="h-6 w-6 mr-2 lg:hidden" onClick={toggleSidebar} />
        </div>

        {isSidebarOpen && (
            <div className="lg:hidden fixed flex inset-0 z-50 backdrop-blur-sm bg-white/30 bg-opacity-75 justify-end">
                <div className="bg-white w-[300px] h-screen flex flex-col  ">
                    <div className="flex justify-end p-4">
                        <Bars4Icon className="h-6 w-6 " onClick={toggleSidebar} />
                    </div>
                    <div className="flex flex-col items-start p-4 float-end">
                        <a href="#" className="mb-4">Nouveautés et articles du moments</a>
                        <a href="#" className="mb-4">Homme</a>
                        <a href="#" className="mb-4">Femme</a>
                        <a href="#" className="mb-4">Enfant</a>
                        <a href="#">Offres</a>
                    </div>
                </div>
            </div>
        )}  
        </div>
  )
}

export default Header