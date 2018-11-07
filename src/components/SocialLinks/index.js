import React from "react";
import SocialLink from "./components/SocialLink";

const SocialLinks = () => {
  const socialUrls = [
    { name: "website", url: "https://www.lamplightsolutions.net" },
    { name: "youtube", url: null },
    { name: "vimeo", url: null },
    { name: "instagram", url: null },
    { name: "linkedin", url: "https://www.linkedin.com/in/eddie-padin" },
    { name: "facebook", url: null },
    { name: "twitter", url: "https://twitter.com/xerotrade" },
    {
      name: "stack-overflow",
      url: "https://stackoverflow.com/story/eddielee394"
    },
    { name: "github", url: "https://github.com/eddielee394" }
  ];

  const showSocialUrls = socialUrls.map(
    socialUrl =>
      //if social url is not null, then render the component
      socialUrl.url && <SocialLink socialUrl={socialUrl} key={socialUrl.name} />
  );

  return (
    <div className="brk-social-links__block">
      <div className="brk-social-links__content">{showSocialUrls}</div>
    </div>
  );
};

export default SocialLinks;
