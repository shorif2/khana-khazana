import { getAllRecipes } from "@/queries/queries";
import Link from "next/link";

const SideBar = async () => {
  const data = await getAllRecipes();

  const cat = Array.from(new Set(data.map((cat) => cat.category)));

  return (
    <div className="col-span-12 md:col-span-3">
      <h2 className="font-bold text-xl">Recipes</h2>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {cat?.map((cat) => (
          <li key={cat}>
            <Link className="hover:text-red-500" href={`/category/${cat}`}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
