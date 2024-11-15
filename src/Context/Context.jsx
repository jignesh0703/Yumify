import { createContext , useState } from "react";
import { food_list } from "../Arrays/food_list"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartitem, setcartitem] = useState({});

    const addToCart = (itemId) => {
        if (!cartitem[itemId]) {
            setcartitem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCart = () => {
        let totalAmont = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                let iteminfo = food_list.find((product) => product.id === item)
                totalAmont += iteminfo.price * cartitem[item];
            }
        }
        return totalAmont;
    }

    const contextValue = {
        food_list,
        cartitem,
        setcartitem,
        addToCart,
        removeFromCart,
        getTotalCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
}

export default StoreContextProvider