import CategoriesPage from "../components/Categories";

const HomePage = () => {
  return (
    <>
      <div className="pt-20 bg-[#caf0f8] text-black">
        <div
          className="sm:flex items-center sm:justify-between text-center 
        sm:text-left 
        w-[90%] m-auto"
        >
          <div className="space-y-3">
            <h3 className="font-bold text-4xl text-blue-700">
              OUR BIGEST SALE
            </h3>
            <h1 className="text-3xl font-bold">
              Your journey begins here... Thousands of books are waiting for
              you! 🚀📚
            </h1>
            <p className="font-semibold">
              limited time only while supplies last
            </p>
          </div>
          <div className="mt-10 sm:mt-0 ">
            <img src="/man.png" alt="man" />
          </div>
        </div>
      </div>
      <CategoriesPage />
    </>
  );
};

export default HomePage;
