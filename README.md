# Deno Once

Create a function that calls and cache a function once

## Usage

```typescript
import once from 'https://ksxgithub.github.io/deno-once/index.ts'
const ran = once(Math.random)
console.log(ran() === ran()) // => true
```

### File Extension

* `*.ts` for Deno (e.g. https://ksxgithub.github.io/deno-once/index.ts)
* `*.js` for browser (e.g. https://ksxgithub.github.io/deno-once/index.js)

## License

[MIT](https://git.io/Jv6SU) © [Hoàng Văn Khải](https://github.com/KSXGitHub)
