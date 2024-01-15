'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { ProductVariant } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({
  availableForSale,
  selectedVariantId,
  closeModalOnAddToCart
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  closeModalOnAddToCart?: () => void;
}) {
  const { pending } = useFormStatus();
  const buttonClasses =
    'relative flex items-center justify-center gap-4 w-full button-primary-lg';
  const disabledClasses = 'cursor-not-allowed';

  if (!availableForSale) {
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        Il prodotto è sold out.
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
        disabled
      >
        {/* <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div> */}
        Scegli un formato
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if(closeModalOnAddToCart) setTimeout(() => closeModalOnAddToCart(), 500) // closing moadal if addToCart is on ModalRapidAddToCart
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        disabledClasses: pending
      })}
      disabled={pending}
    >
      <div className="absolute left-0 ml-4">
        {pending ? <LoadingDots className="mb-3 bg-white" /> : <></>}
      </div>
      Aggiungi al carrello
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
  closeModalOnAddToCart
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  closeModalOnAddToCart?: () => void;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} closeModalOnAddToCart={closeModalOnAddToCart} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
