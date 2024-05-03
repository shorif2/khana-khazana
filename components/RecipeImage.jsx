"use client";
import Image from "next/image";
import { useState } from "react";

const RecipeImage = ({ recipe }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <>
      {!imageLoaded && (
        <h2 className="w-full absolute left-1/2 top-1/3 ">
          <div className="w-8 h-8 border-4 border-teal-500 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </h2>
      )}
      {imageLoaded && (
        <Image
          src={recipe?.thumbnail}
          placeholder="empty"
          className="rounded-md hover:scale-[101%]  w-full"
          height={160}
          width={300}
          quality={100}
          alt="hello"
          onLoad={() => setImageLoaded(!imageLoaded)}
        />
      )}
    </>
  );
};

export default RecipeImage;
