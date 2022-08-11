class Message {
  constructor({ type = "success", text = "" }) {
    this.type = type;
    this.text = text;
    this.render();
    this.bind();
  }
  render() {
    let $div = document.createElement("div");
    this.$message = $div;
    $div.classList.add("message");
    $div.classList.add(this.type);
    let $icon = document.createElement("span");
    $icon.classList.add("iconfont");
    $icon.classList.add("icon-" + this.type);
    $div.appendChild($icon);
    let $text = document.createTextNode(this.text);
    $div.appendChild($text);
    // $div.innerText = this.text 会导致图标无法显示
    document.body.appendChild($div);
  }
  bind() {
    //浏览器优化 会直接加载执行show()
    setTimeout(() => this.show(), 0);
    setTimeout(() => this.destroy(), 3000);
  }
  show() {
    this.$message.classList.add("show");
  }
  destroy() {
    this.$message.classList.remove("show");
    //动画过程正在开始就摧毁了，需要加个延迟
    setTimeout(() => this.$message.parentNode.removeChild(this.$message), 400);
  }
}
document.querySelector("#btn-success").onclick = function () {
  new Message({ text: "成功" });
};
document.querySelector("#btn-warning").onclick = function () {
  new Message({ type: "warning", text: "警告" });
};
document.querySelector("#btn-info").onclick = function () {
  new Message({ type: "info", text: "消息" });
};
document.querySelector("#btn-danger").onclick = function () {
  new Message({ type: "danger", text: "危险" });
};
