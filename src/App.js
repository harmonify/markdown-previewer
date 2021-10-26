import { EditorCard } from './components/EditorCard.jsx';
import { PreviewerCard } from './components/PreviewerCard.jsx';

function App() {
  return (
    <div className="app">
      <div className="w-5/12">
        <EditorCard />
      </div>
      <div className="w-7/12">
        <PreviewerCard />
      </div>
    </div>
  );
}

export default App;
