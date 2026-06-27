import { FaSearch } from "react-icons/fa";

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative w-full md:w-96">
      <FaSearch className="absolute left-4 top-4 text-gray-400" />

      <input
        type="text"
        placeholder="Search Contact..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}