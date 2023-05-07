import {Link, Navigate} from "react-router-dom";
import {Container} from "../components/Layout/Container";
import {GAMES, BUYING_OPTIONS} from "../data/games";
import {Button} from "../components/UI/Button";
import {useMemo} from "react";

export const Success = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const gameSlug = searchParams.get("game");
  const index = Number(searchParams.get("index"));
  const gamerId = searchParams.get("gamerId");
  const game = GAMES.find(game => game.slug === gameSlug);
  const buyingOption = BUYING_OPTIONS[index];
  const transactionId = useMemo(() => {
    const random = Math.random().toString(36);
    //ignore the first 2 characters, dont use substring
    return random.slice(2);
  }, []);

  if (!game || index < 0) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="py-8 flex items-center justify-center h-screen">
      <div className="translate-y-[-50%]">
        <h3 className="text-2xl font-bold">Success</h3>
        <main className="mt-8">
          <h4 className="text-xl font-bold">Thank you for your purchase</h4>
          <p className="mt-4">
            You have successfully purchased {buyingOption.base} {game.currency.name}{" "}
            {buyingOption.bonus > 0 && `with bonus of ${buyingOption.bonus} ${game.currency.name}`}{" "}
            for {game.name}
          </p>
          <p className="mt-4">Your account has been credited with {buyingOption.price} USD.</p>
          <p className="mt-4">Gamer ID: {gamerId}</p>
          <p className="mt-4">Transaction ID: {transactionId}</p>
          {/* date and time */}
          <p className="mt-4">Date: {new Date().toLocaleDateString()}</p>
          <p className="mt-4">Time: {new Date().toLocaleTimeString()}</p>
          <div className="mt-8 flex gap-x-4 items-center">
            <Link to={`/`}>
              <Button>Back to Shop</Button>
            </Link>
            <Link to={`/shop/${gameSlug}`}>
              <Button>Buy Again</Button>
            </Link>
          </div>
        </main>
      </div>
    </Container>
  );
};
