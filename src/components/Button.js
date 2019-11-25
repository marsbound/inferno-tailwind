export default ({ onClick, children }) => (
  <button
    class="mt-4 px-3 py-2 border border-red-400 rounded"
    onClick={onClick}
  >
    <div class="tracking-wide text-red-500">{children}</div>
  </button>
)
