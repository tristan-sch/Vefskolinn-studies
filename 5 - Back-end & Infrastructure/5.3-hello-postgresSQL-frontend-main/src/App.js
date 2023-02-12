import { useState } from "react";
import MakeBlog from "./components/MakeBlog";

const App = () => {
  const [route, setRoute] = useState("makeBlog");
  return (
    <div>
      <button onClick={() => setRoute("makeBlog")}>makeBlog</button>
      <button onClick={() => setRoute("viewBlog")}>viewBlog</button>
      {route === "makeBlog" && <MakeBlog />}
    </div>
  );
};

export default App;
