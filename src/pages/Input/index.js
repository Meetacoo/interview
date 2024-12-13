import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// 请认真阅读题目，实现4个api
function CustomInput({
  maxLength,
  defaultValue,
  value,
  onChange
}) {
  const [inputValue, setInputValue] = useState(value || defaultValue);
  const handleChange = (e) => {
    if ((value && onChange) || defaultValue) {
      if (e.target.value && e.target.value.length <= maxLength) {
        setInputValue(e.target.value);
        onChange?.(e.target.value)
      }
      if (!e.target.value) {
        setInputValue(null);
        onChange?.(null);
      }
    }
  }

  return (
    <div className="custom-input">
      <input value={inputValue} onChange={handleChange} />
    </div>
  );
}

const Input = () => {
  return (
    <div>
      {/* 用户可正常进行输入框值的变更 */}
      <CustomInput maxLength={10} defaultValue="hello" />
      {/* 因未传入 onchange 处理函数，用户无法进行输入框值的变更 */}
      <CustomInput maxLength={10} value="hello" />
    </div>
  )
};
export default Input;