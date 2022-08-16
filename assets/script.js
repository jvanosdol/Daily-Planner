

var m = moment();
$("#currentDay").text(m.format( "MMM Do, YYYY"));





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
      var inpValue =document.querySelector('#inpValue');
      var btnInsert = document.querySelector('#btnInsert');
      var lsOutput = document.querySelector('#lsOutput');

      btnInsert.addEventListener('click', () =>  {
            var key = 'event2';
            var value = inpValue.value;

            if ( key && value ) {
                  localStorage.setItem(key, value);
                  location.reload();
            }

            console.log(key)
            console.log(value)
      });

      for (var i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            lsOutput.innerHTML += `${key}: ${value} <br />`;
      }


      console.log(moment());

// var myDiv = document.createElement("div")

var myDiv = $(".container");
    myDiv.html("");

      for ( var i = 9; i <= 17; i++ ) {
            
            var data = 'aasdf'

            var rows = '';
            var template = `
            <div class="row">
                  <div id="template-container">
                  <div class='time-slot'>
                      ${i}AM
                  </div>
                  </div>
                  <div>
                      <textarea class='text-area'>${data}</textarea>
                  </div>
                  <div class='save-parent'>
                      <button class='save-btn' data-hours="${i}">SAVE</button>
                  </div>
            </div>
            `;

            myDiv.innerHTML = '<h1>Hello World</h1>'
            myDiv.append(template)
            console.log(myDiv)

}