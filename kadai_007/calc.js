// 変数numに1以上のランダムな整数を代入する
let num = Math.floor(Math.random() * n) + 1 ;

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値によって出力する文字列を切り替える
switch(num) {
  case 3*num:
    console.log('３の倍数です');
    break;
  
  case 5*num:
    console.log('5の倍数です')
    break;
  
  case 3*5*num:
    console.log('3と5の倍数です')
    break;

  default:
    console.log('num')
    break;

}