import cn from "@/common/helpers/UtilKit";
import ErrorByFieldName from "./ErrorByFieldName";

// Styles
const INPUT_LABEL_STYLES = "block text-xs text-gray-500";
const INPUT_BOX_STYLES =
  "w-full bg-transparent border-x-0 border-t-0 border-b border-gray-300 focus:ring-0 focus:border-b-2 focus:border-primary-200 text-sm text-gray-700 placeholder-gray-400";

export default function TextInputField(props) {
  const {
    type = "text",
    name,
    id,
    label,
    placeholder,
    className,
    labelClassName,
    mainDivClass,
    errors,
    value,
    onChange,
    readOnly,
  } = props;

  // Combined input field styles
  const INPUT_FIELD_STYLES = cn(INPUT_BOX_STYLES, className);

  return (
    <div className={cn("relative w-full", mainDivClass)}>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={INPUT_FIELD_STYLES}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        {...props}
      />
      <label
        htmlFor={name}
        className={cn(
          INPUT_LABEL_STYLES,
          "absolute left-0 -top-1.5 transition-all"
        )}
      >
        {label}
      </label>
      <ErrorByFieldName field={name} errors={errors} />
    </div>
  );
}
