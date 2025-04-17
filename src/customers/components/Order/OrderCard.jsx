import { Button, Card } from "@mui/material";
import React from "react";
const OrderCard = ({order,status}) => {

   const food =order.food
  console.log("order",order)
  return (
    <Card className="flex justify-between items-center p-5 ">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src={order.food.images[0]}
          alt=""
        />
        <div>
          <p>{order.food.name}</p>
          {/* <p>{food.name}</p> */}
          <p className="text-gray-400">₹{order.totalPrice}</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed" variant="contained">{status}</Button>
      </div>
    </Card>
  );
};

export default OrderCard;
