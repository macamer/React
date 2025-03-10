
import './App.css'
import AppRoutes from "./routes/AppRoutes.tsx";
import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Navigator from "./components/navigator";

function App() {

    return (
        <div className='body'>
            <Header />
            <main className="container">
                <Menu />
                <AppRoutes />
                <Navigator />
            </main>
            <Footer />
        </div>
    )
}

export default App
