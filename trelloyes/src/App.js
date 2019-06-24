import React from 'react';
import List from './List';
import './App.css';


function App(props) {

  const lists = props.store.lists.map(list => <List key={list.id} header={list.header} cards={list.cardIds.map(id => props.store.allCards[id])} />)


  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {lists}
    </div>
    </main>
  );
}

export default App;

// class App extends Component {
//   static defaultProps = {
//     store: {
//       lists: [],
//       allCards: {},
//     }
//   };

//   render() {
//     const { store } = this.props
//     return (
//       <main className='App'>
//         <header className='App-header'>
//           <h1>Trelloyes!</h1>
//         </header>
//         <div className='App-list'>
//           {store.lists.map(list => (
//             <List
//               key={list.id}
//               header={list.header}
//               cards={list.cardIds.map(id => store.allCards[id])}
//             />
//           ))}
//         </div>
//       </main>
//     );
//   }
// }

// export default App;
