const Ancient = [
  {
    greenStage: [1, 2, 2],
    brownStage: [2, 3, 4],
    blueStage: [1, 1, 0]
  },
  {
    greenStage: [0, 1, 3],
    brownStage: [2, 3, 4],
    blueStage: [2, 0, 0]
  },
  {
    greenStage: [0, 2, 3],
    brownStage: [2, 3, 4],
    blueStage: [1, 1, 0]
  },
  {
    greenStage: [1, 3, 2],
    brownStage: [2, 2, 4],
    blueStage: [1, 1, 0]
  }
]

const color = ['green', 'brown', 'blue'];

const card = [
    {color: 'green', difficulty: 'easy', num: 0, src: './assets/MythicCards/green/green1.png'},    // 0
    {color: 'green', difficulty: 'hard', num: 0, src: './assets/MythicCards/green/green2.png'},    // 1
    {color: 'green', difficulty: 'hard', num: 1, src: './assets/MythicCards/green/green3.png'},    // 2
    {color: 'green', difficulty: 'hard', num: 2, src: './assets/MythicCards/green/green4.png'},    // 3
    {color: 'green', difficulty: 'hard', num: 3, src: './assets/MythicCards/green/green5.png'},    // 4
    {color: 'green', difficulty: 'hard', num: 4, src: './assets/MythicCards/green/green6.png'},    // 5
    {color: 'green', difficulty: 'normal', num: 0, src: './assets/MythicCards/green/green7.png'},  // 6
    {color: 'green', difficulty: 'normal', num: 1, src: './assets/MythicCards/green/green8.png'},  // 7
    {color: 'green', difficulty: 'normal', num: 2, src: './assets/MythicCards/green/green9.png'},  // 8
    {color: 'green', difficulty: 'normal', num: 3, src: './assets/MythicCards/green/green10.png'}, // 9
    {color: 'green', difficulty: 'normal', num: 4, src: './assets/MythicCards/green/green11.png'}, // 10
    {color: 'green', difficulty: 'easy', num: 1, src: './assets/MythicCards/green/green12.png'},   // 11
    {color: 'green', difficulty: 'normal', num: 5, src: './assets/MythicCards/green/green13.png'}, // 12
    {color: 'green', difficulty: 'normal', num: 6, src: './assets/MythicCards/green/green14.png'}, // 13
    {color: 'green', difficulty: 'normal', num: 7, src: './assets/MythicCards/green/green15.png'}, // 14
    {color: 'green', difficulty: 'easy', num: 2, src: './assets/MythicCards/green/green16.png'},   // 15
    {color: 'green', difficulty: 'easy', num: 3, src: './assets/MythicCards/green/green17.png'},   // 16
    {color: 'green', difficulty: 'easy', num: 4, src: './assets/MythicCards/green/green18.png'},   // 17

    {color: 'brown', difficulty: 'normal', num: 0, src: './assets/MythicCards/brown/brown1.png'},   // 18
    {color: 'brown', difficulty: 'normal', num: 1, src: './assets/MythicCards/brown/brown2.png'},   // 19
    {color: 'brown', difficulty: 'normal', num: 2, src: './assets/MythicCards/brown/brown3.png'},   // 20
    {color: 'brown', difficulty: 'normal', num: 3, src: './assets/MythicCards/brown/brown4.png'},   // 21
    {color: 'brown', difficulty: 'normal', num: 4, src: './assets/MythicCards/brown/brown5.png'},   // 22
    {color: 'brown', difficulty: 'hard', num: 0, src: './assets/MythicCards/brown/brown6.png'},     // 23
    {color: 'brown', difficulty: 'hard', num: 1, src: './assets/MythicCards/brown/brown7.png'},     // 24
    {color: 'brown', difficulty: 'hard', num: 2, src: './assets/MythicCards/brown/brown8.png'},     // 25
    {color: 'brown', difficulty: 'hard', num: 3, src: './assets/MythicCards/brown/brown9.png'},     // 26 
    {color: 'brown', difficulty: 'hard', num: 4, src: './assets/MythicCards/brown/brown10.png'},    // 27
    {color: 'brown', difficulty: 'easy', num: 0, src: './assets/MythicCards/brown/brown11.png'},    // 28
    {color: 'brown', difficulty: 'easy', num: 1, src: './assets/MythicCards/brown/brown12.png'},    // 29
    {color: 'brown', difficulty: 'easy', num: 2, src: './assets/MythicCards/brown/brown13.png'},    // 30
    {color: 'brown', difficulty: 'easy', num: 3, src: './assets/MythicCards/brown/brown14.png'},    // 31
    {color: 'brown', difficulty: 'normal', num: 5, src: './assets/MythicCards/brown/brown15.png'},  // 32
    {color: 'brown', difficulty: 'normal', num: 6, src: './assets/MythicCards/brown/brown16.png'},  // 33
    {color: 'brown', difficulty: 'normal', num: 7, src: './assets/MythicCards/brown/brown17.png'},  // 34
    {color: 'brown', difficulty: 'normal', num: 8, src: './assets/MythicCards/brown/brown18.png'},  // 35
    {color: 'brown', difficulty: 'normal', num: 9, src: './assets/MythicCards/brown/brown19.png'},  // 36
    {color: 'brown', difficulty: 'normal', num: 10, src: './assets/MythicCards/brown/brown20.png'}, // 37
    {color: 'brown', difficulty: 'easy', num: 4, src: './assets/MythicCards/brown/brown21.png'},    // 38

    {color: 'blue', difficulty: 'hard', num: 0, src: './assets/MythicCards/blue/blue1.png'},        // 39
    {color: 'blue', difficulty: 'hard', num: 1, src: './assets/MythicCards/blue/blue2.png'},        // 40
    {color: 'blue', difficulty: 'easy', num: 0, src: './assets/MythicCards/blue/blue3.png'},        // 41 
    {color: 'blue', difficulty: 'easy', num: 1, src: './assets/MythicCards/blue/blue4.png'},        // 42 
    {color: 'blue', difficulty: 'easy', num: 2, src: './assets/MythicCards/blue/blue5.png'},        // 43 
    {color: 'blue', difficulty: 'hard', num: 2, src: './assets/MythicCards/blue/blue6.png'},        // 44
    {color: 'blue', difficulty: 'normal', num: 0, src: './assets/MythicCards/blue/blue7.png'},      // 45 
    {color: 'blue', difficulty: 'hard', num: 3, src: './assets/MythicCards/blue/blue8.png'},        // 46 
    {color: 'blue', difficulty: 'normal', num: 1, src: './assets/MythicCards/blue/blue9.png'},     // 47 
    {color: 'blue', difficulty: 'easy', num: 3, src: './assets/MythicCards/blue/blue10.png'},       // 48 
    {color: 'blue', difficulty: 'normal', num: 2, src: './assets/MythicCards/blue/blue11.png'},     // 49
    {color: 'blue', difficulty: 'normal', num: 3, src: './assets/MythicCards/blue/blue12.png'}      // 50
];

const conditions = {
  veryLow: ['easy', 'easy', 'easy', 'normal'],
  low: ['easy', 'normal', 'normal'],
  normal: ['easy', 'normal', 'hard'],
  high: ['normal', 'hard', 'hard'],
  veryHigh: ['hard', 'hard', 'hard', 'normal']
}

const config = {
  ancientCard: '',
  difficulty: '',
  isShuffled: false,
  greenArr0: [],
  greenArr1: [],
  greenArr2: [],
  brownArr0: [],
  brownArr1: [],
  brownArr2: [],
  blueArr0: [],
  blueArr1: [],
  blueArr2: [],
  currentStage: undefined,
  currentCard: undefined
}

let showShuffleButton = false;
const ancientCardsArr = ['ancient-card-1','ancient-card-2','ancient-card-3','ancient-card-4'];
const difficultiesArr = ['difficulty-very-low', 'difficulty-low', 'difficulty-middle', 'difficulty-high', 'difficulty-very-high'];

let greenArr = [];
let brownArr = [];
let blueArr = [];
let greenArrMixed = [];
let brownArrMixed = [];
let blueArrMixed = [];

const ancientCard = [];
ancientCard[0] = document.querySelector('.ancient-card-1');
ancientCard[1] = document.querySelector('.ancient-card-2');
ancientCard[2] = document.querySelector('.ancient-card-3');
ancientCard[3] = document.querySelector('.ancient-card-4');

const difficultyContainer = document.querySelector('.difficulty-container');
const difficulty = [];
difficulty[0] = document.querySelector('.difficulty-very-low');
difficulty[1] = document.querySelector('.difficulty-low');
difficulty[2] = document.querySelector('.difficulty-middle');
difficulty[3] = document.querySelector('.difficulty-high');
difficulty[4] = document.querySelector('.difficulty-very-high');

const currentState = document.querySelector('.current-state');
const stageText = document.querySelectorAll('.stage-text');
//console.log(stageText);
const greenStage0 = document.querySelector('.green-stage1');
const brownStage0 = document.querySelector('.brown-stage1');
const blueStage0 = document.querySelector('.blue-stage1');
const greenStage1 = document.querySelector('.green-stage2');
const brownStage1 = document.querySelector('.brown-stage2');
const blueStage1 = document.querySelector('.blue-stage2');
const greenStage2 = document.querySelector('.green-stage3');
const brownStage2 = document.querySelector('.brown-stage3');
const blueStage2 = document.querySelector('.blue-stage3');

const shuffleButton = document.querySelector('.shuffle-button');

const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');

let greenEasyNum = 0;
let greenNormalNum = 0;
let greenDifficultNum = 0;
let brownEasyNum = 0;
let brownNormalNum = 0;
let brownDifficultNum = 0;
let blueEasyNum = 0;
let blueNormalNum = 0;
let blueDifficultNum = 0;
for (let i=0; i<card.length; i++) {
  if (card[i].color === 'green' && card[i].difficulty === 'easy')
    greenEasyNum++;
  if (card[i].color === 'green' && card[i].difficulty === 'normal')
    greenNormalNum++;
  if (card[i].color === 'green' && card[i].difficulty === 'difficult')
    greenDifficultNum++;
  if (card[i].color === 'brown' && card[i].difficulty === 'easy')
    brownEasyNum++;
  if (card[i].color === 'brown' && card[i].difficulty === 'normal')
    brownNormalNum++;
  if (card[i].color === 'brown' && card[i].difficulty === 'difficult')
    brownDifficultNum++;
  if (card[i].color === 'blue' && card[i].difficulty === 'easy')
    blueEasyNum++;
  if (card[i].color === 'blue' && card[i].difficulty === 'normal')
    blueNormalNum++;
  if (card[i].color === 'blue' && card[i].difficulty === 'difficult')
    blueDifficultNum++;
}

for (let i=0; i<ancientCard.length; i++)
  ancientCard[i].addEventListener('click', setAncientCard);

function setAncientCard(event) {
  if (config.isShuffled) {
    config.isShuffled = false;
  }
  config.difficulty ='';
  config.ancientCard = event.target.classList[1];
  console.log(config.ancientCard);
  
  update();
}

for (let i=0; i<difficulty.length; i++)
  difficulty[i].addEventListener('click', setDifficulty);

function setDifficulty(event) {
  if (config.isShuffled) {
    config.isShuffled = false;
  }
  config.difficulty = event.target.classList[1];
  console.log(config.difficulty);
  
  update();
}

shuffleButton.addEventListener('click', shuffle);
function shuffle() {    
  config.isShuffled = true;
  for (let i=0; i<ancientCardsArr.length; i++) {
    if (config.ancientCard === ancientCardsArr[i]) {
      greenArr.length = Ancient[i].greenStage[0] + Ancient[i].greenStage[1] + Ancient[i].greenStage[2];
      brownArr.length = Ancient[i].brownStage[0] + Ancient[i].brownStage[1] + Ancient[i].brownStage[2];
      blueArr.length = Ancient[i].blueStage[0] + Ancient[i].blueStage[1] + Ancient[i].blueStage[2];

      let cardsPull0 = {green: [], brown: [], blue: []};
      let usedCards0 = {green: [], brown: [], blue: []};
      let cardsPull1 = {green: [], brown: [], blue: []};
      let usedCards1 = {green: [], brown: [], blue: []};
      let searchGreenStage = 0;
      let searchBrownStage = 0;
      let searchBlueStage = 0;

      if(config.difficulty === difficultiesArr[0]) { // difficulty very low
        console.log('form cardsPull 0');
        for (let j=0; j<card.length; j++) {
          if (card[j].color === 'green' && (card[j].difficulty === conditions.veryLow[0] || card[j].difficulty === conditions.veryLow[1] || card[j].difficulty === conditions.veryLow[2]))
            cardsPull0.green.push(j);  
          if (card[j].color === 'brown' && (card[j].difficulty === conditions.veryLow[0] || card[j].difficulty === conditions.veryLow[1] || card[j].difficulty === conditions.veryLow[2]))
            cardsPull0.brown.push(j); 
          if (card[j].color === 'blue' && (card[j].difficulty === conditions.veryLow[0] || card[j].difficulty === conditions.veryLow[1] || card[j].difficulty === conditions.veryLow[2]))
            cardsPull0.blue.push(j);             
        }  
        if (conditions.veryLow[3]) {
          console.log('form cardsPull 1');
          for (let j=0; j<card.length; j++) {
            if (card[j].color === 'green' && card[j].difficulty === conditions.veryLow[3])
              cardsPull1.green.push(j);  
            if (card[j].color === 'brown' && card[j].difficulty === conditions.veryLow[3])
              cardsPull1.brown.push(j); 
            if (card[j].color === 'blue' && card[j].difficulty === conditions.veryLow[3])
              cardsPull1.blue.push(j);             
          }           
        } 
      }

      if(config.difficulty === difficultiesArr[1]) { // difficulty low
        console.log('form cardsPull 0');
        for (let j=0; j<card.length; j++) {
          if (card[j].color === 'green' && (card[j].difficulty === conditions.low[0] || card[j].difficulty === conditions.low[1] || card[j].difficulty === conditions.low[2]))
            cardsPull0.green.push(j);  
          if (card[j].color === 'brown' && (card[j].difficulty === conditions.low[0] || card[j].difficulty === conditions.low[1] || card[j].difficulty === conditions.low[2]))
            cardsPull0.brown.push(j); 
          if (card[j].color === 'blue' && (card[j].difficulty === conditions.low[0] || card[j].difficulty === conditions.low[1] || card[j].difficulty === conditions.low[2]))
            cardsPull0.blue.push(j);             
        }  
        if (conditions.low[3]) {
          console.log('form cardsPull 1');
          for (let j=0; j<card.length; j++) {
            if (card[j].color === 'green' && card[j].difficulty === conditions.low[3])
              cardsPull1.green.push(j);  
            if (card[j].color === 'brown' && card[j].difficulty === conditions.low[3])
              cardsPull1.brown.push(j); 
            if (card[j].color === 'blue' && card[j].difficulty === conditions.low[3])
              cardsPull1.blue.push(j);             
          }           
        } 
      }

      if(config.difficulty === difficultiesArr[2]) { // difficulty normal
        console.log('form cardsPull 0');
        for (let j=0; j<card.length; j++) {
          if (card[j].color === 'green' && (card[j].difficulty === conditions.normal[0] || card[j].difficulty === conditions.normal[1] || card[j].difficulty === conditions.normal[2]))
            cardsPull0.green.push(j);  
          if (card[j].color === 'brown' && (card[j].difficulty === conditions.normal[0] || card[j].difficulty === conditions.normal[1] || card[j].difficulty === conditions.normal[2]))
            cardsPull0.brown.push(j); 
          if (card[j].color === 'blue' && (card[j].difficulty === conditions.normal[0] || card[j].difficulty === conditions.normal[1] || card[j].difficulty === conditions.normal[2]))
            cardsPull0.blue.push(j);             
        }  
        if (conditions.normal[3]) {
          console.log('form cardsPull 1');
          for (let j=0; j<card.length; j++) {
            if (card[j].color === 'green' && card[j].difficulty === conditions.normal[3])
              cardsPull1.green.push(j);  
            if (card[j].color === 'brown' && card[j].difficulty === conditions.normal[3])
              cardsPull1.brown.push(j); 
            if (card[j].color === 'blue' && card[j].difficulty === conditions.normal[3])
              cardsPull1.blue.push(j);             
          }           
        } 
      }

      if(config.difficulty === difficultiesArr[3]) { // difficulty high
        console.log('form cardsPull 0');
        for (let j=0; j<card.length; j++) {
          if (card[j].color === 'green' && (card[j].difficulty === conditions.high[0] || card[j].difficulty === conditions.high[1] || card[j].difficulty === conditions.high[2]))
            cardsPull0.green.push(j);  
          if (card[j].color === 'brown' && (card[j].difficulty === conditions.high[0] || card[j].difficulty === conditions.high[1] || card[j].difficulty === conditions.high[2]))
            cardsPull0.brown.push(j); 
          if (card[j].color === 'blue' && (card[j].difficulty === conditions.high[0] || card[j].difficulty === conditions.high[1] || card[j].difficulty === conditions.high[2]))
            cardsPull0.blue.push(j);             
        }  
        if (conditions.high[3]) {
          console.log('form cardsPull 1');
          for (let j=0; j<card.length; j++) {
            if (card[j].color === 'green' && card[j].difficulty === conditions.high[3])
              cardsPull1.green.push(j);  
            if (card[j].color === 'brown' && card[j].difficulty === conditions.high[3])
              cardsPull1.brown.push(j); 
            if (card[j].color === 'blue' && card[j].difficulty === conditions.high[3])
              cardsPull1.blue.push(j);             
          }           
        } 
      }

      if(config.difficulty === difficultiesArr[4]) { // difficulty very high
        console.log('form cardsPull 0');
        for (let j=0; j<card.length; j++) {
          if (card[j].color === 'green' && (card[j].difficulty === conditions.veryHigh[0] || card[j].difficulty === conditions.veryHigh[1] || card[j].difficulty === conditions.veryHigh[2]))
            cardsPull0.green.push(j);  
          if (card[j].color === 'brown' && (card[j].difficulty === conditions.veryHigh[0] || card[j].difficulty === conditions.veryHigh[1] || card[j].difficulty === conditions.veryHigh[2]))
            cardsPull0.brown.push(j); 
          if (card[j].color === 'blue' && (card[j].difficulty === conditions.veryHigh[0] || card[j].difficulty === conditions.veryHigh[1] || card[j].difficulty === conditions.veryHigh[2]))
            cardsPull0.blue.push(j);             
        }  
        if (conditions.veryHigh[3]) {
          console.log('form cardsPull 1');
          for (let j=0; j<card.length; j++) {
            if (card[j].color === 'green' && card[j].difficulty === conditions.veryHigh[3])
              cardsPull1.green.push(j);  
            if (card[j].color === 'brown' && card[j].difficulty === conditions.veryHigh[3])
              cardsPull1.brown.push(j); 
            if (card[j].color === 'blue' && card[j].difficulty === conditions.veryHigh[3])
              cardsPull1.blue.push(j);             
          }           
        }       
      }       
      
      for (let j=0; j<greenArr.length; j++) {
          if (j < cardsPull0.green.length)
            searchGreenStage = 0;          
          else
            searchGreenStage = 1;
          if (searchGreenStage === 0) {
            while (true) {
              let num = Math.round(Math.random()*100);
              if (num < cardsPull0.green.length && !usedCards0.green.includes(num)) {
                greenArr[j] = cardsPull0.green[num];
                usedCards0.green.push(num);
                break;
              }            
            }            
          }          
          if (searchGreenStage === 1) {
            while (true) {
              let num = Math.round(Math.random()*100);
              if (num < cardsPull1.green.length && !usedCards1.green.includes(num)) {
                greenArr[j] = cardsPull1.green[num];
                usedCards1.green.push(num);
                break;
              }            
            }
          }
      }
      greenArrMixed = mixArr(greenArr);

      for (let j=0; j<brownArr.length; j++) {
          if (j < cardsPull0.brown.length)
            searchBrownStage = 0;          
          else
            searchBrownStage = 1;
          if (searchBrownStage === 0) {
            while (true) {
              let num = Math.round(Math.random()*100);
              if (num < cardsPull0.brown.length && !usedCards0.brown.includes(num)) {
                brownArr[j] = cardsPull0.brown[num];
                usedCards0.brown.push(num);
                break;
              }            
            }            
          }          
          if (searchBrownStage === 1) {
            while (true) {
              let num = Math.round(Math.random()*100);
              if (num < cardsPull1.brown.length && !usedCards1.brown.includes(num)) {
                brownArr[j] = cardsPull1.brown[num];
                usedCards1.brown.push(num);
                break;
              }            
            }
          }
      }
      brownArrMixed = mixArr(brownArr);

      for (let j=0; j<blueArr.length; j++) {
          if (j < cardsPull0.blue.length)
            searchBlueStage = 0;          
          else
            searchBlueStage = 1;
          if (searchBlueStage === 0) {
            while (true) {
              let num = Math.round(Math.random()*100);
              if (num < cardsPull0.blue.length && !usedCards0.blue.includes(num)) {
                blueArr[j] = cardsPull0.blue[num];
                usedCards0.blue.push(num);
                break;
              }            
            }            
          }          
          if (searchBlueStage === 1) {
            while (true) {
              let num = Math.round(Math.random()*100);
              if (num < cardsPull1.blue.length && !usedCards1.blue.includes(num)) {
                blueArr[j] = cardsPull1.blue[num];
                usedCards1.blue.push(num);
                break;
              }            
            }
          }
      }
       blueArrMixed = mixArr(blueArr);  
      
      //console.log(greenArr, brownArr, blueArr);
      console.log(greenArrMixed, brownArrMixed, blueArrMixed);
      for (let j=0; j<greenArr.length; j++) { // Ancient[i].greenStage[0] + Ancient[i].greenStage[1] + Ancient[i].greenStage[2]
        if (j < Ancient[i].greenStage[0]) {
          config.greenArr0[j] = greenArrMixed[j];
        }
        if (j >= Ancient[i].greenStage[0] && j < Ancient[i].greenStage[0] + Ancient[i].greenStage[1]) {
          config.greenArr1[j-Ancient[i].greenStage[0]] = greenArrMixed[j];
        }
        if (j >= Ancient[i].greenStage[0] + Ancient[i].greenStage[1] && j < Ancient[i].greenStage[0] + Ancient[i].greenStage[1] + Ancient[i].greenStage[2]) {
          config.greenArr2[j - Ancient[i].greenStage[0] - Ancient[i].greenStage[1]] = greenArrMixed[j];
        }
      }
      for (let j=0; j<brownArr.length; j++) { // Ancient[i].greenStage[0] + Ancient[i].greenStage[1] + Ancient[i].greenStage[2]
        if (j < Ancient[i].brownStage[0]) {
          config.brownArr0[j] = brownArrMixed[j];
        }
        if (j >= Ancient[i].brownStage[0] && j < Ancient[i].brownStage[0] + Ancient[i].brownStage[1]) {
          config.brownArr1[j-Ancient[i].brownStage[0]] = brownArrMixed[j];
        }
        if (j >= Ancient[i].brownStage[0] + Ancient[i].brownStage[1] && j < Ancient[i].brownStage[0] + Ancient[i].brownStage[1] + Ancient[i].brownStage[2]) {
          config.brownArr2[j - Ancient[i].brownStage[0] - Ancient[i].brownStage[1]] = brownArrMixed[j];
        }
      }
      for (let j=0; j<blueArr.length; j++) { // Ancient[i].greenStage[0] + Ancient[i].greenStage[1] + Ancient[i].greenStage[2]
        if (j < Ancient[i].blueStage[0]) {
          config.blueArr0[j] = blueArrMixed[j];
        }
        if (j >= Ancient[i].blueStage[0] && j < Ancient[i].blueStage[0] + Ancient[i].blueStage[1]) {
          config.blueArr1[j-Ancient[i].blueStage[0]] = blueArrMixed[j];
        }
        if (j >= Ancient[i].blueStage[0] + Ancient[i].blueStage[1] && j < Ancient[i].blueStage[0] + Ancient[i].blueStage[1] + Ancient[i].blueStage[2]) {
          config.blueArr2[j - Ancient[i].blueStage[0] - Ancient[i].blueStage[1]] = blueArrMixed[j];
        }
      }
      config.currentCard = undefined;
      config.currentStage = undefined;
      console.log('config.greenArr 0,1,2 =', config.greenArr0, config.greenArr1, config.greenArr2);
      console.log('config.brownArr 0,1,2 =', config.brownArr0, config.brownArr1, config.brownArr2);
      console.log('config.blueArr 0,1,2 =', config.blueArr0, config.blueArr1, config.blueArr2);
      break;
    }
  }  
  update();
}

deck.addEventListener('click', getCard);
function getCard() {
  if (config.greenArr0.length !== 0 || config.brownArr0.length !== 0 || config.blueArr0.length !== 0) {
    while(true) {
      let num = Math.round(Math.random() * 100);
      if (num < 33 && config.greenArr0.length !== 0) {
        config.currentCard = config.greenArr0.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
      else if (num >= 33 && num < 66 && config.brownArr0.length !== 0) {
        config.currentCard = config.brownArr0.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
      else if (num >= 66 && num < 99 && config.blueArr0.length !== 0) {
        config.currentCard = config.blueArr0.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
    }
    config.currentStage = 0;
  }
  else if (config.greenArr1.length !== 0 || config.brownArr1.length !== 0 || config.blueArr1.length !== 0) {
    while(true) {
      let num = Math.round(Math.random() * 100);
      if (num < 33 && config.greenArr1.length !== 0) {
        config.currentCard = config.greenArr1.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
      else if (num >= 33 && num < 66 && config.brownArr1.length !== 0) {
        config.currentCard = config.brownArr1.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
      else if (num >= 66 && num < 99 && config.blueArr1.length !== 0) {
        config.currentCard = config.blueArr1.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
    }
    config.currentStage = 1;
  }
  else if (config.greenArr2.length !== 0 || config.brownArr2.length !== 0 || config.blueArr2.length !== 0) {
    while(true) {
      let num = Math.round(Math.random() * 100);
      if (num < 33 && config.greenArr2.length !== 0) {
        config.currentCard = config.greenArr2.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
      else if (num >= 33 && num < 66 && config.brownArr2.length !== 0) {
        config.currentCard = config.brownArr2.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
      else if (num >= 66 && num < 99 && config.blueArr2.length !== 0) {
        config.currentCard = config.blueArr2.pop();
        console.log('current card = ', card[config.currentCard].src);
        break;
      }
    }
    config.currentStage = 2;
  }
  update();
}

function update() {
  for (let i=0; i<ancientCard.length; i++) {
    if (ancientCard[i].classList.contains(config.ancientCard)) {
      if (!ancientCard[i].classList.contains('ancient-card-active')) {
        ancientCard[i].classList.add('ancient-card-active');        
      }
      if (!difficultyContainer.classList.contains('difficulty-container-visible'))
        difficultyContainer.classList.add('difficulty-container-visible');
    } else {
      if (ancientCard[i].classList.contains('ancient-card-active')) {
        ancientCard[i].classList.remove('ancient-card-active');
      }        
    }
  }
  
  showShuffleButton = false;
  for (let i=0; i<difficulty.length; i++) {
    if (difficulty[i].classList.contains(config.difficulty)) {
      if (!difficulty[i].classList.contains('difficulty-active')) {
        difficulty[i].classList.add('difficulty-active');        
      }
      showShuffleButton = true;
    } else {
      if (difficulty[i].classList.contains('difficulty-active')) {
        difficulty[i].classList.remove('difficulty-active');
      }        
    }
  }

  if (!config.isShuffled && showShuffleButton) {
    if (!shuffleButton.classList.contains('shuffle-button-visible')) {
        shuffleButton.classList.add('shuffle-button-visible');
    }    
  }
  else {
    if (shuffleButton.classList.contains('shuffle-button-visible')) {
        shuffleButton.classList.remove('shuffle-button-visible');
    }   
  }
  if(config.isShuffled) {
    greenStage0.textContent = config.greenArr0.length;
    brownStage0.textContent = config.brownArr0.length;
    blueStage0.textContent = config.blueArr0.length;
    greenStage1.textContent = config.greenArr1.length;
    brownStage1.textContent = config.brownArr1.length;
    blueStage1.textContent = config.blueArr1.length;
    greenStage2.textContent = config.greenArr2.length;
    brownStage2.textContent = config.brownArr2.length;
    blueStage2.textContent = config.blueArr2.length;
    
    let numCardsAll = config.greenArr0.length
      + config.brownArr0.length
      + config.blueArr0.length
      + config.greenArr1.length
      + config.brownArr1.length
      + config.blueArr1.length
      + config.greenArr2.length
      + config.brownArr2.length
      + config.blueArr2.length;

    if (!currentState.classList.contains('current-state-visible'))
      currentState.classList.add('current-state-visible');   
    if (!deck.classList.contains('deck-visible') && numCardsAll !== 0)
      deck.classList.add('deck-visible');    
    if (deck.classList.contains('deck-visible') && numCardsAll === 0)
      deck.classList.remove('deck-visible');  
    if ((!lastCard.classList.contains('last-card-visible')) && config.currentCard !== undefined) 
      lastCard.classList.add('last-card-visible');
    if (config.currentCard !== undefined) {
      lastCard.style.backgroundImage = `url('${card[config.currentCard].src}')`;
    }
  } 
  else {
    if (currentState.classList.contains('current-state-visible'))
      currentState.classList.remove('current-state-visible'); 
    if (deck.classList.contains('deck-visible'))
      deck.classList.remove('deck-visible');    
    if (lastCard.classList.contains('last-card-visible')) 
      lastCard.classList.remove('last-card-visible');  
  }
  
  if (config.currentStage === 0) {
    if (!stageText[0].classList.contains('stage-text-active')) {
      stageText[0].classList.add('stage-text-active');
    }
    if (stageText[1].classList.contains('stage-text-active')) {
      stageText[1].classList.remove('stage-text-active');
    }
    if (stageText[2].classList.contains('stage-text-active')) {
      stageText[2].classList.remove('stage-text-active');
    }
  }
  else if (config.currentStage === 1) {
    if (!stageText[1].classList.contains('stage-text-active')) {
      stageText[1].classList.add('stage-text-active');
    }
    if (stageText[0].classList.contains('stage-text-active')) {
      stageText[0].classList.remove('stage-text-active');
    }
    if (stageText[2].classList.contains('stage-text-active')) {
      stageText[2].classList.remove('stage-text-active');
    }
  }
  else if (config.currentStage === 2) {
    if (!stageText[2].classList.contains('stage-text-active')) {
      stageText[2].classList.add('stage-text-active');
    }
    if (stageText[0].classList.contains('stage-text-active')) {
      stageText[0].classList.remove('stage-text-active');
    }
    if (stageText[1].classList.contains('stage-text-active')) {
      stageText[1].classList.remove('stage-text-active');
    }
  }
  else {
    if (stageText[0].classList.contains('stage-text-active')) {
      stageText[0].classList.remove('stage-text-active');
    }
    if (stageText[1].classList.contains('stage-text-active')) {
      stageText[1].classList.remove('stage-text-active');
    }
    if (stageText[2].classList.contains('stage-text-active')) {
      stageText[2].classList.remove('stage-text-active');
    }
  }
  
}

function mixArr(array) {
  let newArr = [];
  let usedIndex = [];
  for (let i=0; i<array.length; i++) {
    while(true) {
      let num = Math.round(Math.random()*100);
      if (num < array.length && !usedIndex.includes(num)) {
        newArr[i] = array[num];
        usedIndex.push(num);
        break;
      }
    }
  }
  return newArr;
}