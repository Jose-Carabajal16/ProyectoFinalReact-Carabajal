import React, { useEffect, useState } from "react";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { baseDeDatos } from "../../fiberbase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      const productosBase = collection(baseDeDatos, "productos");

      if (categoryId) {
        const q = query(productosBase, where("categoria", "==", categoryId));
        const querySnapshot = await getDocs(q);
        setProductos(
          querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      } else {
        const querySnapshot = await getDocs(productosBase);
        setProductos(
          querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      }
    };

    fetchProductos();
  }, [categoryId]);

  return (
    <div className="container contenido">
      <h2 className="titulo">Afrodita-Tienda de Joyas</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;


