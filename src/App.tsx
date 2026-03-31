import { useState } from 'react'
import './App.css'

interface Film {
  id: string
  title: string
  director: string
  year: number
  date: string
  time: string
  guest?: string
  synopsis: string
  poster?: string
  ticketUrl: string
}

const films: Film[] = [
  {
    id: '1',
    title: 'Anora',
    director: 'Sean Baker',
    year: 2024,
    date: 'March 12, 2026',
    time: '7:30 PM',
    guest: 'Sean Baker (Director)',
    synopsis: 'A young stripper from Brooklyn finds herself married to the son of a Russian oligarch — and in the crosshairs of his parents.',
    ticketUrl: 'https://laemmle.com'
  },
  {
    id: '2',
    title: 'The Brutalist',
    director: 'Brady Corbet',
    year: 2024,
    date: 'March 19, 2026',
    time: '7:30 PM',
    guest: 'Brady Corbet (Director)',
    synopsis: 'A visionary architect and his wife flee post-war Europe for America, chasing the American dream through three decades.',
    ticketUrl: 'https://laemmle.com'
  },
  {
    id: '3',
    title: 'Nickel Boys',
    director: 'RaMell Ross',
    year: 2024,
    date: 'March 26, 2026',
    time: '7:30 PM',
    guest: 'RaMell Ross (Director) + Joslyn Barnes (Producer)',
    synopsis: 'A groundbreaking adaptation of Colson Whitehead\'s Pulitzer Prize-winning novel about two boys sent to a brutal reform school.',
    ticketUrl: 'https://laemmle.com'
  },
  {
    id: '4',
    title: 'Thelma',
    director: 'Josh Margolin',
    year: 2024,
    date: 'April 2, 2026',
    time: '7:30 PM',
    guest: 'Josh Margolin (Director)',
    synopsis: 'A 93-year-old grandmother sets out on a quest to recover $10,000 lost to a phone scammer. Based on a true story.',
    ticketUrl: 'https://laemmle.com'
  },
  {
    id: '5',
    title: 'Ghostlight',
    director: 'Kelly O\'Sullivan & Alex Thompson',
    year: 2024,
    date: 'April 9, 2026',
    time: '7:30 PM',
    guest: 'Kelly O\'Sullivan & Alex Thompson (Directors)',
    synopsis: 'A Chicago construction worker discovers a local theater group and finds unexpected connection through Shakespeare.',
    ticketUrl: 'https://laemmle.com'
  },
  {
    id: '6',
    title: 'Henry & June',
    director: 'Philip Kaufman',
    year: 1990,
    date: 'April 16, 2026',
    time: '7:30 PM',
    guest: 'Philip Kaufman (Director) - Special Anniversary Screening',
    synopsis: 'The 35th anniversary screening of the legendary NC-17 film about Anaïs Nin\'s relationship with Henry and June Miller.',
    ticketUrl: 'https://laemmle.com'
  }
]

function App() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null)

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="title">Reel Talk</h1>
          <p className="subtitle">with Stephen Farber</p>
          <p className="venue">Laemmle Royal Theatre | West Los Angeles</p>
        </div>
      </header>

      <main className="main">
        <section className="about">
          <h2>About Reel Talk</h2>
          <p>
            Join acclaimed film critic <strong>Stephen Farber</strong> for insightful discussions 
            with filmmakers, actors, and industry professionals. Each screening includes a 
            thought-provoking conversation about the art and craft of cinema.
          </p>
        </section>

        <section className="films">
          <h2>Upcoming Screenings</h2>
          <div className="film-grid">
            {films.map(film => (
              <div 
                key={film.id} 
                className="film-card"
                onClick={() => setSelectedFilm(film)}
              >
                <div className="film-poster-placeholder">
                  <span>{film.title[0]}</span>
                </div>
                <div className="film-info">
                  <h3>{film.title}</h3>
                  <p className="director">{film.director}, {film.year}</p>
                  <p className="date">{film.date} • {film.time}</p>
                  {film.guest && <p className="guest">Special Guest: {film.guest}</p>}
                  <button className="ticket-btn" onClick={(e) => {
                    e.stopPropagation()
                    window.open(film.ticketUrl, '_blank')
                  }}>
                    Get Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedFilm && (
          <div className="modal-overlay" onClick={() => setSelectedFilm(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedFilm(null)}>×</button>
              <div className="modal-poster-placeholder">
                <span>{selectedFilm.title[0]}</span>
              </div>
              <h2>{selectedFilm.title}</h2>
              <p className="modal-director">{selectedFilm.director}, {selectedFilm.year}</p>
              <p className="modal-date">{selectedFilm.date} • {selectedFilm.time}</p>
              {selectedFilm.guest && <p className="modal-guest">Special Guest: {selectedFilm.guest}</p>}
              <p className="synopsis">{selectedFilm.synopsis}</p>
              <button className="modal-ticket-btn" onClick={() => window.open(selectedFilm.ticketUrl, '_blank')}>
                Get Tickets at Laemmle.com
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Reel Talk with Stephen Farber</p>
        <p>Presented at Laemmle Royal Theatre, 11523 Santa Monica Blvd, Los Angeles, CA 90025</p>
      </footer>
    </div>
  )
}

export default App
