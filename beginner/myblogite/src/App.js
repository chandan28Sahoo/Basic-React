import CreateBlog from "./createBlog";
import BlogList from "./blogList";
import BlogView from "./blogView";
import EditBlog from "./editBlog";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/blog/create" element={<CreateBlog/>}/>
        <Route exact path="/blog" element={<BlogList/>}/>
        <Route exact path="/blog/:id" element={<BlogView/>}/>
        <Route exact path="/blog/edit/:id" element={<EditBlog/>}/>
      </Routes>
    </Router>
  ); 
}

export default App;
