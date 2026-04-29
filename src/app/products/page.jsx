
import ProductPageWork from "@/Components/ProdcutPage/ProductPageWork";
import { getAllProducts } from "@/lib/AllFetch/allFetch";



const ProductsPage = async () => {
    
  const allProducts = await getAllProducts();
  
  return (
    <div>
      <div className="bg-linear-to-t from-orange-500 to-pink-500  p-15 text-center space-y-2">
        <h1 className="text-5xl text-white font-bold">Summer Collection</h1>
        <p className="text-white font-medium">
          Explore our complete range of premium summer essentials
        </p>
      </div>
      <ProductPageWork allProducts={allProducts}></ProductPageWork>
     
    </div>
  );
};

export default ProductsPage;
