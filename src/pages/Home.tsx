import CategoriesPage from "./Categories";

const HomePage = () => {
  return (
    <>
      <div className="pt-10 bg-gray-100 text-black">
        <div
          className="sm:flex items-center sm:justify-between text-center 
        sm:text-left 
        w-[90%] m-auto"
        >
          <div className="space-y-3">
            <h3 className="font-semibold">OUR BIGEST SALE</h3>
            <h1 className="text-2xl font-bold">
              Your journey begins here... Thousands of books are waiting for
              you! 🚀📚
            </h1>
            <p className="font-semibold">
              limited time only while supplies last
            </p>
          </div>
          <div className="mt-10 sm:mt-0">
            <img src="/public/man.png" alt="man" />
          </div>
        </div>
      </div>
      <CategoriesPage />
    </>
  );
};

export default HomePage;
