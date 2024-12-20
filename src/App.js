import {CounterButton, CardList, Input, Timeout, JsonToEl, TreeArray, PerformanceOptimization, QA} from './pages';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from "./layout";

const navigation = [
  {label: '计数器', url: '/counter'},
  {label: '超时Promise', url: '/timeout'},
  {label: '卡片列表', url: '/card-list'},
  {label: '受控Input', url: '/input'},
  {label: 'JSON转EL', url: '/json-el'},
  {label: 'TreeArray', url: '/tree'},
  {label: '性能优化', url: '/performance'},
  {label: 'QA', url: '/qa'},
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout navigation={navigation}/>}>
          <Route index element={<CounterButton/>}/>
          <Route path='counter' element={<CounterButton/>}/>
          <Route path='timeout' element={<Timeout/>}/>
          <Route path='card-list' element={<CardList/>}/>
          <Route path='input' element={<Input/>}/>
          <Route path='json-el' element={<JsonToEl/>}/>
          <Route path='tree' element={<TreeArray/>}/>
          <Route path='performance' element={<PerformanceOptimization/>}/>
          <Route path='qa' element={<QA/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
