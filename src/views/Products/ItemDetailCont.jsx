import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemCount from '../../components/Products/ItemCount';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';
import Button from '@mui/material/Button';
import Loader from '../../components/loader';

const ItemDetailCont = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getProductById = async () => {
      const docs = [];
      const datos = await getDocs(collection(db, 'products'));

      datos.forEach((doc) => {
        if (doc.id === id) {
          docs.push({ ...doc.data(), id: doc.id, key: doc.id });
        }
      });

      setItem(docs[0]);
      setLoading(false);
    };

    getProductById();
  }, [id]);

  if (loading) {
    return( 
    <div id="itemDetail">
    <div className="themeBars">
      <h1>ITEM DETAIL</h1>
    </div>
    <div className='detailLoader'>
    <Loader/>
    </div>
    
    </div>

    )
  }

  if (item) {
    return (
      <div id="itemDetail">
        <div className="themeBars">
          <h1>ITEM DETAIL</h1>
        </div>
        <Button id="button" onClick={goBack} variant="contained">
          Continue buying
        </Button>
        <div className="itemDetailCont">
          <div className="detail-img">
            <img src={item.img} alt="prod" />
          </div>
          <div className="detail_desc">
            <h1>{item.name}</h1>
            <h2>${item.price}</h2>
            <h3>{item.description}</h3>
            <ItemCount data={item} />
            <h4>+ Add to favorites</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="itemDetailCont">No se encuentra este producto</div>;
  }
};

export default ItemDetailCont;