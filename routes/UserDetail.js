const express = require("express");
const router = express.Router();

router.get("/user_detail", (req, res) => {
  let details = {
    userName: "Simon Baker",
    profileUrl: "https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png",
    eloRating: "2250",
    totalTournamentCount: "34",
    tournamentWon: "09",
  };

  return res.json(details);
});

module.exports = router;
