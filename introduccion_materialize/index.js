document.addEventListener('DOMContentLoaded', function() {
  const comment = document.getElementById('comment');
  const userComment = document.getElementById('user-comment');
  const btn = document.getElementById('button-com');
  const alert = document.getElementById('alert-com');
  const commentSection = document.getElementById('comment-section');


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
});
