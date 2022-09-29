const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は華氏94度だったので、 :insertx: は旅行に出かけました。:inserty:　に着いた時、行列ができていたので:insertz:。 Bobは全部見ていましたが、驚きませんでした。なぜなら:insertx:のことを前からよく知っていたからです。';
const insertX = ['サタン', 'タモリ', '総理大臣'];
const insertY = ['天国', 'ディズニーランド', '富士山'];
const insertZ = ['暴れました', '貸し切ってブラタモリをしました', 'ヒマラヤに行きました'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)}`;
    newStory = newStory.replace('華氏94度', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
