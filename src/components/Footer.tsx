interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer
      className="footer-section"
      style={{ color: !darkMode ? "#6f7378" : "#969e98" }}
    >
      <p>
        <small>Built by Brad Hodge</small>
      </p>
    </footer>
  );
};

export default Footer;

