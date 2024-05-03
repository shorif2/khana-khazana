"use client";
import Image from "next/image";
import { useState } from "react";

const RecipeImage = ({ recipe }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && (
        <h2 className="w-full absolute left-1/2 top-1/3 bg-transparent/5">
          <div className="w-10 h-10 border-4 border-yellow-300 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </h2>
      )}

      <Image
        src={recipe?.thumbnail}
        className="rounded-md hover:scale-[101%]  w-full"
        height={160}
        width={300}
        quality={100}
        alt="hello"
        onLoad={() => setImageLoaded(!imageLoaded)}
      />
    </>
  );
};

export default RecipeImage;
