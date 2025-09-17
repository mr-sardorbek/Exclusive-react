import './index.css'
import Banner from './components/banner'
import Navbar from './components/navbar'
import HomePage from './pages/home-page'
import Footer from './components/footer'


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
        <Footer/>
      </footer>

    </div>
  )
}

export default App
