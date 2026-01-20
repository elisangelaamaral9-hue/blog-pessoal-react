import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 bg-indigo-900">
          <Home />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;