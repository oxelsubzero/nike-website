import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/facebook';
import 'react-social-icons/twitter';
import 'react-social-icons/youtube';
import 'react-social-icons/instagram';


const Footer = () => {
  return (
    <div className='bg-black text-white text-sm p-8'>
        <div className='flex px-[160px] justify-between'>
           <div className='flex gap-8'>
                <div className='flex flex-col gap-2'>
                    <p>CARTES CADEAUX</p>
                    <p>TROUVER UN MAGASIN</p>
                    <p>NIKE JOURNAL</p>
                    <p>DEVENIR MEMBRE</p>
                    <p>REDUCTION POUR ÉTUDIANTS</p>
                    <p>COMMENTAIRES</p>
                    <p>CODES PROMO</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>AIDE</p>
                    <p>Statut de commande</p>
                    <p>Expédition et livraison</p>
                    <p>Retours</p>
                    <p>MOde de paiement</p>
                    <p>NOus contacter</p>
                    <p>Aide - Code promo Nike</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>A PROPOS DE NIKE</p>
                    <p>Actualités</p>
                    <p>Carrières</p>
                    <p>Investisseurs</p>
                    <p>Développement durable</p>
                    <p>Mission</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>REJOINS-NOUS</p>
                    <p>Nike App</p>
                    <p>Nike RUn Club</p>
                    <p>Nike Trainning Club</p>
                    <p>SNKRS</p>
                </div>
            </div> 
            <div className='flex gap-3'>
            <SocialIcon url="www.twitter.com" bgColor='gray' fgColor='black'/>
            <SocialIcon url="www.facebook.com" bgColor='gray' fgColor='black'/>
            <SocialIcon url="www.youtube.com" bgColor='gray' fgColor='black'/>
            <SocialIcon url="www.instagram.com" bgColor='gray' fgColor='black'/>
            </div>
        </div>
    </div>
  )
}

export default Footer