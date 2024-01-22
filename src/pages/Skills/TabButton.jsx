import { TabButtonSt } from "./styled.tw";

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <TabButtonSt className={isSelected ? 'active' : undefined}
        onClick={onSelect}
      >
        {children}
      </TabButtonSt>
    </li>
  );
};
