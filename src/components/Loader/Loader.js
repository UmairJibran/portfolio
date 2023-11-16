const Loader = ({ theme }) => {
  return (
    <div>
      <img
        src={require("../../assets/images/loading-ball.svg").default}
        alt="infinity and beyond..."
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100vw",
          color: theme.imageHighlight,
        }}
      />
    </div>
  );
};

export default Loader;
