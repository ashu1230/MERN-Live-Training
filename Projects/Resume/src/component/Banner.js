import BannerImage from '../assets/hero-bg.jpg'
export const Banner = () => {
  return (<div>

    <div className="relative ">
      <img className="w-screen h-[650px] opacity-60" src={BannerImage} alt="react logo"/>
    </div>

    <div className="text-lg absolute top-0 left-10 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Ashutosh Maurya</h1>
      <p className="text-start p-4">I'Am <span className="underline decoration-sky-600 decoration-4 underline-offset-3 font-semibold ml-2">CSE Student</span></p>
    </div>
  </div>)
}