import { TabButtonSt } from "./styled.tw";

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <TabButtonSt
        className={`${
          isSelected ? 'text-active-color' : 'text-nav-bar-color'}`}
        onClick={onSelect}
      >
        {children}
      </TabButtonSt>
    </li>
  )
};
