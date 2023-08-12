import NavBar from "../features/navbar/navbar";
import ProductDetail from "../features/product/components/ProductDetails";
function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
     );
}

export default ProductDetailPage;