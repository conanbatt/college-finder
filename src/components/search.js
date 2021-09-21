import React from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { fetchData } from '../api'
import styles from './search.module.css'


export const Search = () => {
  const [query, setQuery] = React.useState('')
  const [showResults, setShowResults] = React.useState('')
  const [results, setResults] = React.useState([])
  const debouncedQuery = useDebounce(query, 300)
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (!debouncedQuery || debouncedQuery.length <= 2) {
      return setResults([])
    }
    fetchData()
      .then(res => {
        // A better idea would be to cache results and to do filtering server side. Doable in this next.js setup!
        const filtered = res.filter(([_,name]) => name.toLowerCase().includes(query.toLowerCase()))
        setResults(filtered)
      })
  }, [debouncedQuery])

  React.useEffect(() => {
    const listener = (event) => {
      const el = ref?.current
      if (!el || el.contains(event.target)) {
        return
      }
      setShowResults(false)
    }

    document.addEventListener('mousedown', listener)
    ref?.current.addEventListener('mousedown', () => setShowResults(true))
  }, [])

  return (
    <div className={styles.search_container}>
      <input
        ref={ref}
        className={styles.search_input}
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      { (results.length > 0) && showResults ? (
        <div className={styles.search_results_container}>
          {results
            .slice(0, 3)
            .map(college => <ResultItem key={college[5]} college={college} />)}
        </div>
      ): null}
    </div>
  )
}

const ResultItem = ({ college }) => {
  const [_, name, city, state, website] = college
  return (
    <a href={`http://${website}`} className={styles.college_item} target="_blank">
      <div>
        <span className={styles.light_text}>{city} · {state}</span>
        <span className={styles.college_item_name}>{name}</span>
      </div>
    </a>
  )
}
  
