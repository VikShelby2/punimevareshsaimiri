
import React from "react"
import { Link } from "react-router-dom"
export default function Hero(){

return(
<section className="_326f7c0c">
<div className="wr">
<div className="_299ec8ac">
<div className="_42076df9">
<span className="_71ca0053">
<span>Na kontaktoni ne</span>—<span>+355699189654</span>
</span>
<header className="_a6f55680"><h1 className="_10f4ca4e"> Punime te ndryshme mermeri dhe graniti
 Me materiale, trashesi dhe ngjyra te shumellojshme</h1>
<p className="_6ed3a78e">    Shërbim profesional dhe cilësi e garantuar për çdo punim që kryhet nga stafi ynë me mbi 30 vite përvojë. Ekspertiza jonë e gjatë dhe e provuar siguron rezultate të shkëlqyera dhe kënaqësi maksimale për klientët tanë. Besoni në ne për një shërbim të pakrahasueshëm dhe një cilësi të padiskutueshme në çdo projekt që ndërmarrim.</p></header>
<div className="_c5a8a50d">
<Link to='/products'>
            <button 
            className="w-[200px] bg-black text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-lg lg:ml-5 hover:bg-gray-700">Eksploro</button>
          </Link> 
</div>
</div>
<div className="_09a76bdb">
<img alt="img" src={require('../../../Pages/imgimg.png')} className="_82325dc6" />
</div>
</div>
</div>
</section>


)

}
