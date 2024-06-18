import React from "react"
import { Link } from "react-router-dom"

export default function FeautersOur(){

return(
<section className="_466f1e90"><div className="wr"><div className="_d0bb142e">
<div className="_f5dd3f80"><header className="_070bc43b">
<h2 className="_889ae615">
Punime te ndryshme mermeri dhe graniti
 Me materiale, trashesi dhe ngjyra te shumellojshme</h2>
<p className="_a51f7f43">Operojme ne kete fushe qe prej vitit 1993, me te gjitha materialet dhe shumellojshmeri ngjyrash</p></header>
<div className="_955c71e4">
<Link to='/products'>
            <button 
            className="bg-black text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-gray-700">Shiko me shume</button>
          </Link> 
</div></div>
<div className="_43449608">
<div className="_78cc9484"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="um-icon _c299002d size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>

<h3 className="_027ce4e2">
Porosi online nga e gjith bota</h3><div className="_f2ea0f6f">
Bëni porosi online nga çdo cep i botës. Ofrojmë një proces të thjeshtë dhe të sigurt për të zgjedhur dhe blerë produktet tona.</div></div>
<div className="_78cc9484">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 um-icon _c299002d">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
</svg>
<h3 className="_027ce4e2">Transporti në mbarë Shqiprin</h3><div className="_f2ea0f6f">Ofrimi i opsioneve të dorëzimit global për të siguruar që zgjedhja juaj të arrijë tek ju, kudo që të jeni</div>
</div>
</div>
</div>
</div>
</section>
)

}

