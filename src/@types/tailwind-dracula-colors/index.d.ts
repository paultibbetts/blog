declare module 'tailwind-dracula/colors' {
    interface Colors {
        [string: string]: string[]
    }
    
    export function colors(): Colors
}