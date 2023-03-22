export const Box = ({ value, handleClick, index }) => {
  const style = value === "X" ? "box x" : "box o";
  return (
    <button
      className={style}
      onClick={() => {
        if (value) {
          return;
        } else {
          handleClick(index);
        }
      }}
    >
      {value}
    </button>
  );
};
