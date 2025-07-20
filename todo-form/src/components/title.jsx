function Title() {
  return (
    <div className="uppercase font-bold flex flex-col items-center gap-[5px] shadow-[rgba(255,255,255,0.85)_0px_7px_29px_0px]">
      <h1 className="flex flex-row items-center justify-center text-[#000] font-[Merriweather] rounded-[50%] p-[3.5%] text-center bg-[#000] text-[20pt] font-black">
        <p className="text-[#fff]">G</p>
        <p className="text-[#1f8fff]">T</p>
      </h1>
      <div className="flex flex-row items-center justify-center text-[17pt]">
        <h2 className="text-[#000] bg-[#fff] uppercase text-[17pt] font-light flex flex-row p-[10px]">
          GERENCIAR
        </h2>

        <p className="text-[#fff] bg-[#1f8fff] p-[10px]">TAREFAS</p>
      </div>
    </div>
  );
}

export default Title;
