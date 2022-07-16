import { defineConfig } from 'iles'
import Unocss from 'unocss/vite'
import { presetAttributify, presetTypography, presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import DraculaColors from 'tailwind-dracula/colors'

export default defineConfig({
    extendFrontmatter (frontmatter, filename) {
        if (
            filename.includes('/blog/posts/')
            && filename.includes('.md')
        ) {
            frontmatter.layout = 'post'
        }
    },
    modules: [
        '@islands/headings',
        '@islands/prism',
    ],
    vite: {
        server: {
            port: 9000
        },
        plugins: [
            Unocss({
                presets: [
                    presetAttributify(),
                    presetUno(),
                    presetTypography(),
                ],
                theme: {
                    colors: {
                        night: '#181818',
                        ...DraculaColors
                    }
                },
                transformers: [
                    transformerDirective(),
                ]
            })
        ]
    }
})
