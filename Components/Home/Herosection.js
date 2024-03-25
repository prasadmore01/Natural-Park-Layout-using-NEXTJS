export default function Herosection(){
  return (
    <>
      <div className="h-[100vh]  flex flex-wrap justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('http://localhost:3000/bghero.jpg')] bg-center bg-no-repeat bg-fixed bg-cover bg-blend-luminosity">
        <div className="flex flex-wrap flex-col gap-3 items-center justify-center h-[100%] w-[100%] ">
          <h4 className="text-[35px] font-bold text-white"> Welcome to </h4>
          <h1 className="text-[65px] tracking-wider font-black text-white text-center">SIERRA NATURAL PARK</h1>
           <button className="p-4 pl-7 pr-7 bg-red-500 text-[20px] text-white rounded-[100px] hover:bg-red-400 duration-1000">Learn More</button> 
        </div>
      </div>
    </>
  );
};
