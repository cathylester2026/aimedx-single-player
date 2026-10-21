import { useState } from 'react'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const gameUrl = `${import.meta.env.BASE_URL}game.html`

  return (
    <main className="app-shell">
      {!loaded && (
        <div className="loading-card" role="status" aria-live="polite">
          <div className="diamond" />
          <strong>Loading AIMedX</strong>
          <span>Future-Ready Hospital Challenge</span>
        </div>
      )}
      <iframe
        className={loaded ? 'game-frame loaded' : 'game-frame'}
        src={gameUrl}
        title="AIMedX Future-Ready Hospital Challenge"
        onLoad={() => setLoaded(true)}
        allow="fullscreen"
      />
    </main>
  )
}
