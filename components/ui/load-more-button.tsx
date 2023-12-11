'use client';

import { useState } from "react";

export default function LoadMoreButton({ fetchMoreArticles } : { fetchMoreArticles: any }) {
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    await fetchMoreArticles()
    setLoading(false);
  }

  return (
    <form action={fetch}>
      <div className="w-full flex items-center justify-center mt-10">
        <button 
          className="button-primary-base" 
          disabled={loading}
        >
          {loading ? 'caricamento...' : 'Carica altri articoli'}
        </button>
      </div>
    </form>
  );
}
