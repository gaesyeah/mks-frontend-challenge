/// <reference types="vite/client" />

import React from "react";

declare type CartState = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export { CartState };
