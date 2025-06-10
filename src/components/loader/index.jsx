const Loader = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow-md p-4 space-y-2">
      <div className="bg-gray-300 h-60 w-full rounded-lg"></div>
      <div className="h-4 bg-gray-300 rounded w-2/4"></div>
      <div className="h-3 bg-gray-300 rounded w-1/4"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-5 bg-gray-300 rounded-md w-24"></div>
        <div className="h-8 bg-gray-300 rounded-full w-20"></div>
      </div>
    </div>
  );
};

export default Loader;
