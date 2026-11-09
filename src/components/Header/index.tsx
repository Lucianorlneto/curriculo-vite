import React from "react";

interface HeaderProps {
  name: string;
  role: string;
  address: string;
  availability?: string;
  email: string;
  citizenship: string;
  phone: string;
  birthdate?: string;
  socialmedia: { name: string; link: string }[];
}

const Header: React.FC<HeaderProps> = ({
  address,
  availability,
  birthdate,
  citizenship,
  email,
  name,
  phone,
  role,
  socialmedia,
}) => {
  const contacts = [
    address,
    availability,
    citizenship,
    birthdate,
    email,
    phone,
  ].filter(Boolean);

  return (
    <div className="text-left mb-4">
      <p className="font-bold text-5xl">{name}</p>
      <p className="font-bold text-2xl mb-2">{role}</p>
      <p>{contacts.join(" · ")}</p>
      <p>
        {socialmedia.map((item, index) => (
          <React.Fragment key={item.link}>
            {index > 0 && " · "}
            <a
              className="text-black underline"
              href={item.link}
              target="_blank"
            >
              {item.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </a>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Header;
