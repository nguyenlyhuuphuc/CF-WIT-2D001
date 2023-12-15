import "../../css/Product.css";
import ProductItem from "./ProductItem";
import { ProductList } from "../../data";

export default function Product() {
    return (
        <div className="product-list">
            {ProductList.map((item, index) => {
                return <ProductItem key={index} name={item.name || "Name"} price={item.price || "123"} image={item.image} />;
            })}
        </div>
    );
}
