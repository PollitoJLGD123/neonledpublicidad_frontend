export default function Banner({ titulo, imagen }) {
  const style = {
    backgroundImage: `url(${imagen})`,
  };

  return (
    // <main
    //   style={style}
    //   className="h-[calc(100vh-100px)] bg-cover overflow-hidden bg-center relative"
    // >
    //   <div className="rotate-45 absolute -top-[1000px] left-40">
    //     <div className="border-[32px] w-[1000px] h-[3000px] bg-gradient-to-b from-[#00b2fb] to-[#005ee0] absolute -left-[0px] top-0 z-10"></div>
    //     <div className="border-[32px] w-[1000px] h-[1000px] bg-[#02101d] absolute left-[calc(1000px-32px)] top-[700px]"></div>
    //   </div>
    //   <h1 className="text-white font-bold flex flex-col gap-4 items-center absolute left-0 w-[750px] bottom-40 text-4xl text-center">
    //     Conoce más sobre
    //     <span
    //       style={{ textShadow: '0 0 10px lightblue' }}
    //       className="text-6xl w-[600px]"
    //     >
    //       {titulo}
    //     </span>
    //     en nuestra página
    //   </h1>
    // </main>
    <main className="h-[calc(100vh-100px)] text-center">
      <div className="bg-[#00101B] rounded-t-[50px] p-14 flex flex-col justify-center items-center">
        <h1 className="text-white text-xl font-medium">
          Conoce más sobre
          <span className="font-title text-8xl font-normal block drop-shadow-[0_0_10px_#00B2FA]">
            {titulo}
          </span>
          en nuestra página
        </h1>
        <hr className="border-[#00B2FA] w-[144px] border-t-[3px] mt-6 mb-12" />
        <img src="/productosIndividuales/banner/flecha.svg" alt="" />
      </div>
    </main>
  );
}
