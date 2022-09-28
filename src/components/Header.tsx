import React from "react";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const headerStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "#ff6a95",
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{props.title}</h2>
      </div>
    </header>
  );
};

export default Header;
