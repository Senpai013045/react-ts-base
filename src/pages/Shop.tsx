import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Container} from "../components/Layout/Container";
import {BUYING_OPTIONS, GAMES} from "../data/games";
import {useMemo, useState} from "react";
import {Button} from "../components/UI/Button";

export const Shop = () => {
  const [selectedBuyingIndex, setSelectedBuyingIndex] = useState(-1);
  const params = useParams();
  const navigate = useNavigate();
  const slug = params.slug;

  const game = useMemo(() => {
    return GAMES.find(game => game.slug === slug);
  }, [slug]);

  if (!game) {
    return <Navigate to="/" />;
  }

  const handleBuy = () => {
    if (selectedBuyingIndex === -1) {
      return;
    }
    navigate(`/verification/${selectedBuyingIndex}?game=${game.slug}`);
  };

  return (
    <Container className="py-8">
      <h3 className="text-2xl font-bold">Shop</h3>
      {/* image container */}
      <main className="mt-8">
        <h4 className="text-xl font-bold">{game.name}</h4>
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex-1">
            <div className="bg-ui-darker  mt-4">
              <img src={game.banner} alt={game.name} className="h-full w-full object-cover" />
            </div>
            <div>
              {selectedBuyingIndex !== -1 && (
                <div className="bg-ui-darker  mt-4">
                  {/* display selected */}
                  <div className="flex justify-between items-center gap-2 p-2">
                    <div className="flex items-center gap-2">
                      <img src={game.currency.image} alt={game.name} className="w-8 h-8" />
                      {BUYING_OPTIONS[selectedBuyingIndex].base} {game.currency.name}
                    </div>
                    <div className="flex items-center gap-2 relative pt-1">
                      <div className="absolute -top-2 -right-2 text-[10px]">Bonus</div>
                      <img src={game.currency.image} alt={game.name} className="w-8 h-8" />
                      {BUYING_OPTIONS[selectedBuyingIndex].bonus} {game.currency.name}
                    </div>
                  </div>
                  <div className="p-2">
                    <Button className="w-full" onClick={handleBuy}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <ul className="grid gap-4 grid-cols-2 mt-4">
            {BUYING_OPTIONS.map(({base, bonus, price}, index) => {
              return (
                <li key={index} role="button" onClick={() => setSelectedBuyingIndex(index)}>
                  {/* card */}
                  <div className="rounded-lg bg-ui-darker shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">
                    {/* image */}
                    <div className="w-[250px]">
                      <img
                        src={game.currency.image}
                        alt={game.currency.name}
                        className="h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
                      />
                    </div>
                    {/*  price section */}
                    <div className="flex justify-between gap-1 bg-ui-dark p-2 relative">
                      <p className="flex items-center gap-2">
                        <img src={game.currency.image} alt={game.name} className="w-8 h-8" />
                        {base} {game.currency.name}
                      </p>
                      {Boolean(bonus) && (
                        <p className="flex items-center gap-2 bg-ui-darkest px-2 py-1 pt-2 absolute right-0 top-0 bottom-0">
                          <div className="absolute top-[-8px] right-0">
                            <span className="text-white px-2 py-1 rounded-full text-[10px]">
                              Bonus
                            </span>
                          </div>
                          <img src={game.currency.image} alt={game.name} className="w-8 h-8" />
                          {bonus} {game.currency.name}
                        </p>
                      )}
                    </div>
                    <div>
                      {/* USD */}
                      <p className="bg-ui-darker p-4 text-center text-xl font-bold">{price} USD</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </Container>
  );
};
