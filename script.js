document.getElementById('button').onclick = function() {
  let number = Math.floor(Math.random() * 10) + 1;
  document.getElementById('number').textContent = number;
  document.getElementById('number').style = "font-size: 100px;"
}