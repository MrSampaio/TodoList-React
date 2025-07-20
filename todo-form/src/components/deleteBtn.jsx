import { Trash2 } from "lucide-react";

function DeleteButton(props) {
  return (
    <button
      onClick={props.clickDelete}
      className="outline-0 border-0 bg-[#2b2c2e] text-amber-50 placeholder:text-[#757575] p-2.5 rounded-[10px] cursor-pointer"
    >
      <Trash2 />
    </button>
  );
}

export default DeleteButton;
