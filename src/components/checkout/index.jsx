const Checkout = ({ isOpen, setSelectedCard, selectedCard }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-6">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              £{selectedCard?.price_before_vat}
            </h3>
            <p className="text-sm text-gray-500">
              You have selected a <b>{selectedCard?.size}</b> yard skip for hire
            </p>
          </div>

          <div className="flex justify-center gap-4 w-50">
            <button
              onClick={() => {
                setSelectedCard(null);
              }}
              className="bg-gray-100 text-gray-700 py-3 px-12 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button className="bg-black text-white py-3 px-12 rounded-full font-medium hover:bg-gray-900 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
