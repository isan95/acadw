let urlPosicionesF =
  "https://v3.football.api-sports.io/standings?league=9&season=2024";
fetch(urlPosicionesF, {
  method: "GET",
  dataType: "json",
  headers: {
    "x-rapidapi-key": "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let tableContainer = document.getElementById("tableContainer");
    let standings = data.response[0].league.standings;

    // Recorrer cada grupo y construir una tabla para cada uno
    standings.forEach((grupoStandings, index) => {
        let group = grupoStandings[0].group;
        let groupTableHtml = `<h3>${group}</h3>
                              <table class="table">
                                  <thead>
                                      <tr>
                                          <th scope="col">Posicion</th>
                                          <th scope="col">Equipo</th>
                                          <th scope="col">Puntos</th>
                                          <th scope="col">Diferencia de goles</th>
                                          <th scope="col">Partidos jugados</th>
                                      </tr>
                                  </thead>
                                  <tbody>`;

        grupoStandings.forEach((equipo) => {
            groupTableHtml += `
                <tr>
                    <td>${equipo.rank}</td>
                    <td>
                        <img src="${equipo.team.logo}" alt="${equipo.team.name} Logo" style="max-width: 30px; max-height: 30px;"> ${equipo.team.name}
                    </td>
                    <td>${equipo.points}</td>
                    <td>${equipo.goalsDiff}</td>
                    <td>${equipo.all.played}</td>
                </tr>
            `;
        });

        groupTableHtml += `</tbody></table>`;

        // Agregar la tabla al DOM
        let tables = document.createElement('table');
        tables.innerHTML = groupTableHtml;
        tableContainer.appendChild(tables);
        let tableWithoutClass = tableContainer.getElementsByTagName('table');
        for(let i of tableWithoutClass){
          i.classList.add('table', 'table-striped')
        }
    });
  })
  .catch((err) => {
    console.log(err);
  });
