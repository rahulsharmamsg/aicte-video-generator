import { Block } from "baseui/block"
import Common from "./Common.tsx"
import Flip from "./Shared/Flip.tsx"
import React from "react"

export default function () {
  return (
    <Block
      $style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        justifyContent: "space-between",
      }}
    >
      <Block>
        <Flip />
      </Block>
      <Common />
    </Block>
  )
}
