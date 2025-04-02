import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post-list-store";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  const handleSelectedTab = (tabName) => {
    setSelectedTab(tabName);
  }

  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} onSelectedTab={handleSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? <PostList></PostList> :
            <CreatePost></CreatePost>
          }
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;