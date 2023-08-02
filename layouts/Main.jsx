import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

const Main = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Main