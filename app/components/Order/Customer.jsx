import { useState } from "react";
import { PlusIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Modal from "@/components/Modal";
import TextInputField from "@/components/forms/TextInputField";
import Button from "@/components/Button";

export default function Customer() {
  const [openCustomerModal, setOpenCustomerModal] = useState(false);
  return (
    <div>
      <section
        id="customer"
        className="flex justify-between items-center cursor-pointer bg-secondary-50 text-secondary-600 p-4 rounded-md text-sm lg:text-base font-semibold"
        onClick={() => setOpenCustomerModal(true)}
      >
        <div className="flex gap-1">
          <UserCircleIcon className="w-5" />
          Steve Jobs
        </div>
        <PlusCircleIcon className="w-5" />
      </section>

      <Modal
        open={openCustomerModal}
        onClose={() => setOpenCustomerModal(false)}
      >
        <section id="add-customer">
          <h3 className="text-lg font-medium text-center">
            {" "}
            Add New Customer{" "}
          </h3>
          <div id="form" className="space-y-2">
            <TextInputField placeholder="Name" />
            <TextInputField placeholder="Email" />
            <TextInputField placeholder="Phone" />
            <TextInputField placeholder="Currency" />
            <TextInputField placeholder="TAX ID" />
            <div className="space-y-10 py-4">
              <p className="flex gap-2 text-primary-500 font-medium text-sm">
                <PlusIcon className="w-4" /> Add More Details
              </p>
              <Button className="w-full justify-center">Update </Button>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}
