'use strict';
// 作品ページ
// モーダル02
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal');
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
