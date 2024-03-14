import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className=" min-h-screen flex max-w-7xl mx-auto ">
      <Sidebar />
      {/* { feed} */}
      <Feed />

      {/* { Widgets} */}
    </main>
  );
}
