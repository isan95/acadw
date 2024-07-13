let url = "https://v3.football.api-sports.io/fixtures?live=9&season=2024";
ajax ="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
$.ajax({
    url : url,
    dataType : 'json',
    type : 'GET',
    headers : {
        'x-rapidapi-key':'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        'x-rapidapi-host':'v3.football.api-sports.io'
    },
   
    success : function (data) {
        let tabla = document.getElementById('data')
        let partidos = '';
        if (data.results == 0){
            tabla.innerHTML = '<tr><td>No hay partidos en vivos ahora</td></tr>';
        }
        else {
            data.response.forEach(element =>{
                partidos += '<tr>'+'<td>'+'<img src="'+element.teams.home.logo+'" style="max-width: 30px; max-height: 30px;">'+'</td>'+'<td>'+element.teams.home.name+'</td>'+'<td>'+element.goals.home +'</td>'+'<td>vs</td>'+'<td>'+'<img src="'+element.teams.away.logo+'" style="max-width: 30px; max-height: 30px;">'+'</td>'+'<td>'+element.goals.away+'</td>'+'<td>'+element.teams.away.name+'</td></tr>';
            });
            tabla.innerHTML = partidos;
        }
      },
      error : function (data, errorThrown) {
        alert(errorThrown);
      }  
});

