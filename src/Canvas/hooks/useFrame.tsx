import React from "react";
import { Context } from "../context/context.tsx";

export function useFrame() {
  const { frame } = React.useContext(Context);
  return frame;
}
