import Product from "./components/product/Product";
import Counter from "./components/counter/Counter";

function App() {
    return (
        <Counter name="xyz" age="456">
            <h1>AAAA</h1>
            <Product />
        </Counter>
    );
}

export default App;
