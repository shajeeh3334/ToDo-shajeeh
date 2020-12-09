


// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(function(response){

//   return response.json();

// }).then(function(data){
//   // document.write(data)
//   console.log(data);
//   appendData(data);


  
 

// }).catch(function(error){

// console.error("wrong");
// console.error(error);



// })

// function appendData(data) {
//   var mainContainer = document.getElementById("myData");
//   for (var i = 0; i < data.length; i++) {
//       var div = document.createElement("div");
//       div.innerHTML = 'user id: ' + data[i].userId + '        '+ 'Title :  ' + data[i].title + '                   ' +'completed  :'+ data[i].completed;
//       mainContainer.appendChild(div);
 

//   }
// }

$(document).ready(function () { 

    
    $.getJSON("https://jsonplaceholder.typicode.com/todos", 
            function (data) { 
        var entry = ''; 

      
        $.each(data, function (key, value) { 
        if(entry==''){
                entry += '<tr>'; 
            entry += '<td><b>USERID</b></td>'; 

            entry += '<td><b>ID</b></td>'; 

            entry += '<td><b>TITLE</b></td>'; 

            entry += '<td><b>COMPLETED</b></td>'; 

            entry += '</tr>'; 

            }
            

        else
            entry += '<tr>'; 
            entry += '<td>' + value.userId + '</td>'; 

            entry += '<td>' + value.id + '</td>'; 

            entry += '<td>' + value.title + '</td>'; 

            
            if(value.completed==false)
            {
                entry += '<td>' + `<input id="tasksts" name='plan' type="checkbox">` + '</td>'   ;
          
            }
            else{
                entry += '<td>' + '<input type="checkbox" disabled checked>' + '</td';
                
            
            } 

            entry += '</tr>'; 
        });
      
        $('#table').append(entry); 
    }); 
}); 


// function myfun()
// {

// var a= document.getElementById('checkbox');
// var newvar=0;
// var count;

// for (count=0; count<a.length; count++){

//     if (a[count].checked==true){
//         newvar=newvar+1;
//     }
// }

// if (newvar>=5)
// {
//     window.alert('sorry mone')
//     return false;
// }

// function checkboxlimit(checkgroup, limit){
//     for (var i=0; i<checkgroup.length; i++){
//       checkgroup[i].addEventListener('click',function(){
//         var checkedcount=0;
//         for (var i=0; i<checkgroup.length; i++)
//         {
//           checkedcount+=(checkgroup[i].checked)? 1 : 0;
//           if (checkedcount>limit)
//           {
//             alert("You can only select a maximum of "+limit+" checkboxes");
//             this.checked=false;
//           }
//         }
//       });
//     }
//   }
  
//   checkboxlimit(document.form.world.plan, 3);