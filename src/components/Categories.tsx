import { IoMdShareAlt } from "react-icons/io";
import { Link } from "react-router";
interface IData {
  id: number;
  image: string;
  title: string;
  link: string;
}
const CategoriesPage = () => {
  return (
    <>
      <div className="bg-[#fff] text-center text-black pt-20">
        <h1 className="w-[80%] m-auto text-4xl text-blue-700 font-bold mb-5">Categories</h1>
        <div
          className="grid gap-4 grid-cols-1 lg:grid-cols-4
          xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 w-[80%] 
          m-auto mb-10 justify-items-center"
        >
          {arrData.map((e) => (
            <div
              key={e.id}
              className="border-2 w-[50%] sm:w-[100%] text-center
              border-blue-800 p-5 rounded-xl space-y-1
              hover:-translate-y-2 duration-300 ease-in-out
              "
            >
              <img src={e.image} className="m-auto" width={40} alt={e.image} />
              <h3 className="text-[1.2rem] font-bold mb-4">{e.title}</h3>
              <div className="flex items-center justify-center space-x-1">
                <Link to="" className="text-orange-400">
                  {e.link}
                </Link>
                <span className="text-orange-400">
                  <IoMdShareAlt />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;

const arrData: IData[] = [
  { id: 1, image: "/icon.png", title: "Programming", link: "Shop Now" },
  { id: 2, image: "/icon.png", title: "Programming", link: "Shop Now" },
  { id: 3, image: "/icon.png", title: "Programming", link: "Shop Now" },
  { id: 4, image: "/icon.png", title: "Programming", link: "Shop Now" },
  { id: 5, image: "/icon.png", title: "Programming", link: "Shop Now" },
];
