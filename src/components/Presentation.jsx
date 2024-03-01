import { banner } from "../assets";
const Presentation = () => {
  return (
    <>
    <div className="flex flex-col items-center text-center justify-center p-6 ">
        <p>Nike Invincible 3</p>
        <h1 className="font-bold text-[60px] font-montserrat">DES SENSATIONS INCROYABLES</h1>
        <p className="p-5">Notre chaussure de running sur route avec le meilleur amorti, pour des kilomètres de bohneur.</p>
        <button className="bg-black rounded-full w-[90px] items-center p-1 text-white font-bold">Acheter</button>        
    </div>
    <div>
        <img src={banner} alt="banner" />
    </div>
    </>
  )
}

export default Presentation