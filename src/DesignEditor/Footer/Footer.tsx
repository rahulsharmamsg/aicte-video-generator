import Timeline from "./Timeline.tsx"
import Common from "./Common.tsx"
import { Block } from "baseui/block"
import React, { useState } from "react"

const Footer = ({audioSrc}) =>{

  return (
    <Block $style={{ background: "#ffe8ba" }}>
      <Timeline audioSrc={audioSrc}/>
      <Common />
    </Block>
  )
}
export default Footer
