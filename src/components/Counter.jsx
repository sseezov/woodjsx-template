import { render } from 'woodjsx'

export default function Counter() {
  let count = 0

  const increment = () => {
    count++
    render('#counter-value', count)
  }

  return (
    <section aria-label="Counter">
      <p>Count: <span id="counter-value" aria-live="polite">{count}</span></p>
      <button type="button" onClick={increment}>Increment</button>
    </section>
  )
}
