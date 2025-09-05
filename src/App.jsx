import './index.css'
import Banner from './components/banner'
import Navbar from './components/navbar'
import HomePage from './pages/home-page'


function App() {
  

  return (
    <div>
      <header>
        <Banner/>
        <Navbar/>

      </header>

      <main>
       <HomePage/>
      </main>

      <footer>

      </footer>

    </div>
  )
}

export default App
