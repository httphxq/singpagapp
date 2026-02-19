import { state } from '../store/store.js'
import { countryCard } from '../copmonents/countryCard.js'
export function renderDashboard(app) {
    const dream = state.countries.filter(country => country.status === 'Dream');
    const planned = state.countries.filter(country => country.status === 'Planned');
    const visited = state.countries.filter(country => country.status === 'Visited');
    app.innerHTML = `
    <h2>Travel Dashboard</h2>

    <div class='board'>

        <div class='column'>
            <h3>Dream</h3>
            ${dream.map(countryCard).join('')}
        </div>

        <div class='column'>
            <h3>Planned</h3>
            ${planned.map(countryCard).join('')}
        </div>

        <div class='column'>
            <h3>Visited</h3>
            ${visited.map(countryCard).join('')}
        </div>
    </div>
    `
}