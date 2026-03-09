import '../App.css';
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';

const Home = () => {
    const [query, setQuery] = useState('');
    // const [isDark] = useOutletContext();
    const [isDark] = useTheme();
    const windowSize = useWindowSize();

    return (
        <main className={`${isDark ? 'dark':''}`}>
            <div className='search-filter-container'>
                <SearchBar setQuery={setQuery} />
                <SelectMenu />
            </div>
            {/* <h1 style={{textAlign: 'center'}}>{windowSize.width} X {windowSize.height}</h1> */}
            {
                query === 'unmount' ? '' : <CountriesList query={query} />
            }
        </main>
    )
}

export default Home
