import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// tailwindcss classNames management
export default function cn(...classnames) {
  return twMerge(clsx(classnames));
}

// Function to handle click event and update card data
export function handleCardClick(item, cardData, setCardData, operation) {
  const existingItemIndex = cardData.findIndex(
    (cardItem) => cardItem.id === item.id
  );
  if (existingItemIndex !== -1) {
    if (operation === "subtract") {
      updateItemCount(existingItemIndex, setCardData, -1);
    } else {
      updateItemCount(existingItemIndex, setCardData, 1);
    }
  } else {
    setCardData((prevCardData) => [...prevCardData, { ...item, count: "1" }]);
  }
}

// Function to update the count of an existing item
export function updateItemCount(index, setCardData, increment) {
  setCardData((prevCardData) => {
    const updatedCardData = [...prevCardData];
    updatedCardData[index] = {
      ...updatedCardData[index],
      count: (parseInt(updatedCardData[index].count) + increment).toString(),
    };
    // Remove item if count becomes zero
    if (parseInt(updatedCardData[index].count) === 0) {
      updatedCardData.splice(index, 1);
    }
    return updatedCardData;
  });
}
