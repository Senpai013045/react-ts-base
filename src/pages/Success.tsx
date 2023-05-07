import {Navigate} from "react-router-dom";
import {Container} from "../components/Layout/Container";
import {GAMES, BUYING_OPTIONS} from "../data/games";

export const Success = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const gameSlug = searchParams.get("game");
  const index = Number(searchParams.get("index"));
  const game = GAMES.find(game => game.slug === gameSlug);
  const buyingOption = BUYING_OPTIONS[index];

  if (!game || index < 0) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="py-8">
      <h3 className="text-2xl font-bold">Success</h3>
      <main className="mt-8">
        <h4 className="text-xl font-bold">Thank you for your purchase</h4>
        <p className="mt-4">
          You have successfully purchased {buyingOption.base} {game.currency.name}{" "}
          {buyingOption.bonus > 0 && `with bonus of ${buyingOption.bonus} ${game.currency.name}`}{" "}
          for {game.name}
        </p>
        <p className="mt-4">Transaction ID: {Math.floor(Math.random() * 10000000000000000)}</p>
        {/* date and time */}
        <p className="mt-4">Date: {new Date().toLocaleDateString()}</p>
        <p className="mt-4">Time: {new Date().toLocaleTimeString()}</p>
      </main>
    </Container>
  );
};
