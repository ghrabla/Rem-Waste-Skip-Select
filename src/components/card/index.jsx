const Card = ({ data, isSelected, onSelect }) => {
  const {
    size,
    hire_period_days,
    price_before_vat,
    allowed_on_road,
    postcode,
  } = data;

  return (
    <div
      className={`w-full max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto cursor-pointer transition-all duration-200 ${
        isSelected
          ? "bg-blue-50 ring-2 ring-blue-500 shadow-xl transform scale-105"
          : "bg-white hover:shadow-xl"
      }`}
      onClick={onSelect}
    >
      <div className="relative">
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`}
          alt="Skip"
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2 text-xs font-medium">
          <span className="bg-white/70 px-2 py-0.5 rounded-full">
            {allowed_on_road ? "On-road" : "Off-road"}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/70 px-2 py-0.5 rounded-full text-sm font-semibold">
          {size} yd
        </div>
        {isSelected && (
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            Selected
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2
            className={`text-lg font-semibold ${
              isSelected ? "text-blue-800" : "text-gray-800"
            }`}
          >
            {postcode}
          </h2>
        </div>
        <p className="text-sm text-gray-500">{hire_period_days} days hire</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold">£{price_before_vat}</span>
          <button
            className={`px-4 py-1.5 text-sm rounded-full transition ${
              isSelected
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            {isSelected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
