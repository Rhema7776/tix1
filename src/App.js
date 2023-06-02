import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home'
import Footer from './components/Footer';
import Category from './pages/Category';
import CategoryId from './pages/CategoryId';
import Products from './pages/Products';
import ProductId from './pages/ProductId';
import Search from './pages/Search';
import Cart from './pages/Cart';
import { StateContext } from './lib/ContextApi';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      
      <StateContext>
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='categories' element={<Category />} >
          <Route path =':categoryid' element={<CategoryId />} />
        </Route>
        <Route path ='products' element={<Products />} >
          <Route path =':productid' element={<ProductId />} />
        </Route>
        <Route path='search' element={<Search/>}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>
      <Footer/>
      </StateContext>
      
      <Hero />
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
