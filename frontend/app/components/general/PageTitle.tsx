import React from "react";

type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h1 className={`text-2xl font-semibold text-gray-800 ${className ?? ""}`}>
      {children}
    </h1>
  );
};

