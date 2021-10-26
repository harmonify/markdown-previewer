import { EditorCard } from './components/EditorCard.jsx';
import { PreviewerCard } from './components/PreviewerCard.jsx';
import { GithubLink } from './components/GithubLink.jsx';
import Store from './Store';

function App() {
  return (
    <Store>
      <div className="app">
        <div className="app-header">
          <h1 className="text-purple-gradient text-5xl font-bold">Markdown Previewer</h1>
          <GithubLink url="https://github.com/harmonify/markdown-previewer" />
        </div>

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
