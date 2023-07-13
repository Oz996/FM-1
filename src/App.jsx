import image from "./../public/image-qr-code.png";

const App = () => {
  return (
    <div className="blue-grey-bg h-screen w-full flex justify-center items-center">
      <div className="bg-white w-72 h-[28rem] rounded-2xl flex flex-col gap-28 pt-3 items-center">
        <div className="w-[16rem] h-[10rem] rounded-2xl">
          <img src={image} alt="logo" className="rounded-2xl" />
        </div>
        <div className="text-center w-10/12">
        <h1 className="text-xl font-bold">Improve your front-end skills by building projects</h1>
        <p className="text-[15px] pt-3">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
};

export default App;
