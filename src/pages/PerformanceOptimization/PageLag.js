import {Card, Flex} from "antd";

const data = [
  {
    title: '减少不必要的渲染',
    list: [
      {
        title: '使用 React.memo 或 useMemo:',
        answer: [
          "React.memo 用于优化函数组件，useMemo 用于优化计算结果。",
          "它们可以缓存组件或计算结果，只有当 props 发生变化时才会重新渲染或计算。"
        ]
      },
      {
        title: "合理使用 shouldComponentUpdate：",
        answer: ["在类组件中，可以通过自定义 shouldComponentUpdate 方法来控制组件是否需要更新。"]
      },
      {
        title: "避免在渲染函数中进行副作用操作：",
        answer: ["将副作用操作移到 useEffect 中，避免在每次渲染时都执行。"]
      }
    ]
  },
  {
    title: '优化复杂计算',
    list: [
      {
        title: "拆分复杂组件：",
        answer: ["将大型组件拆分成更小的组件，降低每个组件的复杂度。"]
      },
      {
        title: "使用 useMemo 或 React.memo 缓存计算结果：",
        answer: ["对于耗时的计算，可以将结果缓存起来，避免重复计算。"]
      },
      {
        title: '利用 memoize-one 等库：',
        answer: ["这些库可以帮助你更方便地实现结果缓存。"]
      }
    ]
  },
  {
    title: "优化大数据量渲染",
    list: [
      {
        title: "虚拟列表：",
        answer: ["对于大列表，只渲染可见区域的元素，可以显著提升性能。"]
      },
      {
        title: "窗口化渲染：",
        answer: ["将大数据集分成小块，按需加载渲染。"]
      },
      {
        title: "数据分页：",
        answer: ["将数据分页，每次只加载一页的数据。"]
      }
    ]
  },
  {
    title: "避免内存泄漏",
    list: [
      {
        title: "及时清除定时器、事件监听器等：",
        answer: ["在组件卸载时，确保清除所有的定时器和事件监听器。"]
      },
      {
        title: "避免创建全局变量：",
        answer: ["全局变量可能导致内存泄漏。"]
      },
      {
        title: "使用工具检测内存泄漏：",
        answer: ["Chrome DevTools 提供了强大的内存分析工具。"]
      },
    ]
  },
  {
    title: "优化网络请求",
    list: [
      {
        title: "减少请求次数：",
        answer: ["合并请求，减少请求频率。"]
      },
      {
        title: "使用缓存：",
        answer: ["缓存静态资源和 API 数据。"]
      },
      {
        title: "代码分割：",
        answer: ["将代码分割成多个 bundle，按需加载。"]
      }
    ]
  },
  {
    title: "其他优化",
    list: [
      {
        title: "合理使用索引：",
        answer: ["对于频繁查找的数组，使用索引可以提高查找效率。"]
      },
      {
        title: "避免不必要的 DOM 操作：",
        answer: ["尽量减少 DOM 操作，可以显著提升性能。"]
      },
      {
        title: "使用性能分析工具：",
        answer: ["使用 Chrome DevTools 的 Performance 面板来分析应用的性能瓶颈。"]
      }
    ]
  }
];
const PageLag = () => {
  return (
    <Flex vertical gap={12}>
      <ul>
        关键词：
        <li>React.memo，useMemo，虚拟列表，内存泄漏，网络请求</li>
      </ul>
      <ol>
        {
          data.map(({title, list}) => {
            return (
              <li key={title}>
                {title}
                {
                  list.map(item => (
                    <ul key={item.title}>
                      <li>
                        {item.title}
                        <ul>
                          {
                            item.answer?.map(answer => (
                              <li key={answer}>{answer}</li>
                            ))
                          }
                        </ul>
                      </li>
                    </ul>
                  ))
                }
              </li>
            )
          })
        }
      </ol>
      <Card title="有pagination时">
        <ol>
          <li>减少每页获取的条数</li>
          <li>先获取每条数据都需要的共同枚举数据，减少网络请求次数</li>
        </ol>
      </Card>
      <Card title="没有pagination时">
        <ol>
          <li>加载第一页时同步获取第二页的数据,不在视口范围内的数据都删除掉</li>
        </ol>
      </Card>
    </Flex>
  )
};

export default PageLag;
