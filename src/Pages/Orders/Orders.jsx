import React, { useContext, useEffect, useState } from 'react'
import classes from './Orders.module.css'
import LayOut from '../../Components/LayOut/LayOut';
import { db } from '../../Utility/firebase';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard/';

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext)
  const [orders,setOrders]=useState([])
  useEffect(() => {
    if(user) {
      db.collection("user").doc(user.uid).collection("orders").orderBy("created", "desc").
        onSnapshot((snapshot) => {setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        ); })
      
    } else {
      setOrders([])
    }
  },[])
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Orders</h2>
  
          {/* orderd items */}
         
{orders.length==0 &&  <div style={{padding:"20px"}}> you don't  have any orders yet </div>}
          <div>
            {
              orders?.map((eachOrder,i) => {
                return (
                  <div key={i}>
                    <hr />
                    <hr />
                    <p>Order ID: {eachOrder.id}</p>
                    {eachOrder?.data?.basket?.map((order) => 
                    (  <ProductCard
                        flex={true}
                        product={order}
                        key={order.id}
                      />)
                    )
                  }
                  </div>
                )
              })
            }
          </div>
        </div>
   </section>
    </LayOut>
  );
}

export default Orders