import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

export default function Home({ newsResults }) {
  return (
    <main className=" min-h-screen flex  mx-auto ">
      <Sidebar />
      <Feed />
      <Widgets  />
    </main>
  );
}
///https://saurav.tech/NewsAPI/top-headlines/category/business/in.json

