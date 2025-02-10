import Btn from "./btn"

export default function Cart() {
    let cart = ['Tomatoes', 'Pasta', 'KaKao']
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem product={cart[0]}/>
            <CartItem product={cart[1]}/>
            <CartItem product={cart[2]}/>
            <Btn color='blue'/>
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.product}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}