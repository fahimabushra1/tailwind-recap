import Product from "./Product";


const Products = () => {
    return (
        <div className="bg-yellow-100">
          <h1 className="py-12 text-4xl font-bold text-center text-blue-500">Our Products</h1>
        <div className="mx-16 flex flex-row flex-wrap gap-4">
          <Product></Product> 
          <Product></Product> 
          <Product></Product> 
          <Product></Product> 
          <Product></Product> 
          <Product></Product> 
        </div>
        </div>
    );
};

export default Products;