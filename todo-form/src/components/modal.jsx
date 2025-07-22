function Modal({ isOpen, isClose }) {
  if (isOpen) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.7)] flex justify-center items-center z-1000">
        <div className="relative z-1001 opacity-100 bg-[#272727] w-[50%] h-max p-[250px] flex flex-col gap-[20px] rounded-[10px]">
          TEXTO
          <button
            onClick={isClose}
            className="absolute top-0 right-0  text-white text-2xl"
          >
            &times;
          </button>
          {/* <span className="close" onClick={}></span> */}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
