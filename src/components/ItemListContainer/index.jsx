import "./ItemListContainer.css";
import ProductCard from "../general/ProductCard";
import ItemList from "../ItemList";
import { useEffect, useState } from "react";
import { getFirestore } from "../../services/getFirebase";

const ItemListContainer = () => {

    return(
        <div className="ItemListContainer">
            <div className="Itemcontainer">
                <ItemList />
            </div>
        </div>
    )
}

export default ItemListContainer;