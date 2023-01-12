export function Input({
  type = 'text',
  placeholder = '',
  onChange,
  required = false,
  value = '',
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={({ target }) => onChange(target.value)}
    ></input>
  );
}