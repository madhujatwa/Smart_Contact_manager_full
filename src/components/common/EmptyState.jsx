
import { FaAddressBook } from "react-icons/fa";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <FaAddressBook
        size={70}
        className="text-slate-400"
      />

      <h2 className="mt-5 text-2xl font-bold">
        No Contacts Found
      </h2>

      <p className="text-slate-500 mt-2">
        Add your first contact.
      </p>

    </div>
  );
}

