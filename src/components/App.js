import {Routes,Route} from 'react-router-dom';            //difference betwwen routes and switch is only for efficiency difference
import {Home,PostDetail,CreatePost,Navbar} from './';

function App() {
  return (
    <div className="container">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create-post" element={<CreatePost/>}></Route>
      <Route path="/post/:postId" element={<PostDetail />}></Route>
     </Routes>
    </div>
  );
}

export default App;
