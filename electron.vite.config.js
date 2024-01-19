import { defineConfig } from 'electron-vite'
import { resolve } from 'path'

const input =  resolve(__dirname, 'main/main.js');
console.log('input  >--->', input);
const isProduction = process.env.MODE ==='production'
export default defineConfig({
    main: {
        build: {
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'electron/main/index.js')
                }
            }
        }
    },
    // preload: {
    //     // vite config options
    // },
    renderer: {
        root: '.',
        // 根据坏境变量设置 base 路径，解决打包白屏问题
        // base: isProduction ?'./' : '/',
        build: {
            rollupOptions: {
                input: {
                    index: 'index.html'
                }
            }
        }
    }
})
