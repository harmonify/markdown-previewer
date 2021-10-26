import { EditorCard } from './components/EditorCard.jsx';
import { PreviewerCard } from './components/PreviewerCard.jsx';
import Store from './Store';

function App() {
  return (
    <Store>
      <div className="app">
        <div className="w-5/12">
          <EditorCard />
        </div>
        <div className="w-7/12">
          <PreviewerCard />
        </div>
      </div>
    </Store>
  );
}

export default App;
