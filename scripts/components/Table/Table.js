'use strict'

export default class Table {
    constructor({ element, data }) {
        this._el = element;

        this._render(data);
    }

    _render(data) {
        this._el.innerHTML = `
        <table class="data-table highlight"> 
            <thead>
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Rank</th>
                <th>Price</th>
            </tr>
            </thead>
    
            <tbody>
                ${data.map(co => `
                  <tr>
                      <td>${co.name}</td>
                      <td>${co.symbol}</td>
                      <td>${co.rank}</td>
                      <td>${co.price}</td>
                  </tr>
                `).join('')}
            </tbody>
        </table>
        `
    }
}