function Button(props) {
  return (
    <button
      className="text-[#fff] bg-[#1f8fff] pb-[10px] pt-[10px] pl-[15px] pr-[15px] rounded-[10px] cursor-pointer hover:bg-[#0173e5]"
      type={props.type}
      onClick={props.click}
    >
      {props.textButton}
    </button>
  );
}

export default Button;
