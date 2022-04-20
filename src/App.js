import { Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';

const App = () => (
    <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route exact path="/todo-list-react" element={<TodoContainer />} />
    </Routes>
);

export default App;