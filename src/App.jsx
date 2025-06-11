import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkipsByLocation } from "../src/data/actions/skipSlice";
import Card from "./components/card";
import Progress from "./components/progress";
import Loader from "./components/loader";
import Header from "./components/header";
import Checkout from "./components/checkout";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.skips);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [showModal, setShowModal] = useState(false);

  const handleCardSelect = (cardId) => {
    const newSelected = new Set(selectedCards);
    if (newSelected.has(cardId)) {
      newSelected.delete(cardId);
    } else {
      newSelected.add(cardId);
    }
    setSelectedCards(newSelected);
    setShowModal(newSelected.size > 0);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(fetchSkipsByLocation({ postcode: "NR32", area: "Lowestoft" }));
  }, [dispatch]);

  return (
    <div className="xl:container mx-auto">
      <div className="">
        <Progress />
        <div className="my-4 p-4 bg-white ml-16 md:ml-80 lg:ml-80 xl:ml-80">
          <Header />
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <Loader key={index} />
              ))}
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
              {data.map((skip, index) => (
                <Card
                  key={index}
                  data={skip}
                  isSelected={selectedCards.has(skip.id)}
                  onSelect={() => handleCardSelect(skip.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Checkout
        isOpen={showModal}
        selectedCount={selectedCards.size}
        setSelectedCards={setSelectedCards}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
