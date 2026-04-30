import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";


const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;