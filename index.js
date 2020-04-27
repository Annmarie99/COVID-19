$(function(){
    

    console.log("start");
    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON( url, function(result){

        console.log(result);
         
        var no =1;
        for(var country in result){

            var row = ` <tr>
                      <th scope="row">${no}</th>
                      <td>
                      <a href="country.html?country=${country}">${country}</td></a>
                     
                    </tr> `;

        $("#data").append(row);
        no++;

        }
        
      });

})