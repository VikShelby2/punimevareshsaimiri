
import {
    LightBulbIcon,
    ViewGridIcon,
    WifiIcon,
    ShieldCheckIcon,
    BellIcon,
    SunIcon,
    SparklesIcon,
  } from "@heroicons/react/outline";
  import { PiCrossThin } from "react-icons/pi";
  export default function Features() {
    return (
      <div className="w-full bg-layer-1 p-6 text-center md:p-20">
        <div className="mx-auto w-full max-w-6xl">
          <span className="leading-sm inline-flex items-center rounded-full border-2 border-orange-200 bg-orange-200 px-2 py-0.5 text-xs font-bold font-semibold uppercase text-orange-600 shadow-sm">
            <LightBulbIcon className="mr-1 h-5 w-5" />
            Features
          </span>
          <h2 className="mx-auto mt-4 text-center text-3xl font-semibold tracking-tight text-heading md:max-w-2xl md:text-4xl">
            Simplicity is key. Elevate your copy with a simple design.
          </h2>
          <p className="mt-6 text-xl text-text">
            Here is a section with two features or points and a subheading.
          </p>
  
          <div className="mt-12 grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-5 text-center md:p-8">
              <div className="inline-block rounded-3xl bg-layer-2 py-4 px-4">
                <PiCrossThin className="h-8 w-8 stroke-gradient gradient-dusk" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-heading">
              Dizajne të Përshtatura të Varrezave
              </h3>
              <p className="mt-2 text-center text-lg text-text">
              Shikoni galerinë tonë të dizajneve të përshtatura të varrezave të krijuara nga graniti dhe mermeri më i mirë. Çdo pjesë është unike, e krijuar për të nderuar të dashurit tuaj me elegancë dhe qëndrueshmëri
              </p>
            </div>
            <div className="p-5 text-center md:p-8">
              <div className="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <ShieldCheckIcon className="h-8 w-8 stroke-gradient gradient-peach" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-heading">
              Materiale me Cilësi të Lartë
              </h3>
              <p className="mt-2 text-center text-lg text-text">
              Ne përdorim vetëm granit dhe mermer të cilësisë më të lartë të marrë nga gurore të besuara për të siguruar që varrezat tona të qëndrojnë në kohë dhe kushte atmosferike
              </p>
            </div>
            <div className="p-5 text-center md:p-8">
              <div className="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 stroke-gradient gradient-peach">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>

              </div>
              <h3 className="mt-4 text-xl font-semibold text-heading">
              Shërbime të Gdhendjes Personale
              </h3>
              <p className="mt-2 text-center text-lg text-text">
              rtizanët tanë të aftë ofrojnë shërbime të gdhendjes personale, duke përfshirë mbishkrime, portrete dhe elemente dekorative, për të krijuar një homazh të qëndrueshëm që reflekton trashëgiminë e të dashurit tuaj.
              </p>
            </div>
            <div className="p-5 text-center md:p-8">
              <div className="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-gradient gradient-sky" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

              </div>
              <h3 className="mt-4 text-xl font-semibold text-heading">
              Instalimi dhe Mirëmbajtja
              </h3>
              <p className="mt-2 text-center text-lg text-text">
              Ne ofrojmë shërbime profesionale instalimi për të siguruar që varreza juaj të vendoset në mënyrë të sigurt dhe të saktë. Për më tepër, paketat tona të mirëmbajtjes mbajnë memorialet tuaja të pastra dhe të bukura gjatë gjithë vitit
              </p>
            </div>
            <div className="p-5 text-center md:p-8">
              <div className="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              <SparklesIcon className="h-8 w-8 stroke-gradient gradient-cotton-candy" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-heading">
              Konsultime dhe Mbështetje
              </h3>
              <p className="mt-2 text-center text-lg text-text">
              Ekipi ynë i dhembshur është këtu për t'ju ndihmuar gjatë çdo hapi të procesit. Rezervoni një konsultim falas për të diskutuar nevojat tuaja dhe për të marrë këshilla të ekspertëve mbi zgjedhjen e memorialit të përsosur.
              </p>
            </div>
            <div className="p-5 text-center md:p-8">
              <div className="inline-block rounded-3xl bg-layer-2 py-4 px-4">
              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 stroke-gradient gradient-cotton-candy">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

              </div>
              <h3 className="mt-4 text-xl font-semibold text-heading">
              Çmime të Përballueshme
              </h3>
              <p className="mt-2 text-center text-lg text-text">
              Ne besojmë në ofrimin e varrezave me cilësi të lartë me çmime konkurruese. Eksploroni opsionet tona të çmimeve dhe gjeni një zgjidhje që përputhet me buxhetin tuaj pa kompromentuar cilësinë.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  