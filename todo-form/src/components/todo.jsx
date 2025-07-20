function Todo(props) {
  return (
    // <div className="">
    <p className="outline-0 border-0 bg-[#2b2c2e] text-amber-50 placeholder:text-[#757575] p-2.5 rounded-[10px] w-[400px] max-w-[75%] cursor-pointer">
      {props.title}
    </p>
    // </div>
  );
}

export default Todo;
