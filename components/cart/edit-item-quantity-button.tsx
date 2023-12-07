'use client';

import clsx from 'clsx';
import { updateItemQuantity } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import type { CartItem } from 'lib/shopify/types';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      aria-disabled={pending}
      className={clsx(
        'button-quantity',
        {
          'cursor-not-allowed': pending,
          'opacity-60': pending,
          'ml-auto': type === 'minus'
        }
      )}
      disabled={pending}
    >
      {pending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === 'plus' ? (
        <img src="/img/icon/add.svg" alt="" className="h-2.5 w-2.5" />
      ) : (
        <img src="/img/icon/minus.svg" alt="" className="h-2.5 w-2.5" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({ item, type }: { item: CartItem; type: 'plus' | 'minus' }) {
  const [message, formAction] = useFormState(updateItemQuantity, null);
  const payload = {
    lineId: item.id,
    variantId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
  };
  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form action={actionWithVariant}>
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
