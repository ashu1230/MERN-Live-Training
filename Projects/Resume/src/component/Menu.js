import { MenuData } from "./MenuData.js"

export const Menu = () => {
  return (<div className="flex ">

    <ul className="truncate">
      {MenuData.map((val, index) => (
        <li key={index} className="flex items-center py-2 opacity-60 hover:opacity-100 cursor-pointer">
          <div className="mr-2">
            <span className="hover:stroke-cyan-500 transform hover:scale-125 transition-all">{val.icon}</span>
          </div>
          <div>{val.title}</div>
        </li>
      ))}
    </ul>


  </div>)
}