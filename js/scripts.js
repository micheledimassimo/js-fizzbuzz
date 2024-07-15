console.log('JS collegato');

//scrivo i numeri da 1 a 100 in console e se sono divisibili per 3 e 5 scrivo fizzbuzz, solo per 3 fizz e solo per 5 buzz
const myRow = document.getElementById('riga');



for(let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
        //aggiungo div nella row html
        let newDiv = document.createElement('div');
        //do le classi al div
        newDiv.classList.add("my-col");
        newDiv.classList.add("squares");
        newDiv.classList.add("fizzbuzz");
        //aggiungo elemento
        newDiv.innerHTML = 'fizzbuzz';
        myRow.append(newDiv);

    }
    else if (i % 3 == 0) {
        console.log('Fizz');
        //aggiungo div nella row html
        let newDiv = document.createElement('div');
        //do le classi al div
        newDiv.classList.add("my-col");
        newDiv.classList.add("squares");
        newDiv.classList.add("fizz");
        //aggiungo elemento
        newDiv.innerHTML = 'fizz';
        myRow.append(newDiv);
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
        //aggiungo div nella row html
        let newDiv = document.createElement('div');
        //do le classi al div
        newDiv.classList.add("my-col");
        newDiv.classList.add("squares");
        newDiv.classList.add("buzz");
        //aggiungo elemento
        newDiv.innerHTML = 'buzz';
        myRow.append(newDiv);
    }
    else {
        console.log(i);
        //aggiungo div nella row html
        let newDiv = document.createElement('div');
        //do le classi al div
        newDiv.classList.add("my-col");
        newDiv.classList.add("squares");
        newDiv.classList.add("normal-square");
        //aggiungo elemento
        newDiv.innerHTML = i;
        myRow.append(newDiv);
    }
    
}