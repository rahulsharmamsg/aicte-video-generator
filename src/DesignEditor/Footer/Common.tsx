import React from "react"
import { styled } from "baseui"
import { Theme } from "baseui/theme"
import Icons from "../../assets/Icons/AlignBottom.tsx"
import { Button, KIND, SIZE } from "baseui/button"
import { useZoomRatio } from "@layerhub-io/react"
import { useTimer } from "@layerhub-io/use-timer"
import { Block } from "baseui/block"
import useDesignEditorContext from "../../hooks/useDesignEditorContext.ts"

const Container = styled<"div", {}, Theme>("div", ({ $theme }) => ({
  height: "50px",
  background: $theme.colors.white,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}))

interface Options {
  zoomRatio: number
}

export default function () {
  const { time } = useTimer()
  const { maxTime } = useDesignEditorContext()
  const [options, setOptions] = React.useState<Options>({
    zoomRatio: 20,
  })
  const zoomRatio: number = useZoomRatio()

  React.useEffect(() => {
    setOptions({ ...options, zoomRatio: Math.round(zoomRatio * 100) })
  }, [zoomRatio])

  return (
    <Container>
      
    </Container>
  )
}
