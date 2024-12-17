import {useEffect} from "react";

const data = [
  { id: 1, parentId: null, name: '根节点' },
  { id: 2, parentId: 1, name: '子节点1' },
  { id: 3, parentId: 1, name: '子节点2' },
  { id: 4, parentId: 2, name: '子节点1的子节点' }
];

const arrayToTree = (arr, pid = null) => {
  return arr.reduce((pre, cur) => {
    if (cur.parentId === pid) {
      const children = arrayToTree(arr, cur.id);
      if (children.length) {
        cur.children = children;
      }
      pre.push(cur)
    }
    return pre;
  }, [])
};

const treeToArray = (arr) => {
  return arr.reduce((pre, cur) => {
    if (cur.children) {
      const children = treeToArray(cur.children);
      delete cur.children;
      pre.push(cur, ...children);
    } else {
      pre.push(cur);
    }
    return pre;
  }, []);
};

const TreeArray = () => {
  const tree = arrayToTree(data, null);
  console.log('tree', tree);
  const arr = treeToArray(tree);
  console.log('array', arr);
  useEffect(() => {
  }, []);

  return (
    <div>
      <div>arrayToTree</div>
      {JSON.stringify(arrayToTree(data, null))}
      <br/>
      <br/>
      <div>treeToArray</div>
      {JSON.stringify(treeToArray(arrayToTree(data, null), null))}
    </div>
  )
};

export default TreeArray;