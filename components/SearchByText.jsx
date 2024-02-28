import cn from "@/common/helpers/UtilKit";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SearchByText = ({
  labelClassName,
  label,
  placeholder,
  extendedClassName = "",
  value,
  onChange = () => {},
  onFocus = () => {},
  onReset = () => {},
}) => {
  return (
    <div className={`flex flex-col w-full gap-1 ${extendedClassName}`}>
      {label && (
        <label
          className={cn("text-sm font-bold text-grey-700", labelClassName)}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          className="w-full p-2 text-base border-gray-300 pl-7 focus:border-gray-400 focus:outline-none focus:ring-gray-400 placeholder:text-sm"
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
        />
        <MagnifyingGlassIcon className="text-grey-400 h-4 absolute top-[13px] left-2" />
        {value && (
          <XMarkIcon
            strokeWidth={3.5}
            onClick={onReset}
            className="text-gray-300 hover:text-grey-400 h-4 absolute top-[13px] right-2 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default SearchByText;
