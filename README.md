# Deno Once

Create a function that calls and cache a function once

## Usage

```typescript
import once from 'https://deno.land/x/once@typescript/index.ts'
const ran = once(Math.random)
console.log(ran() === ran()) // => true
```

## License

[MIT](https://git.io/Jv6SU) © [Hoàng Văn Khải](https://github.com/KSXGitHub)
