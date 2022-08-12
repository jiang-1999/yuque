class Dialog {
  constructor($container, option = {}) {
    this.$container = $container;
    this.option = option;
    this.onCancel = option.onCancel || function () {};
    this.onOk = option.onOk || function () {};

    this.bind();
  }
  bind() {
    let self = this;
    this.$container.querySelector(".close").onclick = function () {
      self.hide();
      self.onCancel();
    };
    this.$container.querySelector(".btn-cancel").onclick = function () {
      self.hide();
      self.onCancel();
    };
    this.$container.querySelector(".btn-ok").onclick = function () {
      self.hide();
      self.onOk();
    };
  }
  hide() {
    this.$container.classList.remove("appear");
    setTimeout(() => this.$container.classList.remove("show"), 400);
  }
  show() {
    //css优化问题
    this.$container.classList.add("show");
    setTimeout(() => this.$container.classList.add("appear"));
  }
}
let $dialog = new Dialog(document.querySelector(".dialog"), {
  onOk() {
    console.log("用户点了确定");
  },
  onCancel() {
    console.log("用户点了取消");
  },
});
document.querySelector(".open-dialog").onclick = function () {
  $dialog.show();
};
