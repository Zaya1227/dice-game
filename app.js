// Тоглоомын бүх газарт ашиглагдах глобал хувьсагчдыг энд зарлана.
// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
var activePlayer;
var scores;
var roundScore;
// Тоглогчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч

 var diceDom = document.querySelector('.dice');

 // Тоглоомыг эхлүүлнэ
 initGame();

function initGame() {
    // Тоглоом эхэллээ гэдэг төлөвт оруулна
    isNewGame = true;
    // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
    activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];
// Тоглогчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;
//Программ эхлэхэд бэлтгэх
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 1'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
    diceDom.style.display = 'none';
}

// Шоог шидэх эвент листнер
document.querySelector('.btn-roll').addEventListener('click', function (){
if(isNewGame === true) {
    // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна.
    var diceNumber = Math.floor( Math.random() * 6) + 1;
    diceDom.style.display = 'block';
    // Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.src = 'dice-' + diceNumber + '.png';

    // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчдийн ээлжийг солих
    if( diceNumber !== 1){
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        switchToNextPlayer();
    }
} else {
    alert('Тоглоом дууссан байна. New game товчийг дарж шинээр эхлэнэ үү.')
}
});

// Hold товчны эвент листнер
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isNewGame === true){
// Уг тоглогчийн цуглуулсан ээлжний оноог глобал оноо дээр нь нэмж өгнө.
scores[activePlayer] = scores[activePlayer] + roundScore;

// дэлгэц дээр оноог нь өөрчлөнө.
document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

//Уг тоглогч хожсон эсэхийг шалгах
if(scores[activePlayer] >= 100){
    // Тоглоомыг дууссан төлөвт оруулна.
    isNewGame = false; 
    // Ялагч гэсэн текст нэрнийх нь оронд гаргана.
    document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
} else {
    // Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
}
    } else {
        alert('Тоглоом дууссан байна. New game товчийг дарж шинээр эхлэнэ үү.')
    }
});

// Энэ функц нь тоглох ээлжийг дараагийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    // тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
   // Улаан цэгийг шилжүүлэх
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
    // Шоог түр алга болгоно.
    diceDom.style.display = 'none';
}

// New game буюу шинэ тоглоом эхлүүлэх товчний эвент листнер

document.querySelector('.btn-new').addEventListener('click', initGame);