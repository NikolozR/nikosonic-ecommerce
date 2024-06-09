"use client";
function Input({
  label,
  name,
  labelClassName,
  inputClassName,
  placeHolder,
  defaultValue,
  disabled = false,
  additionalInfo,
  handleChange,
  type = "text",
  multiple = false,
  required = false,
}: InputProps) {
  return (
    <label
      htmlFor={name}
      className={
        "font-bold text-[#6C7275] text-[0.75rem] flex flex-col gap-[12px] " +
        labelClassName
      }
    >
      {label?.toUpperCase()}
      <input
        name={name}
        type={type}
        onChange={handleChange}
        multiple={multiple}
        disabled={disabled}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        required={required}
        minLength={required ? 1 : 0}
        className={
          "w-full rounded-[6px] border-[1px] placeholder:font-normal font-bold border-solid text-[1rem] border-[#CBCBCB] pl-[16px] py-[7px] outline-none text-gray-800 placeholder:text-[#6C7275] " +
          inputClassName
        }
      />
      {additionalInfo && (
        <span className="text-[#6C7275] italic text-[0.75rem] font-normal">
          {additionalInfo}
        </span>
      )}
    </label>
  );
}

export default Input;
