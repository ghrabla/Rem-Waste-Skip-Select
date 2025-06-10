import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkipsByLocation } from "../src/data/actions/skipSlice";
import Card from "./components/card";
import Progress from "./components/progress";
import Loader from "./components/loader";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.skips);

  useEffect(() => {
    dispatch(fetchSkipsByLocation({ postcode: "NR32", area: "Lowestoft" }));
  }, [dispatch]);

  return (
    <div className="xl:container mx-auto">
      <div className="flex">
        <div className="max-w-14 md:w-full md:max-w-72 border-r border-gray-200 my-4">
          <div className="flex items-end justify-between p-4 border-b border-gray-200">
            <div>
              <span className="text-4xl font-normal mr-1">30%</span>
              <span className="text-sm text-gray-500"> Progressing</span>
            </div>
            <div>Cancel</div>
          </div>
          <Progress />
        </div>
        <div className="w-full  my-4 p-4 bg-white">
          <header id="header" className="mb-10">
            <div className="mb-2">
              <div className="flex items-center">
                <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-800">
                  Choose Your Skip Size
                </h1>
              </div>
            </div>
            <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
              Select the skip size that best suits your needs
            </p>
          </header>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <Loader key={index} />
              ))}
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
              {data.map((skip, index) => (
                <Card key={index} data={skip} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
