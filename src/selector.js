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


// function $(CSSId) {
//     let preppedId = document.getElementById(CSSId.slice(1));
//     let storedId = [preppedId];
//     let preppedClass = document.getElementsByClassName(CSSId.slice(1));
//     let storedClass = [...preppedClass];
//     let preppedTag = document.getElementsByTagName(CSSId);
//     let storedTag = [...preppedTag];
//     if (CSSId.includes(".")) {
//       let preppedTag = document.getElementsByTagName(
//         CSSId.slice(0, CSSId.indexOf("."))
//       );
//       storedTag = [...preppedTag].filter((element) =>
//         element.includes(
//           CSSId.slice(CSSId.findIndex((element) => element === ".") + 1)
//         )
//       );
//       console.log(storedTag);
//     }
//     if (CSSId[0] === ".") {
//       this.elements = storedClass;
//     } else if (CSSId[0] === "#") {
//       this.elements = storedId;
//     } else {
//       this.elements = storedTag;
//     }
//     this.hide = () => {
//       this.elements.forEach((element) => (element.style.display = "none"));
//       return this;
//     };
  
//     this.show = () => {
//       this.elements.forEach((element) => (element.style.display = "inherit"));
//       return this;
//     };
  
//     this.addClassName = (classToAdd) => {
//       this.elements.forEach((element) => (element.classList = classToAdd));
//       return this;
//     };
  
//     this.removeClassName = (classToRemove) => {
//       this.elements.forEach((element) => element.classList.remove(classToRemove));
//       return this;
//     };
  
//     this.text = (textToAdd) => {
//       this.elements.forEach((element) => (element.innerText = textToAdd));
//       return this;
//     };
  
//     this.addChild = (nodeToAdd) => {
//       this.elements.forEach((element) =>
//         element.appendChild(document.createElement(nodeToAdd))
//       );
//       return this;
//     };
//   }