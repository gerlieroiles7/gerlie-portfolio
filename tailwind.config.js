tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(280px, 1fr))'
            },
            fontFamily:{
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation:{
                spin_slow: 'spin 6s linear infinite',
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'typing': 'typing 2s steps(6, end) 1s forwards',
                'blink': 'blink 1s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                typing: {
                    '0%': { width: '0', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { width: '100%', opacity: '1' }
                },
                blink: {
                    '0%, 50%': { borderColor: 'transparent' },
                    '51%, 100%': { borderColor: 'currentColor' }
                }
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#1a1a2e',
                darkTheme: '#0f0f23',
                darkCard: '#16213e',
                darkBorder: '#2d3748',
                primary: {
                    50: '#fdf4ff',
                    100: '#fae8ff',
                    200: '#f5d0fe',
                    300: '#f0abfc',
                    400: '#e879f9',
                    500: '#d946ef',
                    600: '#c026d3',
                    700: '#a21caf',
                    800: '#86198f',
                    900: '#701a75',
                }
            }, 
            boxShadow:{
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
                'glow': '0 0 20px rgba(217, 125, 32, 0.3)',
                'glow-purple': '0 0 30px rgba(184, 32, 230, 0.4)',
                'glow-dark': '0 0 20px rgba(217, 70, 239, 0.4)',
                'soft': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'soft-dark': '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
                'hover-dark': '0 20px 40px -3px rgba(0, 0, 0, 0.4), 0 8px 12px -2px rgba(0, 0, 0, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            }
        }
       
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.typing-text': {
                    'overflow': 'hidden',
                    'border-right': '2px solid',
                    'white-space': 'nowrap',
                    'display': 'inline-block',
                    'animation': 'typing 2s steps(6, end) 1s forwards, blink 1s infinite 3s'
                }
            }
            addUtilities(newUtilities)
        }
    ],
    darkMode: 'selector'
}