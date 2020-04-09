# Deno Once

Create a function that calls and cache a function once

<script>document.write('<h1>This is not good!</h1>')</script>

## Usage

```typescript
import once from 'https://ksxgithub.github.io/deno-once/index.js'
const ran = once(Math.random)
console.log(ran() === ran()) // => true
```

## License

[MIT](https://git.io/Jv6SU) © [Hoàng Văn Khải](https://github.com/KSXGitHub)
