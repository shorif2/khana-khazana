import Image from "next/image";
import HomeButton from "./HomeButton";

const RecipeNotFound = ({ message }) => {
  return (
    <div className=" px-2 text-center">
      <div className="h-screen flex flex-col justify-start items-center pt-20">
        <Image
          className="pl-10"
          src={"/cook.png"}
          alt="cook"
          width={150}
          height={150}
        />
        <h1 className="text-8xl font-extrabold text-red-500">404</h1>
        <p className="text-4xl font-medium text-gray-800">Recipe Not Found</p>

        <p className="text-xl text-gray-800 mt-4">
          No recipe match by{" "}
          <span classNameName="text-gray-300">&quot;{message}&quot;</span>
        </p>
        <HomeButton />
      </div>
    </div>
  );
};

export default RecipeNotFound;
