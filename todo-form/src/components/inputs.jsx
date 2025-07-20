function Input(props) {
  return (
    <input
      className="outline-0 border-0 bg-[#2b2c2e] text-amber-50 placeholder:text-[#757575] p-2.5 rounded-[10px] w-[400px] max-w-[75%] hover:outline-1  focus:outline-1 outline-[#afaaaa] "
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      ref={props.ref}
    />
  );
}

export default Input;
