class Collapse {
  constructor($container, type = 1) {
    this.$container = $container;
    this.$$items = $container.querySelectorAll(".item");
    this.type = type;

    this.bind();
  }

  bind() {
    let self = this;
    this.$$items.forEach(($item) => {
      $item.onclick = function () {
        if (self.type === 2) {
          this.classList.toggle("active");
        } else if (self.type === 1) {
          self.$$items.forEach(($item) => $item.classList.remove("active"));
          this.classList.add("active");
        }
      };
    });
  }
}

new Collapse(document.querySelectorAll(".collapse")[0]);
new Collapse(document.querySelectorAll(".collapse")[1], 2);
