import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

/**
 * PrimeVue theme preset tuned to the portfolio's indigo accent
 * (#4F46E5) so PrimeVue components match the hand-authored design.
 */
export const PortfolioPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eeedfc',
      100: '#dcd9fb',
      200: '#c7c3f4',
      300: '#a5a0f5',
      400: '#7b72ee',
      500: '#4f46e5',
      600: '#473fce',
      700: '#3f38b7',
      800: '#322c92',
      900: '#28236f',
      950: '#1b1849',
    },
  },
})
