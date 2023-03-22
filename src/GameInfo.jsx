export const GameInfo = ({ scores, isXplaying }) => {
  return (
    <div className="gameinfo d-flex justify-content-between align-items-center ">
      <div className={`${isXplaying && "xscoreindicator"} xscores`}>
        <h5 className="xscore"> X Score - {scores.x}</h5>
      </div>
      <div className={`${!isXplaying && "oscoreindicator"} oscores`}>
        <h5 className="oscore">O Score - {scores.o}</h5>
      </div>
    </div>
  );
};
