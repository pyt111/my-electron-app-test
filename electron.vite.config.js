import { defineConfig } from 'electron-vite'
import { resolve } from 'path'

const input =  resolve(__dirname, 'main/main.js');
console.log('input  >--->', input);
export default defineConfig({
    main: {
        build: {
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'main/main.js')
                }
            }
        }
    },
    // preload: {
    //     // vite config options
    // },
    renderer: {
        root: '.',
        build: {
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'index.html')
                }
            }
        }
    }
})
