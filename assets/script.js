let currentTime = document.getElementById('current-time')
let textArea = document.getElementsByClassName('text-area')

// all text area elements
let textArea1 = document.getElementById('text-area1')
let textArea2 = document.getElementById('text-area2')
let textArea3 = document.getElementById('text-area3')
let textArea4 = document.getElementById('text-area4')
let textArea5 = document.getElementById('text-area5')
let textArea6 = document.getElementById('text-area6')
let textArea7 = document.getElementById('text-area7')
let textArea8 = document.getElementById('text-area8')
let textArea9 = document.getElementById('text-area9')

// all save button elements
let saveBtn1 = document.getElementById('saveBtn1')
let saveBtn2 = document.getElementById('saveBtn2')
let saveBtn3 = document.getElementById('saveBtn3')
let saveBtn4 = document.getElementById('saveBtn4')
let saveBtn5 = document.getElementById('saveBtn5')
let saveBtn6 = document.getElementById('saveBtn6')
let saveBtn7 = document.getElementById('saveBtn7')
let saveBtn8 = document.getElementById('saveBtn8')
let saveBtn9 = document.getElementById('saveBtn9')

// all delete button 
let deleteBtn1 = document.getElementById('deleteBtn1')
let deleteBtn2 = document.getElementById('deleteBtn2')
let deleteBtn3 = document.getElementById('deleteBtn3')
let deleteBtn4 = document.getElementById('deleteBtn4')
let deleteBtn5 = document.getElementById('deleteBtn5')
let deleteBtn6 = document.getElementById('deleteBtn6')
let deleteBtn7 = document.getElementById('deleteBtn7')
let deleteBtn8 = document.getElementById('deleteBtn8')
let deleteBtn9 = document.getElementById('deleteBtn9')


//**************************************************


// assigns formatted times into variables, updates the current time every second
let mom = '';

setInterval(() => {
      mom = moment().format('LTS');
      momHr = moment().format('LT');
      currentTime.innerHTML = mom;
}, 1000);

// gets and displays current date
let m = moment();
let hour = moment().hours();
$("#currentDay").text(m.format( "MMM Do, YYYY"));

// logging date
// console.log(`toString() => ${m.toString()}`);
// console.log(`toISOString() => ${m.toISOString()}`);



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

hour = '';

if ( hour < 9 ) {
      textArea1.style.backgroundColor = 'lightgreen';
} else if (  hour === 9 ) {
      textArea1.style.backgroundColor = 'coral';
      textArea1.style.color = 'white';
} else {
      textArea1.style.backgroundColor = 'white';
}




      for (var i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            lsOutput.innerHTML += `${key}: ${value} <br />`;
      }



      console.log(moment());


