class Cs142TemplateProcessor {
  constructor(template) {
    this.template = template;
  }
  mf() {
    let rx = /{{[a-zA-Z]*}}/g;
    let arr = this.template.match(rx);
    console.log(arr);
    arr = arr.map((el) => el.slice(2, el.length - 2));
    return arr;
  }
  fillIn(dictionary) {
    var t = this.template;
    var arr = this.mf();
    arr.map((el) => {
      var repl = "{{" + el + "}}";
      if (dictionary[el]) {
        t = t.replace(repl, dictionary[el]);
      } else {
        t = t.replace(repl, "");
      }
    });
    return t;
  }
}
