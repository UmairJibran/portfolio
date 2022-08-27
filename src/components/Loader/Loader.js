const Loader = ({ theme }) => {
  return (
    <div>
      <img
        src={require("../../assets/images/infinity-gif.svg").default}
        alt="infinity and beyond..."
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
          color: theme.imageHighlight,
        }}
      />
    </div>
  );
};

export default Loader;
