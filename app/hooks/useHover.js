import React from "react";

export default function useHover() {
  const [hovered, setHovered] = React.useState(false);

  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return [hovered, bind];
}