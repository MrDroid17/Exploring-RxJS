const { Observable } = 'rxjs';
let button = document.querySelector('button');
// button.addEventListener('click', (e) => {
//   console.log(e);
// });
Observable.fromEvent(button, 'click')
  .subscribe((e) => {
    console.log('Clicked')
  })