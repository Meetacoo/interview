import {useEffect} from "react";

const jsonData = {
  tagName: 'div',
  children: [
    { tagName: 'div', textContent: 'Item 1', attributes: {style: "color: pink"} },
    { tagName: 'div', textContent: 'Item 2' },
    { tagName: 'ul', textContent: 'Item 3', children: [{ tagName: 'li', textContent: 'Item 3-1' }] }
  ],
  attributes: {style: "color: skyblue"}
};

const createElementFromJSON = (json) => {
  const element = document.createElement(json.tagName);

  // 设置属性
  for (const attr in json.attributes) {
    element.setAttribute(attr, json.attributes[attr]);
  }

  // 设置文本内容
  if (json.textContent) {
    element.textContent = json.textContent;
  }

  // 处理子元素
  if (json.children) {
    json.children.forEach(child => {
      element.appendChild(createElementFromJSON(child));
    });
  }

  return element;
};

const JsonToEl = () => {
  useEffect(() => {
    const ulElement = createElementFromJSON(jsonData);
    const outer = document.getElementsByClassName("json-to-el");
    if (outer?.length) {
      outer[0].appendChild(ulElement);
    }
    // 严格模式下会运行两次
    return () => {
      if (outer?.length) {
        // 组件卸载时执行清理操作，清除副作用
        outer[0].removeChild(ulElement);
      }
    }
  }, []);

  return (
    <div className="json-to-el"></div>
  );
};

export default JsonToEl;