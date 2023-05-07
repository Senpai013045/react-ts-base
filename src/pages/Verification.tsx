import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Container} from "../components/Layout/Container";
import {GAMES, BUYING_OPTIONS} from "../data/games";
import {Button} from "../components/UI/Button";
import {useState} from "react";
import {Input} from "../components/UI/Input";
import {Modal} from "../components/UI/Modal";

export const Verification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const index = Number(params.index);
  const gameSlug = new URLSearchParams(window.location.search).get("game");
  const game = GAMES.find(game => game.slug === gameSlug);

  if (!game || index < 0) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="py-8">
      {isModalOpen && (
        <Modal>
          <h3 className="text-xl font-bold">Verification</h3>
          <p className="mt-4">Please enter the verification code sent to your email</p>
          <div className="mt-4">
            <Input
              w-full
              placeholder="Verification Code"
              value={verificationCode}
              onChange={e => {
                //max limit is 6 characters
                if (e.target.value.length <= 6) {
                  setVerificationCode(e.target.value);
                }
              }}
              type="password"
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <Button
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  navigate(`/success?game=${game.slug}&index=${index}`);
                }, 1000);
              }}
            >
              {isLoading ? "Processing" : "Verify"}
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          </div>
        </Modal>
      )}
      <h4 className="text-xl font-bold">{game.name}</h4>
      {/* show game banner */}
      <div className="flex justify-between flex-wrap gap-4">
        <div className="flex-1">
          <div className="bg-ui-darker  mt-4">
            <img src={game.banner} alt={game.name} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-ui-darker mt-4">
            {/* display selected */}
            <div className="flex justify-between items-center gap-2 p-2">
              <div className="flex items-center gap-2">
                <img src={game.currency.image} alt={game.name} className="w-8 h-8" />
                {BUYING_OPTIONS[index].base} {game.currency.name}
              </div>
              <div className="flex items-center gap-2">
                Bonus
                <img src={game.currency.image} alt={game.name} className="w-8 h-8" />
                {BUYING_OPTIONS[index].bonus} {game.currency.name}
              </div>
            </div>
          </div>
          {/* mock payment */}
          <div className="mt-8">
            <Button
              className="w-full"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  setIsModalOpen(true);
                }, 3000);
              }}
            >
              {isLoading ? "Processing" : "Pay with Connected Wallet"}
            </Button>
          </div>

          {/* mock payment end */}
        </div>
      </div>
    </Container>
  );
};
