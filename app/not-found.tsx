import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="w-screen px-5 pt-20 flex flex-col items-center justify-center text-center gap-8">
      <h2 className="text-title-1">
        404
        </h2>
      <p className="text-body-2">
        Hmm. Non riusciamo a trovare la pagina che stai cercando.
      </p>
      <Link
        href="/" 
        className="mt-4"
      >
        <button className="button-primary-base">
            Torna alla Home
        </button>
      </Link>
    </div>
  )
}