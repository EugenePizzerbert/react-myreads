import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = props => {
  const { socialUrl } = props;

  //render brand icon if not website, otherwise render globe icon
  const faIconName =
    socialUrl.name !== "website" ? ["fab", socialUrl.name] : "globe";

  return (
    <a href={socialUrl.url} title={socialUrl.name}>
      <FontAwesomeIcon icon={faIconName} aria-hidden="true" />
    </a>
  );
};

export default SocialLink;
