'use strict';
// モーダルウィンドウ
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal01');
const mask = document.getElementById('mask');


open.addEventListener('click', () => {
  modal.classList.remove('hidden');//openをクリックされたらhiddenクラスを消す
  mask.classList.remove('hidden');//openをクリックされたらhiddenクラスを消す
});

close.addEventListener('click', () => {
  modal.classList.add('hidden');//closeをクリックされたらhiddenクラスをつける
  mask.classList.add('hidden');//closeをクリックされたらhiddenクラスをつける
});


mask.addEventListener('click', () => {
  modal.classList.add('hidden');//mask部分クリックされたらhiddenクラスをつける
  mask.classList.add('hidden');//mask部分クリックされたらhiddenクラスをつける
  close.click();//closeをした時の処理を書くことで同じ処理をすることができる記述
});

// モーダル02
const open2 = document.getElementById('open02');
const close2 = document.getElementById('close02');
const modal2 = document.querySelector('.modal02');
const mask2 = document.getElementById('mask02');


open2.addEventListener('click', () => {
  modal2.classList.remove('hidden');//openをクリックされたらhiddenクラスを消す
  mask2.classList.remove('hidden');//openをクリックされたらhiddenクラスを消す
});

close2.addEventListener('click', () => {
  modal2.classList.add('hidden');//closeをクリックされたらhiddenクラスをつける
  mask2.classList.add('hidden');//closeをクリックされたらhiddenクラスをつける
});


mask2.addEventListener('click', () => {
  modal2.classList.add('hidden');//mask部分クリックされたらhiddenクラスをつける
  mask2.classList.add('hidden');//mask部分クリックされたらhiddenクラスをつける
  close2.click();//closeをした時の処理を書くことで同じ処理をすることができる記述
});

