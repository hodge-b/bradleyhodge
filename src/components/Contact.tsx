import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { StyledContact } from "./styled/Contact.styled";
import { StyledContactDark } from "./styled/ContactDark.styled";

import type { ContactPageType } from "types";

interface ContactProps {
  data?: ContactPageType;
  darkMode: boolean;
}

const Contact = ({ data, darkMode }: ContactProps) => {
  const title = data?.title ?? "Let's Get in Touch";
  const mainHeading = data?.mainHeading ?? "Let's Talk!";
  const ctaButton = {
    label: data?.ctaButton.config.label ?? "Say Hi",
    link: data?.ctaButton.config.link ?? "mailto:bradley_hodge@hotmail.com",
  };

  const ContactElements = () => {
    return (
      <>
        <div className="title-container">
          <h2 className="main-title">
            <span className="main-title--number">-03-</span>
            {title}
          </h2>
          <hr className="title--hr title--hr--contact" />
        </div>
        <div className="contact-section-main-container">
          <h2 className="contact-section-subtitle">{mainHeading}</h2>
          {data?.description
            ? documentToReactComponents(data?.description)
            : ""}
          <div className="contact-section-sub-container">
            <a href={ctaButton.link} className="btn btn--say-hi">
              {ctaButton.label}
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {!darkMode ? (
        <StyledContact id="contact-section">
          <ContactElements />
        </StyledContact>
      ) : (
        <StyledContactDark id="contact-section">
          <ContactElements />
        </StyledContactDark>
      )}
    </>
  );
};

export default Contact;
