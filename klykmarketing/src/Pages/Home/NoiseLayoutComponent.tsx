import React from "react";
import "../../Theme/css/NoiseLayoutComponent.css";

interface NoiseLayoutComponentProps {
  children: React.ReactNode;
}

const NoiseLayoutComponent: React.FC<NoiseLayoutComponentProps> = ({
  children,
}) => {
  return (
    <div className="container">
      <div className="content child-element">{children}</div>

      <div className="background">
        <div className="noise"></div>
        <div className="grain"></div>
      </div>
    </div>
  );
};

export default NoiseLayoutComponent;
