import 'animate.css';
import ProductPageWork from "@/Components/ProdcutPage/ProductPageWork";
import { getAllProducts } from "@/lib/AllFetch/allFetch";



const ProductsPage = async () => {
    
  const allProducts = await getAllProducts();
  
  return (
    <div>
      <div className="bg-linear-to-t from-orange-500 to-pink-500  p-15 text-center space-y-2">
        <h1 className="text-5xl text-white font-bold animate__animated animate__fadeInDown animate__delay-1s">Summer Collection</h1>
        <p className="text-white font-medium animate__animated animate__fadeInUp animate__delay-1s">
          Explore our complete range of premium summer essentials
        </p>
      </div>
      <div className='animate__animated animate__zoomIn'>

      <ProductPageWork allProducts={allProducts}></ProductPageWork>
      </div>
     
    </div>
  );
};

export default ProductsPage;
