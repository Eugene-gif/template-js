export function useSwitchContent() {
  const contents = document.querySelectorAll("._content");
  const btns = document.querySelectorAll("._btn");

  contents.forEach((content) => {
    if (content.dataset.content === localStorage.getItem('page')) {

      document.querySelectorAll("._show").forEach((el) => {
        el.classList.remove("_show");
        document.body.classList.remove("_lock");
      });

      document.querySelectorAll("._close").forEach((el) => {
        el.classList.remove("_close");
      });

      btns.forEach((btn) => {
        if (btn.dataset.btn === localStorage.getItem('page')) {
          btn.classList.add('_active');
        }
      })

      content.classList.add("_show");
    }
  });
  
  window.scrollTo(0, 0);
}

// if (localStorage.getItem('page') === data) {
//   window.location.hash = data;
// }