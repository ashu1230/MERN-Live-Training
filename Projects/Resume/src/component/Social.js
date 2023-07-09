import { BsInstagram, BsTwitter, BsLinkedin} from "react-icons/bs";
import { BiLogoGithub, BiLogoGmail} from "react-icons/bi";
export const Social = () => {
  
  return (<div className="flex gap-2 text-center justify-center content-center pb-4">

    <div className="bg-slate-800 p-2 rounded-full overflow-hidden relative"><BsLinkedin/></div>
    <div className="bg-slate-800 p-2 rounded-full overflow-hidden relative"><BiLogoGmail/></div>
    <div className="bg-slate-800 p-2 rounded-full overflow-hidden relative"><BsTwitter/></div>
    <div className="bg-slate-800 p-2 rounded-full overflow-hidden relative"><BiLogoGithub/></div>
    <div className="bg-slate-800 p-2 rounded-full overflow-hidden relative"><BsInstagram /></div>

</div>)
}