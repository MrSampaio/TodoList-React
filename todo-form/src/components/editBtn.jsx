import { Pencil } from "lucide-react";

function EditButton(props) {
  return (
    <button
      onClick={props.clickEdit}
      className="outline-0 border-0 bg-[#2b2c2e] text-amber-50 placeholder:text-[#757575] p-2.5 rounded-[10px] cursor-pointer"
    >
      <Pencil />
    </button>
  );
}

export default EditButton;
