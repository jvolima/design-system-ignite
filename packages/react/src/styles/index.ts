import {
  colors,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  radii,
  space,
} from '@jvolima-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fonts,
    fontWeights,
    fontSizes,
    lineHeights,
    radii,
    space,
  },
})
