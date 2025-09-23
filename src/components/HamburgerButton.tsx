import { nanoid } from "nanoid";

interface HamburgerButtonProps {
  onClick: () => void;
}

const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
  return (
    <div id={nanoid()} className="hamburger-container" onClick={onClick}>
      <div className="hamburger-item hamburger-item-1"></div>
      <div className="hamburger-item hamburger-item-2"></div>
      <div className="hamburger-item hamburger-item-3"></div>
    </div>
  );
};

export default HamburgerButton;

