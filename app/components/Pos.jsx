"use client";
import { useState } from "react";
import OrderSystem from "./OrderSystem";
import Products from "./Products";
import Payment from "./Payment";

export default function Pos() {
  const [cardData, setCardData] = useState([]);
  const [payment, setPayment] = useState(false);
  return (
    <div className="flex flex-col md:flex-row items-start gap-2">
      <section id="order-system" className="w-full md:w-1/2">
        <OrderSystem setPayment={setPayment} cardData={cardData} setCardData={setCardData} />
      </section>
      <section
        id="product"
        className="w-full md:w-1/2 border-t-0 border border-gray-300 bg-gray-100"
      >
        {payment ? (
          <Payment cardData={cardData} setPayment={setPayment} />
        ) : (
          <Products cardData={cardData} setCardData={setCardData} />
        )}
      </section>
    </div>
  );
}
