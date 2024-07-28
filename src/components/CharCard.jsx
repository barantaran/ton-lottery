import "./CharCard.css";

const CharCard = (char) => {
  let charImg;
  let charName;

  switch (char.name) {
    case "wolf":
      charName = "Серый Шторм";
      charImg = "/wolf_char.png";
      break;
    case "lion":
      charName = "Лев Риф";
      charImg = "/lion_char.png";
      break;
  }

  return (
    <div id={"charcard"}>
      <div id={"charname"}>{charName}</div>
      <img src={charImg} ></img>
    </div>
  );
};

export default CharCard;
