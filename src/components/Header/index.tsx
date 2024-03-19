import React from "react";

interface HeaderProps {
  name: string;
  role: string;
  address: string;
  email: string;
  citizenship: string;
  phone: string;
  birthdate: string;
  birthcity: string;
  socialmedia: { name: string; link: string }[];
}

interface ItemProps {
  label: string;
  content: string | { name: string; link: string }[];
}

const Item: React.FC<ItemProps> = ({ label, content }) => {
  return (
    <div className="flex flex-row mb-2">
      <p className="font-bold text-lg w-32 mr-6">{label}</p>
      <div className="flex flex-1 items-center">
        <p className="text-sm">
          {Array.isArray(content)
            ? content.map((item, index) => {
                return (
                  <>
                    <a
                      className="text-black underline"
                      href={item.link}
                      target="_blank"
                    >
                      {item.name}
                    </a>
                    {index !== content.length - 1 ? ", " : ""}
                  </>
                );
              })
            : content}
        </p>
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({
  address,
  birthcity,
  birthdate,
  citizenship,
  email,
  name,
  phone,
  role,
  socialmedia,
}) => {
  return (
    <div className="text-left mb-8">
      <p className="font-bold text-5xl mb-6">{name}</p>
      <p className="font-bold text-3xl mb-16">{role}</p>
      <div className="flex flex-row">
        <div className="flex-1">
          <Item label="Endereço" content={address} />
          <Item label="E-mail" content={email} />
          <Item label="Nacionalidade" content={citizenship} />
        </div>
        <div className="flex-1">
          <Item label="Telefone" content={phone} />
          <Item label="Data de nascimento" content={`${birthdate}`} />
          <Item label="Redes Sociais" content={socialmedia} />
        </div>
      </div>
    </div>
  );
};

export default Header;
