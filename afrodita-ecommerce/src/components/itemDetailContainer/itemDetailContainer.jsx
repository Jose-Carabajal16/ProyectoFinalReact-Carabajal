import React, { useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/itemDetail';
import { doc, getDoc} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { baseDeDatos } from '../../fiberbase/config';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const produDatos = doc(baseDeDatos, "productos", id)

    getDoc(produDatos)
    .then((resp) => {
      setItem(
        {...resp.data(), id: resp.id}
      )
    })

  }, [id]);

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
