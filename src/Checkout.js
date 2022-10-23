import { SportsBasketball } from "@mui/icons-material";
import React from "react";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (

        <div className="checkout">
            <div className="checkout__left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZM0ZYRCc2W8crB37FZuv-cCY-dxMolWxPw&usqp=CAU" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout;