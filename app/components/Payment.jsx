import Button from "@/components/Button";
import TextInputField from "@/components/forms/TextInputField";
import {
  BanknotesIcon,
  CreditCardIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const paymentOptions = [
  { label: "Cash", icon: BanknotesIcon, url: "cash" },
  { label: "Card", icon: CreditCardIcon, url: "card" },
  { label: "On Account", icon: UserCircleIcon, url: "account" },
  { label: "Cheque", icon: CreditCardIcon, url: "cheque" },
];

export default function Payment({ cardData, setPayment }) {
  const [selectedMethod, setSelectedMethod] = useState("cheque");
  const isActive = (activeUrl) => selectedMethod === activeUrl;

  function calculateSubTotal() {
    return cardData.reduce((total, item) => total + item.price * item.count, 0);
  }

  function calculateTotalTax(subTotal, taxRate) {
    return subTotal * (taxRate / 100);
  }

  const subTotal = calculateSubTotal();
  const taxRate = 10;
  const totalTax = calculateTotalTax(subTotal, taxRate);
  const totalAmount = subTotal + totalTax;

  return (
    <div className="min-w-full mx-auto px-3 lg:px-5 py-3 space-y-4">
      <div className="flex justify-between border border-gray-300 rounded p-4">
        <p>Order Amount</p>
        <p className="font-bold text-xl">${totalAmount}</p>
      </div>

      <div className="flex bg-white px-4 pt-4">
        <div className="w-1/3 flex flex-col gap-4 border-r border-gray-400">
          {paymentOptions.map((item, i) => (
            <div
              key={i}
              className={`flex gap-2 items-center text-sm lg:text-lg font-semibold text-gray-400 cursor-pointer ${isActive(item.url) &&
                "bg-secondary-200 text-secondary-500 rounded p-2 mr-2"
                }`}
              onClick={() => setSelectedMethod(item.url)}
              href={item.url}
            >
              <item.icon className="text-gray-400 w-4 lg:w-6" />
              {item.label}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-start p-2 gap-20">
          <div id="form" className="space-y-2">
            <TextInputField placeholder="Name" />
            <TextInputField placeholder="Number" />
            <TextInputField placeholder="Amount" />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <Button
              onClick={() => setPayment(false)}
              className="gap-2"
              variant="danger"
            >
              <XMarkIcon className="w-6" /> Cancel
            </Button>

            <Button className="gap-2 " variant="primary">
              <BanknotesIcon className="w-6" /> Complete Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
