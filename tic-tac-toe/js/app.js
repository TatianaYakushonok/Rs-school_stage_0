const boxContainer = document.querySelector('.box-container');
let step = 0;
let resultPlayer1 = 0;
let resultPlayer2 = 0;
let featurePlayer1 = 'X';
let featurePlayer2 = '0';
//let namePayer = '';

const winnerObj = {
    name: resultPlayer1,
    step: step,
    score: 0
}

let arrObj = [];

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

const table = document.querySelector('.table-winner');
const winnerTable = document.querySelector('.table');
const btnOpenWinners = document.querySelector('.btn-open');
const btnCloseWinners = document.querySelector('.btn-close-winners');

window.onload = function() {
    localStorage.getItem('winnerObj')
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
            winnerObj.name = inputName1.value;
            winnerObj.step = step;
            winnerObj.score = resultPlayer1;

            arrObj.push(Object.entries(winnerObj));

            localStorage.setItem('winnerObj', JSON.stringify(arrObj));
            let restoredSession = JSON.parse(localStorage.getItem('winnerObj'));

            console.log(restoredSession);

            restoredSession.map((i) => {
                const list = document.createElement('li');
                list.classList.add('table-list');
                list.textContent = i[0][1] + '  ' + i[1][1] + '  ' + i[2][1];
                list.style.padding = '5px';
                winnerTable.append(list);
            })

            /*winnerList.forEach((item)  => {
                item.textContent = restoredSession;
            })

            const abjArr = Object.entries(winnerObj);

            abjArr.forEach(([key, value]) => {
            console.table(key, value);
            });*/
            step = 0;
		} 
		if (
		    boxes[arrBox[i][0]].innerHTML == '0' && boxes[arrBox[i][1]].innerHTML == '0' && boxes[arrBox[i][2]].innerHTML == '0'
		) {
            namePlayer2.innerHTML = `${inputName2.value} : ${featurePlayer2} ${resultPlayer2+=1}`;
            showWinner(inputName2.value);
            winnerObj.name = inputName2.value;
            winnerObj.step = step;
            winnerObj.score = resultPlayer2;

            arrObj.push(Object.entries(winnerObj));

            localStorage.setItem('winnerObj', JSON.stringify(arrObj));
            let restoredSession = JSON.parse(localStorage.getItem('winnerObj'));

            console.log(restoredSession);
            /*const abjArr = Object.entries(winnerObj);

            abjArr.forEach(([key, value]) => {
            console.table(key, value);
            });*/
            step = 0;
        }

    }
    
    if (step == 9) {
        contentWindow.innerHTML = `Game ended in a draw!`;
        windowContainer.style.display = 'block';
        boxes.forEach((item)  => {
            item.textContent = '';
        })
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


btnOpenWinners.addEventListener('click', () => {
    table.style.display = 'block';
})

btnCloseWinners.addEventListener('click', () => {
    table.style.display = 'none';
})

