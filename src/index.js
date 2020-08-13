import _ from "lodash"       //是一个一致性、模块化、高性能的 JavaScript 实用工具库。x
import './css/index.css'
import Icon from './img/icon.png' // 1. 引入图片
import Icon2 from './img/icon2.png' // 1. 引入图片

import change from "./check";
function component() {
  var element = document.createElement("div");
    console.log(_);
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("color_red"); // 2. 添加类名
     var img = new Image(200, 200); // 2. 使用图片
     img.src = Icon;
     element.appendChild(img);
     element.onclick = change;
  var element2 = document.createElement("image");
element2.src = Icon2;
  return element;
}

document.body.appendChild(component());