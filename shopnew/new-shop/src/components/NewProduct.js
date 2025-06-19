import ProductForm from "./ProductForm";
import './Newproduct.css'
function NewProduct(props){
    function savedproduct(obj){
        console.log("i am inside of newproduct.js")
        console.log(obj)
        props.new(obj)
        // props(obj);
    }
return (
    <div className="back">
        <ProductForm saveProduct ={savedproduct}></ProductForm>
    </div>
)
}

export default NewProduct;