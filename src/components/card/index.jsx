const Card = ({ data }) => {
  const {
    size,
    hire_period_days,
    price_before_vat,
    vat,
    allowed_on_road,
    allows_heavy_waste,
    postcode,
  } = data;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white mx-auto">
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
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{postcode}</h2>
          {/* <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
            {hire_period_days} days hire
          </span> */}
        </div>
        <p className="text-sm text-gray-500">
          {/* £{price_before_vat} + VAT ({vat}%) */}
          {hire_period_days} days hire{" "}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold">
            £{price_before_vat}{" "}
            {/* <span className="text-sm font-normal text-gray-500">before VAT</span> */}
          </span>
          <button className="bg-black text-white px-4 py-1.5 text-sm rounded-full hover:bg-gray-900 transition">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
