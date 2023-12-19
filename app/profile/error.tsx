'use client'

import Accedi from "components/ui/accedi";
import { Suspense } from "react";

export default function Error() {
  return (
    <>
        <div className="w-screen px-5 mt-24 mb-10 text-center flex flex-col items-center justify-center gap-8">
            <p className="text-title-4">
                Autenticazione richiesta
            </p>
            <p>
                Sembra che tu non sia correttamente autenticato.
            </p>
        </div>
        <Suspense>
            <div className="w-screen flex justify-center">
                <Accedi 
                    flag='login'
                    login={null}
                    register={null}
                    sendEmailPasswordRecovery={null}
                    theme='black'
                />
            </div>
        </Suspense>
    </>
  );
}
