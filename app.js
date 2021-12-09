// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
var activePlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжинд цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн санамсаргүй утгыг энэ хувьсагчид өгнө


//Программ эхлэхэд бэлтгэх
document.getElementById('score-0').textContent = 0;
 document.getElementById('score-1').textContent = 0;
 document.getElementById('current-0').textContent = 0;
 document.getElementById('current-1').textContent = 0;

 var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';

// Шоог шидэх эвент листнер
document.querySelector('.btn-roll').addEventListener('click', function (){
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
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        // тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
        // Үгүй бол идэвхтэй тоглогчийг 0 болго.
       // Улаан цэгийг шилжүүлэх
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
        // Шоог түр алга болгоно.
        diceDom.style.display = 'none';
        
    }

});
