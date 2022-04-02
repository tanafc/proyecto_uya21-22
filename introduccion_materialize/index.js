document.addEventListener('DOMContentLoaded', function() {
  const comment = document.getElementById('comment');
  const userComment = document.getElementById('user-comment');
  const btn = document.getElementById('button-com');
  const alert = document.getElementById('alert-com');
  const commentSection = document.getElementById('comment-section');

    /* Inicializamos variables */
  const reset = () => {
  document.getElementById("cantidadP").innerHTML = null;
  document.getElementById("cantidadDIV").innerHTML = null;
  document.getElementById("cantidadLI").innerHTML = null;
  }
  const btn1 = document.getElementById('button-contador');


  function addCommentToCard() {
    if (comment.value === '') {
      alert.classList.remove('d-none');
      alert.innerText = 'Se requiere un comentario';
      return;
    }
    alert.classList.add('d-none');

    const card = document.createElement('card');
    const p = document.createElement('p');
    p.innerText = comment.value;
    userComment.appendChild(card);
    card.appendChild(p);
  }

  btn.onclick = addCommentToCard;

  function countNumberElements(){
    document.getElementById("cantidadP").innerHTML = document.getElementsByTagName("p").length;
    document.getElementById("cantidadDIV").innerHTML = document.getElementsByTagName("div").length;
    document.getElementById("cantidadLI").innerHTML = document.getElementsByTagName("li").length;  
  }

  btn1.onclick = countNumberElements;
  btn1.onauxclick = reset;
});
