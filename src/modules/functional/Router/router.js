export function setupRouter(useSwitchContent) {
  const router = {
    btns: document.querySelectorAll("._btn"),
    contents: document.querySelectorAll("._content"),

    // switching(data) {
    //   localStorage.setItem("page", data);

    //   this.contents.forEach((content) => {
    //     console.log(content);
    //   })
    // },

    moving: function (buttons, contents) {
      buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          let data = event.target.dataset.btn;
          localStorage.setItem("page", data);
          // console.log(data);

          console.log('used Switch Content');
          useSwitchContent();
          // contents.forEach((content) => {
          //   if (content.dataset.content === data) {

          //     if (localStorage.getItem("page") === data) {
          //       document.querySelectorAll("._show").forEach((el) => {
          //         el.classList.remove("_show");
          //         document.body.classList.remove("_lock");
          //       });

          //       document.querySelectorAll("._close").forEach((el) => {
          //         el.classList.remove("_close");
          //       });
          //       content.classList.add("_show");
          //       window.scrollTo(0, 0);
          //     }
          //   }
          // });
        });
      });
    },
  };

  router.moving(router.btns, router.contents);
}
