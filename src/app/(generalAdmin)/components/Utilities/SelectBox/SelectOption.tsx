type Props = {
  value: string;
  bg: string;
  color: string;
  handleSelect: (value: string) => void;
};

const SelectOption = ({ value, bg, color, handleSelect }: Props) => {
  return (
    <li
      className={`${bg} ${color} p-4 hover:bg-primary-900 hover:text-white transition-all cursor-pointer`}
      onClick={() => handleSelect(value)}
    >
      {value}
    </li>
  );
};

export default SelectOption;
