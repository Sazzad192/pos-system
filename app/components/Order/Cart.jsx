import {
  MinusCircleIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { deleteItem, handleCardClick } from "@/common/helpers/UtilKit";
import {
  ArrowDownCircleIcon,
  BanknotesIcon,
  HandRaisedIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/Button";

export default function Cart({ cardData, setCardData, setPayment }) {
  function calculateSubTotal() {
    return cardData.reduce((total, item) => total + item.price * item.count, 0);
  }

  function calculateTotalCount() {
    return cardData.reduce((total, item) => total + item.count * 1, 0);
  }

  function calculateTotalTax(subTotal, taxRate) {
    return subTotal * (taxRate / 100);
  }

  // Function to delete an item from the cart
  function deleteItem(id) {
    const updatedCardData = cardData.filter((item) => item.id !== id);
    setCardData(updatedCardData);
  }

  const subTotal = calculateSubTotal();
  const taxRate = 10;
  const totalTax = calculateTotalTax(subTotal, taxRate);
  const totalAmount = subTotal + totalTax;
  const totalCount = calculateTotalCount();

  return (
    <div className="space-y-7">
      <div>
        {cardData.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <div key={item.id} className="flex cursor-pointer w-full border">
              <p className="flex-1 py-4 px-1 lg:px-6 text-sm font-medium text-gray-900 truncate sm:w-auto sm:max-w-none">
                {item.name}
              </p>
              <p className="flex-1 px-1 lg:px-6 py-4 whitespace-nowrap">
                ${item.price}
              </p>
              <div className="flex gap-2 flex-1 px-1 lg:px-6 py-4">
                <PlusCircleIcon
                  onClick={() =>
                    handleCardClick(item, cardData, setCardData, "add")
                  }
                  className="text-gray-400 w-6 cursor-pointer"
                />
                <p>{item.count}</p>
                <MinusCircleIcon
                  onClick={() =>
                    handleCardClick(item, cardData, setCardData, "subtract")
                  }
                  className="text-gray-400 w-6 cursor-pointer"
                />
              </div>
              <p className="flex-1 px-1 lg:px-6 py-4 whitespace-nowrap sm:max-w-none">
                ${Number(item.count) * Number(item.price)}
              </p>
            </div>
            <TrashIcon
              onClick={() => deleteItem(item.id)}
              className="w-6 text-red-500"
            />
          </div>
        ))}
      </div>

      <div id="calculation" className="flex justify-end w-full px-7">
        <div
          id="calculation"
          className="flex flex-col w-full md:w-1/2 space-y-2"
        >
          <hr className="border border-gray-200" />
          <div className="flex justify-between">
            <p className="text-sm">Sub Total</p>
            <p className="self-end font-bold">${subTotal.toFixed(2)}</p>
          </div>
          <hr className="border border-gray-200" />
          <div className="flex justify-between">
            <p className="text-sm">TAX ({taxRate}%)</p>
            <p className="self-end font-bold">${totalTax.toFixed(2)}</p>
          </div>
          <hr className="border border-gray-200" />
          <div className="flex justify-between">
            <p className="text-sm font-bold text-primary-500 self-start">
              Total Price
            </p>
            <p className="self-end font-bold">${totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div
        id="product-count-price"
        className="flex justify-between bg-primary-100 text-primary-600 mr-6 p-4 rounded"
      >
        <p>Products Count ({totalCount})</p>
        <div className="flex justify-between w-1/2">
          <p className="font-bold text-lg">Total</p>
          <p className="font-bold text-lg">${totalAmount}</p>
        </div>
      </div>

      <div id="button-groups" className="flex flex-wrap gap-2 items-center">
        <Button onClick={() => setCardData([])} className="gap-1" variant="danger">
          <XMarkIcon className="w-5" /> Cancel
        </Button>
        <Button className="px-4 py-[10px] gap-1" variant="secondary">
          <HandRaisedIcon className="w-5" /> Hold
        </Button>
        <Button className="px-4 py-[10px] gap-1" variant="secondary">
          <ArrowDownCircleIcon className="w-5" /> Discount
        </Button>
        <Button
          onClick={() => setPayment(true)}
          className="gap-1"
          variant="primary"
        >
          <BanknotesIcon className="w-5" /> Pay Now
        </Button>
      </div>
    </div>
  );
}
