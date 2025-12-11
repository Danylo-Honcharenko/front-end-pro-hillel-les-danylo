import {defineConfig} from "vite";
import path from "path";
import inject from "@rollup/plugin-inject";

export default defineConfig({
    root: 'src',
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 3000
    },
    plugins: [
        inject({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ]
});