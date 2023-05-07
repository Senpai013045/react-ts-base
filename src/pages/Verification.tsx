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
  const [gamerIdVerificationError, setGamerIdVerificationError] = useState("");
  const [gamerVerified, setGamerVerified] = useState(false);
  const [gamerId, setGamerId] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const index = Number(params.index);
  const gameSlug = new URLSearchParams(window.location.search).get("game");
  const game = GAMES.find(game => game.slug === gameSlug);

  if (!game || index < 0) {
    return <Navigate to="/" />;
  }

  const handleVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (!gamerId) {
        setGamerIdVerificationError("Please enter a valid gamer Id");
        setGamerVerified(false);
        setIsLoading(false);

        return;
      }
      //only numbers are allowed
      if (!/^\d+$/.test(gamerId)) {
        setGamerIdVerificationError("Gamer id invalid");
        setGamerVerified(false);
        setIsLoading(false);

        return;
      }
      //gamer id should be 10 characters long
      if (gamerId.length !== 10) {
        setGamerIdVerificationError("Gamer id invalid");
        setGamerVerified(false);
        setIsLoading(false);
        return;
      }
      //if ends in 90 it is invalid
      if (gamerId.endsWith("90")) {
        setGamerIdVerificationError("Gamer id invalid");
        setGamerVerified(false);
        setIsLoading(false);
        return;
      }
      setGamerIdVerificationError("");
      setGamerVerified(true);
      setIsLoading(false);
    }, 2000);
  };

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
                  navigate(`/success?game=${game.slug}&index=${index}&gamerId=${gamerId}`);
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
          {gamerVerified && (
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
          )}

          {/* gamer id verification */}
          <div className="mt-8 bg-ui-da">
            <h4 className="text-xl font-bold">Gamer ID Verification</h4>
            <p className="mt-4">Please enter your gamer ID to receive your in-game currency</p>
            <div className="mt-4">
              <label className="text-sm font-bold">Gamer ID</label>
              <Input
                value={gamerId}
                onChange={e => {
                  setGamerId(e.target.value);
                  setGamerVerified(false);
                }}
                type="text"
                className="w-full"
              />
            </div>
            <p className="mt-2 text-red-500">{gamerIdVerificationError}</p>
            {!gamerVerified && (
              <Button className="w-full mt-4" onClick={handleVerification}>
                {isLoading ? "Processing" : "Verify"}
              </Button>
            )}
          </div>
          {/* mock payment */}
          {gamerVerified && (
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
          )}

          {/* mock payment end */}
        </div>
      </div>
    </Container>
  );
};
