import MessageError from "./error.jsx";

function Modal({
  isOpen,
  isClose,
  titleInput,
  descInput,
  children,
  onChangeTitle,
  onChangeDesc,
  titleRef,
  descRef,
  erro,
}) {
  if (isOpen) {
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.7)] flex justify-center items-center z-10000">
        <div className="fadeInLeft relative z-1001 opacity-100 bg-[#272727] w-[50vw] max-h-[50vh] p-[250px] flex flex-col justify-center items-center gap-[20px] rounded-[10px]">
          <div className="flex flex-row items-center justify-center text-[17pt]">
            <h2 className="text-[#fff] bg-[#1f8fff] uppercase text-[17pt] flex flex-row p-[10px]">
              EDITAR
            </h2>

            <p className="text-[#000] bg-[#fff] p-[10px] font-light">TAREFA</p>
          </div>

          <button
            onClick={isClose}
            className="absolute top-2 right-4 text-white text-4xl cursor-pointer hover:text-gray-500 transition-colors"
          >
            &times;
          </button>
          <input
            type="text"
            value={titleInput}
            onChange={onChangeTitle}
            className="outline-0 border-0 bg-[#2b2c2e] text-amber-50 placeholder:text-[#757575] p-2.5 rounded-[10px] w-[40vw] hover:outline-1  focus:outline-1 outline-[#afaaaa] "
            ref={titleRef}
            placeholder="Digite o título da tarefa"
          />
          <MessageError errorMessage={erro} />
          <textarea
            value={descInput}
            onChange={onChangeDesc}
            className="outline-0 border-0 bg-[#2b2c2e] text-amber-50 placeholder:text-[#757575] p-2.5 rounded-[10px] w-[40vw] min-h-[20vh] hover:outline-1  focus:outline-1 outline-[#646464] "
            ref={descRef}
            placeholder="Digite a descrição da tarefa"
          />

          <div>{children}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
