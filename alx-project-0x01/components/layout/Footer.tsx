import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-4 border-t mt-8 text-sm text-gray-600">
      © {new Date().getFullYear()} Tracy Karanja ALX Project. All rights reserved.
    </footer>
  );
};

export default Footer;
