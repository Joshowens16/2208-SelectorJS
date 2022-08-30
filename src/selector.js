class $ {
    constructor(id) {
      this.elements = [];
          if (id[0] === ".") {
              let className = id.slice(1);
              this.elements.push(...document.getElementsByClassName(className)); 
          }
          else if (id[0] === "#") {
              let idName = id.slice(1);
              this.elements.push(document.getElementById(idName));
          }
          else {
              this.elements.push(...document.getElementsByTagName(id))
          }
      }
      hide = () => {
        this.elements.forEach((element) => (element.style.display = "none"))
        return this;
    };
      show = () => {
        this.elements.forEach((element) => (element.style.display = "inherit"));
        return this;
      }
      addClassName = (input) => {
        this.elements.forEach((element) => (element.classList = input));
        return this;
    }
      removeClassName = (input) => {
        this.elements.forEach((element) => (element.classList.remove(input)))
        return this;
      }
      text = (inputText) => {
        this.elements.forEach((element) => (element.innerHTML = inputText));
        return this;
      }
      addChild = (child) => {
        this.elements.forEach((element) => (element.appendChild(document.createElement(child))))
        return this;
      }
    }


