import Timeline from "./Timeline.tsx"
import Common from "./Common.tsx"
import { Block } from "baseui/block"
import React from "react"

const Footer = () =>{
  return (
    <Block $style={{ background: "#ffffff" }}>
      <Timeline />
      <Common />
    </Block>
  )
}
export default Footer