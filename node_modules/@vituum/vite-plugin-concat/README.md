<a href="https://npmjs.com/package/@vituum/vite-plugin-concat"><img src="https://img.shields.io/npm/v/@vituum/vite-plugin-concat.svg" alt="npm package"></a>
<a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/@vituum/vite-plugin-concat.svg" alt="node compatility"></a>

# ⚡️🔗 ViteConcat

Vite plugin for concatenating files together, handy especially for old projects that used gulp-concat or grunt-concat for concatenating `.js` files together.

Automatically concatenates all `import './paths'` together into single file, additionally you can provide glob of files which should be also concated into single file via `files` option. 

```js
import concat from '@vituum/vite-plugin-concat'

export default {
    plugins: [
        concat({
            input: ['main.js']
        })
    ]
}
```

* Read the [docs](https://vituum.dev/plugins/concat.html) to learn more about the plugin options.

### Requirements

- [Node.js LTS (16.x)](https://nodejs.org/en/download/)
- [Vite](https://vitejs.dev/)
