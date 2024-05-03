"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-[60vh] flex justify-center items-center">
      <h2>Something went wrong!</h2>
      <h2 className="text-red-500">{error}</h2>
      <button
        className="py-2 px-4 bg-red-500 rounded-md hover:bg-red-400"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
