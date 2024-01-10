export default function ProductStars({ averageScore = 0 }: { averageScore: number }) {
    const average = Math.round(averageScore * 2) / 2;
    
    return (
        <>
            {average == 0 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                </>
            )}
            {average == 1 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                </>
            )}
            {average == 1.5 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star-0.5.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                </>
            )}
            {average == 2 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                </>
            )}
            {average == 2.5 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star-0.5.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                </>
            )}
            {average == 3 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                </>
            )}
            {average == 3.5 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star-0.5.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                </>
            )}
            {average == 4 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6 opacity-50" />
                </>
            )}
            {average == 4.5 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star-0.5.svg" alt="" className="-ml-1 h-6 w-6" />
                </>
            )}
            {average == 5 && (
                <>
                    <img src="/img/icon/star.svg" alt="" className="h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                    <img src="/img/icon/star.svg" alt="" className="-ml-1 h-6 w-6" />
                </>
            )}
        </>
    )
}