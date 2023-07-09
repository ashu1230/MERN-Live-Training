import thmbnailLogo from "../assets/1677618031693.png";
export const Thumbnail = () => {
  return(<div>

    <div className="w-32 bg-slate-800 h-full p-2 rounded-full overflow-hidden relative left-8">
      <img className="w-32 h-32 rounded-full" src={thmbnailLogo} alt="react logo" />
    </div>

    <div>
      <h1 className="text-bold text-2xl text-center py-2 truncate pb-4">Ashutosh Maurya</h1>
    </div>

  </div>)
}