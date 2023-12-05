export default function ProductCard({ item = null } : { item: any }){
    return (
        <div className="relative w-1/2 flex flex-col gap-6 cursor-pointer group">
            {/* black description visible on hover */}
            <div className="absolute top-5 right-5 left-5 opacity-0 group-hover:opacity-100 p-5 bg-black text-white z-5 font">
                Protegge la tua pelle dai danni della luce blu.  Progettata per non essere invasiva durante la giornata e durare 24h ad ogni esposizione.
            </div>

            <div className="py-5 bg-gradient-to-b from-gray-100 to-gray-100/0 group-hover:ring-1 group-hover:ring-black">
                <img 
                    src="/"
                    alt="product name 1"
                    className="h-[400px] w-auto group-hover:opacity-0 group-hover:h-0"
                />
                <img 
                    src="/"
                    alt="product name 2"
                    className="w-auto h-0 opacity-0 group-hover:opacity-100 group-hover:h-[400px]"
                />
            </div>
            <div className="flex flex-col gap-4">
                <p> Crema viso - anti luce blu </p>
                <p className="font-mono font-normal"> 47€ </p>
            </div>
        </div>
    )
}