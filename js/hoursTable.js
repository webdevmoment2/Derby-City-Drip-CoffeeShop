var hours = [{day:'SUN',hours:'CLOSED'},
                         {day:'MON',hours:'6AM - 10PM'},
                         {day:'TUE',hours:'6AM - 10PM'},
                         {day:'WED',hours:'6AM - 10PM'},
                         {day:'THU',hours:'6AM - 10PM'},
                         {day:'FRI',hours:'6AM - 12PM'},
                         {day:'SAT',hours:'6AM - 12PM'}]

          function buildTable(data){
            var table = document.getElementById('hoursData')
            for (var i = 0; i < data.length; i++){
            var row = `<tr>
                      <td>${data[i].day}</td>
                      <td>${data[i].hours}</td>
                      </tr>`
            table.innerHTML += row;}
          }
          buildTable(hours)