import { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function RightSideDrawer({ open, setOpen, title, children }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="focus:outline-none h-fit"
          >
            <XMarkIcon
              className="h-8 w-8 text-white font-bold"
              aria-hidden="true"
            />
          </button>
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-main-bg pb-12 ">
              <div className="flex justify-center items-center p-4 border-gray-200 bg-gray-200">
                {title ? (
                  <h2 className="text-xl text-primary font-semibold">
                    {title}
                  </h2>
                ) : (
                  <Link
                    className="flex items-center gap-1 font-bold text-2xl text-black"
                    href="/"
                  >
                    <p>
                      go<span className="font-bold text-green-500">B</span>
                      illing
                    </p>
                  </Link>
                )}
              </div>
              <div className="p-4">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
