import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer';
import Home2 from './pages/Home2';
import './VerticalSlideCarousel.css';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        
        <Route path ='/' element={<Home />} />
        <Route path ='/Home2' element={<Home2 />} />
       
      </Routes>
      <Footer/>
      

      
      
      
    </>
  );
}

{/* <BrowserRouter history={history}>
        <Layout>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path = '/create' element={<PostCreate/>}/>
            <Route exact path = '/posts/:postSlug'  index element={<PostDetail/>}/>
            <Route path = '/posts/:postSlug/update'  index element={<PostUpdate/>}/>
          </Routes>
        </Layout>
  
      </BrowserRouter> */}
export default App;
