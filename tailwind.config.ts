import type { Config } from 'tailwindcss'

/**
 * DESIGN SYSTEM — Carbon · Cream · Burnt Red
 *
 * Proporção 90/10: os neutros carregam a interface inteira e o vermelho
 * queimado entra só como assinatura — CTA, indicador, régua, número. Em
 * bloco grande ele vira ruído e joga a página para "gaming/cyberpunk", que
 * é exatamente o oposto da intenção editorial.
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Fundos
        void: '#121212',
        carbon: '#181818',
        graphite: '#1E1E1E',
        steel: '#262626',

        // Bordas — sutis por definição
        line: {
          DEFAULT: '#333333',
          strong: '#525252',
          faint: '#272727',
        },

        // Tipografia
        chalk: '#F3F0E8', // cream: títulos, números, CTA
        ash: '#A09D96',   // descrições e subtítulos
        smoke: '#686763', // metadata e labels
        dim: '#55534F',   // detalhes de menor peso

        // Assinatura
        accent: {
          DEFAULT: '#E04A3F',
          bright: '#F15A4F',
          text: '#F2776B',
          soft: 'rgba(224,74,63,0.14)',
          line: 'rgba(224,74,63,0.45)',
          deep: '#7C2521',
        },
      },
      backgroundImage: {
        // Único gradiente permitido, e só em elementos pequenos.
        ember: 'linear-gradient(135deg, #E04A3F 0%, #7C2521 100%)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Archivo', 'system-ui', 'sans-serif'],
        sans: ['var(--font-display)', 'system-ui', 'sans-serif'],
        tech: ['var(--font-tech)', 'Space Grotesk', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        micro: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.13em' }],
        label: ['0.75rem', { lineHeight: '1.1rem', letterSpacing: '0.08em' }],
        sm: ['0.8125rem', { lineHeight: '1.55' }],
        base: ['0.9375rem', { lineHeight: '1.75' }],
        lg: ['1.0625rem', { lineHeight: '1.7' }],
        xl: ['1.375rem', { lineHeight: '1.45', letterSpacing: '-0.011em' }],
        '2xl': ['clamp(1.5rem,2.2vw,1.875rem)', { lineHeight: '1.24', letterSpacing: '-0.02em' }],
        '3xl': ['clamp(1.875rem,3.2vw,2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.028em' }],
        '4xl': ['clamp(2.25rem,5vw,4rem)', { lineHeight: '1.03', letterSpacing: '-0.036em' }],
        '5xl': ['clamp(2.75rem,7.5vw,6.5rem)', { lineHeight: '0.96', letterSpacing: '-0.042em' }],
        '6xl': ['clamp(3.5rem,11vw,10rem)', { lineHeight: '0.88', letterSpacing: '-0.048em' }],
      },
      spacing: {
        gut: '1.5rem',
        section: 'clamp(6.5rem,13vw,12rem)',
      },
      maxWidth: { shell: '86rem', text: '44rem' },
      borderRadius: { none: '0', xs: '2px', sm: '4px', md: '8px', lg: '12px' },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        power: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      screens: { xs: '400px' },
    },
  },
  plugins: [],
}

export default config
