const Loader = () => {
  return (
    <div className="animate-pulse w-full max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto bg-white">
      <div className="relative h-60 w-full bg-gray-300"></div>
      
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <div className="h-5 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="h-3 bg-gray-300 rounded w-24"></div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
          <div className="h-8 bg-gray-300 rounded-full w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;