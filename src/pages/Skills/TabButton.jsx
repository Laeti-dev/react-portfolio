import { TabButtonSt } from "./styled.tw";

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <TabButtonSt
        className={isSelected ? 'active:text-active-color' : undefined}
        onClick={onSelect}
      >
        {children}
      </TabButtonSt>
    </li>
  )
};
