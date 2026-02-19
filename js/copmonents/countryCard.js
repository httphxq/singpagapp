export function countryCard (country) {
    return `
    <div class="country-card" data-id="${country.id}">
        <h3>${country.name}</h3>
        <p>${country.notes}</p>
        <small>${country.budget}</small>
    </div>
    `
}