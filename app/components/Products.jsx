
import { handleCardClick, updateItemCount } from "@/common/helpers/UtilKit";
import Button from "@/components/Button";
import RightSideDrawer from "@/components/RightSideDrawer";
import SearchByText from "@/components/SearchByText";
import { categories, products } from "@/data";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";

export default function Products({cardData, setCardData}) {
  const [openRightSideDrawer, setOpenRightSideDrawer] = useState(false);

  return (
    <div>
      <section id="search" className="">
        <SearchByText placeholder="Search Products...." />
      </section>
      <section id="filter-badge" className="mx-auto px-3 lg:px-5 py-3">
        <div className="flex gap-1 lg:gap-3 items-center" id="all-category">
          {categories.slice(0, 2).map((item) => (
            <Button
              key={item.id} // Make sure each item has a unique key
              className="text-sm px-2 py-1 font-medium border-2 border-gray-300 text-gray-500 whitespace-nowrap"
              variant="outline"
            >
              {item.name}
            </Button>
          ))}
          <EllipsisVerticalIcon
            onClick={() => setOpenRightSideDrawer(true)}
            className="w-5 text-gray-900 cursor-pointer"
          />
        </div>
      </section>

      <section
        id="products"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-3 lg:px-5 py-2"
      >
        {products.map((item) => (
          <div
            id="product-card"
            key={item.id}
            className="flex flex-col gap-2 border border-gray-300 rounded-md text-center cursor-pointer"
            onClick={() => handleCardClick(item, cardData, setCardData)}
          >
            <Image
              src={item.img}
              alt={item.name}
              width={400}
              height={400}
              className="w-full h-40 object-cover"
            />
            <p className="font-medium">${item.price}</p>
            <hr className="border" />
            <p className="font-medium">{item.name}</p>
          </div>
        ))}
      </section>

      <RightSideDrawer open={openRightSideDrawer} setOpen={setOpenRightSideDrawer}>
      <div className="flex gap-1 lg:gap-3 items-center flex-wrap" id="all-category">
          {categories.map((item) => (
            <Button
              key={item.id} // Make sure each item has a unique key
              className="text-sm px-2 py-1 font-medium border-2 border-gray-300 text-gray-500 whitespace-nowrap"
              variant="outline"
            >
              {item.name}
            </Button>
          ))}
        </div>
      </RightSideDrawer>
    </div>
  );
}
