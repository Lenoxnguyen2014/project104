// example theme with Typography.js
import { toTheme } from '@theme-ui/typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
import merge from 'lodash.merge'
const typography = toTheme( fairyGatesTheme)
export default merge(typography, {
  // optional style overrides go here
})