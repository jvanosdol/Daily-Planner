var currentTime = document.getElementById('current-time')
var textArea = document.getElementsByClassName('text-area')
var textArea1 = document.getElementById('text-area1')

var saveBtn1 = document.getElementById('saveBtn1')
var deleteBtn1 = document.getElementById('deleteBtn1')

var mom = '';



setInterval(() => {
      mom = moment().format('LTS');
      momHr = moment().format('LT');
      currentTime.innerHTML = mom;

}, 1000);


// function styleContainers() {
//       if ( momHr > 9 ) {
//             textArea9.style.background = "brown";
//       }
// }

var m = moment();
$("#currentDay").text(m.format( "MMM Do, YYYY"));

var hour = moment().hours();

      console.log(`toString() => ${m.toString()}`);
      console.log(`toISOString() => ${m.toISOString()}`);

      localStorage.setItem('name1', 'james');
      localStorage.setItem('name2', 'hassan');
      console.log(localStorage)

      let name1 = localStorage.getItem('name1');
      let name2 = localStorage.getItem('name2');

      console.log(name1);
      console.log(name2);

      localStorage.removeItem('name1')

      var inpKey = document.querySelector('#inpKey');
      var inpValue = document.querySelector('#inpValue');
      var btnInsert = document.querySelector('#btnInsert');
      var lsOutput = document.querySelector('#lsOutput');

      btnInsert.addEventListener('click', () =>  {
            let key = 'event2';
            let value = textArea.value;

            if ( key && value ) {
                  window.localStorage.setItem(key, value);
                  //location.reload();
            }

            let test2 = window.localStorage.getItem('event2')


            console.log(test2)

            console.log(key)
            console.log(value)
      });



      saveBtn1.addEventListener('click', () =>  {
            let key = 'textArea1';
            let value = textArea1.value;

            if ( key && value ) {
                  window.localStorage.setItem(key, value);
                  //location.reload();
            }

            let test2 = window.localStorage.getItem('textArea1')


            console.log(test2)

            console.log(key)
            console.log(value)
      });

      deleteBtn1.addEventListener('click', () => {
            window.localStorage.clear('textArea1');
            location.reload();
      });




window.onload = () => {
      let test3 = window.localStorage.getItem('textArea1')
      console.log(test3)
      textArea1.textContent = test3;

      console.log(hour)
}

hour = 9;

if ( hour < 9 ) {
      textArea1.style.backgroundColor = 'lightgreen'
} else if (  hour === 9 ) {
      textArea1.style.backgroundColor = 'coral'
} else {
      textArea1.style.backgroundColor = 'white'
}




      for (var i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            lsOutput.innerHTML += `${key}: ${value} <br />`;
      }



      console.log(moment());



// var myDiv = document.createElement("div")

// function addClassName(i) {
//       if ( i > momHr ) {
//           textArea.style = 'red'  
//       }
      
// }



// var myDiv = $(".container");
//     myDiv.html("");

function createTimeSlots() {
      for ( var i = 9; i <= 17; i++ ) {
            


            var time = momHr

            var data = 'aasdf'

               var template = `
            <div class="row">
                  <div id="template-container">
                  <div class='time-slot'>
                      ${i}AM
                  </div>
                  </div>
                  <div class='past'>
                      <textarea id='text-area${i}'>${data}</textarea>
                  </div>
                  <div class='save-parent'>
                      <button class='save-btn' data-hours="${i}">SAVE</button>
                  </div>
            </div>
            `;   
            myDiv.append(template)
            myDiv.innerHTML = '<h1>Hello World</h1>'
            
            console.log(myDiv)
            console.log(time)
            
            //textArea[i].css.style.backgroundColor = 'red'

                  //textArea.classList.add('future')

            // if( i = mom ) {
            //       $('textArea').css('background', '#ccc');
            // }
            
      }
};





//createTimeSlots();      

