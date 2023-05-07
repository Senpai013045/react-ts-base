import {useNavigate} from "react-router-dom";
import {Container} from "../components/Layout/Container";
import {GAMES} from "../data/games";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-8">
      <header className="flex items-center gap-x-4 border-b-2 border-ui-lighter">
        <p>
          Hello, <span className="font-bold">Nabin Gaming</span>
        </p>
      </header>
      <main className="mt-10">
        <section>
          <h3 className="text-2xl font-bold">Popular Games {">>>"}</h3>
          <div className="flex justify-center items-center flex-wrap gap-8 mt-8">
            {GAMES.map(game => {
              return (
                <article
                  key={game.name}
                  role="button"
                  className="relative hover:scale-105 transition-all duration-300 ease-in-out"
                  onClick={() => navigate(`/shop/${game.slug}`)}
                >
                  <div
                    //on hover shrink the background image
                    className="w-[300px] h-[300px]"
                    style={{
                      backgroundImage: `url(${game.banner})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <footer className="text-center bg-ui-darker p-4">
                    <h4 className="text-lg">{game.name}</h4>
                  </footer>
                  {game.isHot && (
                    <div className="absolute top-1 right-1 bg-red-500 text-white px-4 py-1">
                      Hot
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </Container>
  );
};
