import "regenerator-runtime/runtime"

export default function* generatorSum(a, b) {
  return yield a + b
}
