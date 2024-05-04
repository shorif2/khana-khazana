import Image from "next/image";

const RecipeImage = ({ recipe }) => {
  return (
    <>
      <Image
        src={recipe?.thumbnail}
        placeholder="empty"
        className="rounded-md hover:scale-[101%]  w-full"
        height={160}
        width={300}
        quality={100}
        alt="hello"
      />
    </>
  );
};

export default RecipeImage;
