// App.tsx
import { useState, useRef } from 'react';
// import { supabase } from './utils/supabase'
import GameComponent from './components/GameComponent';
import Prompt from './components/Prompt';
import FullscreenIframe from './components/FullscreenIframe';
import { Header } from './header/Header.tsx';
import { PlayerProvider } from './context/PlayerContext.tsx'; // Adjust path as per your project structure

const App = () => {
  const [showGame, setShowGame] = useState(false);
  const hasPrompted = useRef(false);

  const startGame = () => {
    setShowGame(true);
  };

  const closeGame = () => {
    setShowGame(false);
    // Optionally perform any cleanup or state resets related to the game
  };

  return (
    <PlayerProvider>
      <div className="h-screen bg-slate-700 flex flex-col items-center justify-center text-white">
        {/* Pass hasPrompted as a prop to Prompt */}
        <Prompt hasPrompted={hasPrompted} />
        
        {showGame ? (
          <GameComponent onCloseGame={closeGame} />
        ) : (
          <>
            <Header />
            <div className="text-center">
              <h1 className="text-4xl font-bold my-2">Matching!⚽</h1>
              <p className="text-xl">Earn your $MATCH by playing!</p>
              <FullscreenIframe showGame={showGame} startGame={startGame} />
            </div>
          </>
        )}
      </div>
    </PlayerProvider>
  );
};

export default App;

// Page.tsx
// import { useState, useEffect } from 'react';
// import { supabase } from '../utils/supabase';

// const Page = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const getTodos = async () => {
//       const { data: todos } = await supabase.from('todos').select();

//       if (todos && todos.length > 0) {
//         setTodos(todos);
//       }
//     };

//     getTodos();
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.title}</li>
//       ))}
//     </div>
//   );
// };

// export default Page;