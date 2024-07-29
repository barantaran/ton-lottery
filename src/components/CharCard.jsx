import "./CharCard.css";

const CharCard = (char) => {

  return (
    <div id={"charcard"}>
      <img src={char.charImg} ></img>
    </div>
  );
};

export default CharCard;
