import BaseNavbar from "@/components/BaseNavbar";
import Customer from "./Order/Customer";
import Cart from "./Order/Cart";

export default function OrderSystem({ cardData, setCardData, setPayment }) {
  return (
    <div className="space-y-3">
      <section id="Navbar">
        <BaseNavbar />
      </section>
      <Customer />
      <section>
        {cardData.length ? (
          <Cart cardData={cardData} setCardData={setCardData} setPayment={setPayment} />
        ) : (
          <p className="text-center font-medium text-gray-500">
            No Item Added Yet
          </p>
        )}
      </section>
    </div>
  );
}
