import React from 'react'
import logo from './logo.svg'
import MyHeader from './components/MyHeader' // 这是一个自定义组件学习示例
import './styles/App.less' // 这是LESS学习入口文件

class App extends React.Component {
  myFun () {
    console.log('现在开始学习JS')
  }

  componentDidMount () {
    console.log('hello word ')
    this.myFun()
    var arr = [1]
    console.log('arr:', arr)
    // arr.push(2)
    // arr.pop()
    // arr.unshift(0)
    // arr.shift()
    console.log('arr::', arr)
  }

  render () {
    return (
      <article className='App'>
        <MyHeader />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
          编辑 <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
          Learn React
          </a>
          <div className='box'>
            <div className='item'>1</div>
            <div className='item'>2</div>
            <div className='item'>3</div>
          </div>
        </header>
      </article>
    )
  }
}

export default App

// function App () {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           编辑 <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

// export default App
