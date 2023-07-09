import './App.css';
import {Social} from './component/Social.js';
import {Footer} from './component/Footer.js';
import { Menu } from './component/Menu.js';
import { Thumbnail } from './component/Thumbnail.js';
import { Banner } from './component/Banner';

function App() {
  return (
    <div className="flex h-screen justify-between bg-slate-950 text-white pt-8 pl-8">
      <div className="">
        <Thumbnail />
        <Social />
        <Menu />
        <Footer />
      </div>
      <div className="pl-16">
        <Banner />
      </div>
    </div>
  );
}

export default App;
