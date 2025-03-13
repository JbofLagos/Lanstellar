import "./App.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
      </main>
    </div>
  )
}

export default App
