import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkipsByLocation } from "../src/data/actions/skipSlice";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.skips);

  useEffect(() => {
    dispatch(fetchSkipsByLocation({ postcode: "NR32", area: "Lowestoft" }));
  }, [dispatch]);

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Skips By Location</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <pre className="bg-gray-100 p-2 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </>
  );
};

export default App;
