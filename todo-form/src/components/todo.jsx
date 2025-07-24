const TODO_STYLE = {
  base: {
    position: "relative",
    backgroundColor: "#2c2e2b",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, background-size 0.5s ease",
    backgroundImage: "linear-gradient(to right, #4bff72 100%, transparent 0%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 50%",
    backgroundSize: "0% 2px",
  },
  concluded: {
    color: "#4bff72",
    backgroundSize: "100% 2px",
    // padding: "5px",
  },
};

function Todo(props) {
  const style = props.isConcluded
    ? { ...TODO_STYLE.base, ...TODO_STYLE.concluded }
    : TODO_STYLE.base;

  return (
    // <div className="">
    <button
      onClick={props.click}
      style={style}
      // style={props.isConcluded ? CONCLUDED : { backgroundColor: "#2c2e2b" }}
      className="flex outline-0 border-0 bg-[#2c2e2b] text-amber-50 placeholder:text-[#757575] p-2.5 rounded-[10px] w-[400px] max-w-[75%] cursor-pointer hover:bg-[#5c5f63] transition-colors duration-300"
    >
      {props.title}
    </button>
    // </div>
  );
}

export default Todo;
