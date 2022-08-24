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


//****************************************************************************************************


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


//****************************************************************************************************


// row 1
saveBtn1.addEventListener('click', () =>  {
      let key1 = 'textArea1';
      let value1 = textArea1.value;

      if ( key1 && value1 ) {
            window.localStorage.setItem(key1, value1);
            //location.reload();
      }

      let saved1 = window.localStorage.getItem('textArea1')

      console.log(saved1)
      console.log(key1)
      console.log(value1)
});
deleteBtn1.addEventListener('click', () => {
      window.localStorage.removeItem('textArea1');
      location.reload();
});

// row 2
saveBtn2.addEventListener('click', () =>  {
      let key2 = 'textArea2';
      let value2 = textArea2.value;

      if ( key2 && value2 ) {
            window.localStorage.setItem(key2, value2);
            //location.reload();
      }

      let saved2 = window.localStorage.getItem('textArea2')

      console.log(saved2)
      console.log(key2)
      console.log(value2)
});
deleteBtn2.addEventListener('click', () => {
      window.localStorage.removeItem('textArea2');
      location.reload();
});

// row 3
saveBtn3.addEventListener('click', () =>  {
      let key3 = 'textArea3';
      let value3 = textArea3.value;

      if ( key3 && value3 ) {
            window.localStorage.setItem(key3, value3);
            //location.reload();
      }

      let saved3 = window.localStorage.getItem('textArea3')

      console.log(saved3)
      console.log(key3)
      console.log(value3)
});
deleteBtn3.addEventListener('click', () => {
      window.localStorage.removeItem('textArea3');
      location.reload();
});

// row 4
saveBtn4.addEventListener('click', () =>  {
      let key4 = 'textArea4';
      let value4 = textArea4.value;

      if ( key4 && value4 ) {
            window.localStorage.setItem(key4, value4);
            //location.reload();
      }

      let saved4 = window.localStorage.getItem('textArea4')

      console.log(saved4)
      console.log(key4)
      console.log(value4)
});
deleteBtn4.addEventListener('click', () => {
      window.localStorage.removeItem('textArea4');
      location.reload();
});

// row 5
saveBtn5.addEventListener('click', () =>  {
      let key5 = 'textArea5';
      let value5 = textArea5.value;

      if ( key5 && value5 ) {
            window.localStorage.setItem(key5, value5);
            //location.reload();
      }

      let saved5 = window.localStorage.getItem('textArea5')

      console.log(saved5)
      console.log(key5)
      console.log(value5)
});
deleteBtn5.addEventListener('click', () => {
      window.localStorage.removeItem('textArea5');
      location.reload();
});

// row 6
saveBtn6.addEventListener('click', () =>  {
      let key6 = 'textArea6';
      let value6 = textArea6.value;

      if ( key6 && value6 ) {
            window.localStorage.setItem(key6, value6);
            //location.reload();
      }

      let saved6 = window.localStorage.getItem('textArea6')

      console.log(saved6)
      console.log(key6)
      console.log(value6)
});
deleteBtn6.addEventListener('click', () => {
      window.localStorage.removeItem('textArea6');
      location.reload();
});

// row 7
saveBtn7.addEventListener('click', () =>  {
      let key7 = 'textArea7';
      let value7 = textArea7.value;

      if ( key7 && value7 ) {
            window.localStorage.setItem(key7, value7);
            //location.reload();
      }

      let saved7 = window.localStorage.getItem('textArea7')

      console.log(saved7)
      console.log(key7)
      console.log(value7)
});
deleteBtn7.addEventListener('click', () => {
      window.localStorage.removeItem('textArea7');
      location.reload();
});

// row 8
saveBtn8.addEventListener('click', () =>  {
      let key8 = 'textArea8';
      let value8 = textArea8.value;

      if ( key8 && value8 ) {
            window.localStorage.setItem(key8, value8);
            //location.reload();
      }

      let saved8 = window.localStorage.getItem('textArea8')

      console.log(saved8)
      console.log(key8)
      console.log(value8)
});
deleteBtn8.addEventListener('click', () => {
      window.localStorage.removeItem('textArea8');
      location.reload();
});

// row 9
saveBtn9.addEventListener('click', () =>  {
      let key9 = 'textArea9';
      let value9 = textArea9.value;

      if ( key9 && value9 ) {
            window.localStorage.setItem(key9, value9);
            //location.reload();
      }

      let saved9 = window.localStorage.getItem('textArea9')

      console.log(saved9)
      console.log(key9)
      console.log(value9)
});
deleteBtn9.addEventListener('click', () => {
      window.localStorage.removeItem('textArea9');
      location.reload();
});


//****************************************************************************************************


// loads all of the saved text in specific rows using local storage
window.onload = () => {
      console.log(window.localStorage.getItem('textArea1'))
      textArea1.textContent = window.localStorage.getItem('textArea1');

      console.log(window.localStorage.getItem('textArea2'))
      textArea2.textContent = window.localStorage.getItem('textArea2');

      console.log(window.localStorage.getItem('textArea3'))
      textArea3.textContent = window.localStorage.getItem('textArea3');

      console.log(window.localStorage.getItem('textArea4'))
      textArea4.textContent = window.localStorage.getItem('textArea4');

      console.log(window.localStorage.getItem('textArea5'))
      textArea5.textContent = window.localStorage.getItem('textArea5');

      console.log(window.localStorage.getItem('textArea6'))
      textArea6.textContent = window.localStorage.getItem('textArea6');

      console.log(window.localStorage.getItem('textArea7'))
      textArea7.textContent = window.localStorage.getItem('textArea7');

      console.log(window.localStorage.getItem('textArea8'))
      textArea8.textContent = window.localStorage.getItem('textArea8');

      console.log(window.localStorage.getItem('textArea9'))
      textArea9.textContent = window.localStorage.getItem('textArea9');


      console.log(hour)
}


//hour = '';


//****************************************************************************************************


// row 1 color
if ( hour < 9 ) {
      textArea1.style.backgroundColor = 'lightgreen';
} else if (  hour === 9 ) {
      textArea1.style.backgroundColor = 'coral';
      textArea1.style.color = 'white';
} else {
      textArea1.style.backgroundColor = 'white';
}

// row 2 color
if ( hour < 10 ) {
      textArea2.style.backgroundColor = 'lightgreen';
} else if (  hour === 10 ) {
      textArea2.style.backgroundColor = 'coral';
      textArea2.style.color = 'white';
} else {
      textArea2.style.backgroundColor = 'white';
}

// row 3 color
if ( hour < 11 ) {
      textArea3.style.backgroundColor = 'lightgreen';
} else if (  hour === 11 ) {
      textArea3.style.backgroundColor = 'coral';
      textArea3.style.color = 'white';
} else {
      textArea3.style.backgroundColor = 'white';
}

// row 4 color
if ( hour < 12 ) {
      textArea4.style.backgroundColor = 'lightgreen';
} else if (  hour === 12 ) {
      textArea4.style.backgroundColor = 'coral';
      textArea4.style.color = 'white';
} else {
      textArea4.style.backgroundColor = 'white';
}

// row 5 color
if ( hour < 13 ) {
      textArea5.style.backgroundColor = 'lightgreen';
} else if (  hour === 13 ) {
      textArea5.style.backgroundColor = 'coral';
      textArea5.style.color = 'white';
} else {
      textArea5.style.backgroundColor = 'white';
}

// row 6 color
if ( hour < 14 ) {
      textArea6.style.backgroundColor = 'lightgreen';
} else if (  hour === 14 ) {
      textArea6.style.backgroundColor = 'coral';
      textArea6.style.color = 'white';
} else {
      textArea6.style.backgroundColor = 'white';
}

// row 7 color
if ( hour < 15 ) {
      textArea7.style.backgroundColor = 'lightgreen';
} else if (  hour === 15 ) {
      textArea7.style.backgroundColor = 'coral';
      textArea7.style.color = 'white';
} else {
      textArea7.style.backgroundColor = 'white';
}

// row 8 color
if ( hour < 16 ) {
      textArea8.style.backgroundColor = 'lightgreen';
} else if (  hour === 16 ) {
      textArea8.style.backgroundColor = 'coral';
      textArea8.style.color = 'white';
} else {
      textArea8.style.backgroundColor = 'white';
}

// row 9 color
if ( hour < 17 ) {
      textArea9.style.backgroundColor = 'lightgreen';
} else if (  hour === 17 ) {
      textArea9.style.backgroundColor = 'coral';
      textArea9.style.color = 'white';
} else {
      textArea9.style.backgroundColor = 'white';
}


//****************************************************************************************************


for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      lsOutput.innerHTML += `${key}: ${value} <br />`;
}

console.log(moment());


