const boxContainer = document.querySelector('.box-container');
let step = 0;
let resultPlayer1 = 0;
let resultPlayer2 = 0;
let featurePlayer1 = 'X';
let featurePlayer2 = '0';
//let namePayer = '';

const boxes = document.querySelectorAll('.box');

const nameContainer = document.querySelector('.name-container');
const nameOverlay = document.querySelector('.name-overlay');
const inputName1 = document.querySelector('.text-name1');
const inputName2 = document.querySelector('.text-name2');
const namePlayer1 = document.querySelector('.name-player1');
const namePlayer2 = document.querySelector('.name-player2');

const windowContainer = document.querySelector('.window-container');
const contentWindow = document.querySelector('.content');
const windowOverlay = document.querySelector('.window-overlay');
const BtnClose = document.querySelector('.btn-close');

window.onload = function() {
    nameContainer.style.display = 'block';
}

nameOverlay.addEventListener('click', () => {
    nameContainer.style.display = 'none';
    namePlayer1.innerHTML = `${inputName1.value} : ${featurePlayer1} ${resultPlayer1}`;
    namePlayer2.innerHTML = `${inputName2.value} : ${featurePlayer2} ${resultPlayer2}`;
})

inputName1.addEventListener('keyup', event => {
    if(event.code === 'Enter') {
        nameContainer.style.display = 'none';
        namePlayer1.innerHTML = `${inputName1.value} : ${featurePlayer1} ${resultPlayer1}`;
        namePlayer2.innerHTML = `${inputName2.value} : ${featurePlayer2} ${resultPlayer2}`;   
    }
})

inputName2.addEventListener('keyup', event => {
    if(event.code === 'Enter') {
        nameContainer.style.display = 'none';
        namePlayer1.innerHTML = `${inputName1.value} : ${featurePlayer1} ${resultPlayer1}`;
        namePlayer2.innerHTML = `${inputName2.value} : ${featurePlayer2} ${resultPlayer2}`;   
    }
})

function showWinner(winner) {
    contentWindow.innerHTML = `Player ${winner} has won!`;
    windowContainer.style.display = 'block';
    boxes.forEach((item)  => {
        item.textContent = '';
    })
}

function closeModal() {
    windowContainer.style.display = 'none'; 
}

BtnClose.addEventListener('click', closeModal);

function determWinnings() {
    const boxes = document.querySelectorAll('.box');

    const arrBox = [
	    [0, 1, 2], 
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
    ];
    
    for(i = 0; i < arrBox.length; i++) {
		if(
		    boxes[arrBox[i][0]].innerHTML == 'X' && boxes[arrBox[i][1]].innerHTML == 'X' && boxes[arrBox[i][2]].innerHTML == 'X'
		) {
            namePlayer1.innerHTML = `${inputName1.value} : ${featurePlayer1} ${resultPlayer1+=1}`;
            showWinner(inputName1.value);
            //result = 'крестики';
            //console.log('Победили крестики');
			//prepareResult(result);
		} 
		if (
		    boxes[arrBox[i][0]].innerHTML == '0' && boxes[arrBox[i][1]].innerHTML == '0' && boxes[arrBox[i][2]].innerHTML == '0'
		) {
            namePlayer2.innerHTML = `${inputName2.value} : ${featurePlayer2} ${resultPlayer2+=1}`;
            showWinner(inputName2.value);
            //result = 'нолики';
            //console.log('Победили нолики');
			//prepareResult(result);
        }
    }
    
    if (step == 9) {
        result = 'ничья';
        console.log('Ничья');
    }

}

function activeBox(event) {
    if(event.target.classList.contains('box')) {
        if(event.target.innerHTML === 'X' || event.target.innerHTML === '0') {
            return;
        } else {
            step % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0';
            step++;
            determWinnings();
        }
    }
}

boxContainer.addEventListener('click', activeBox);