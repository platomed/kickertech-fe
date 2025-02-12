import useFiles from './hooks/useFiles';
import { FileList } from './components/FileList';

const App: React.FC = () => {
  const { loading, files, rescanFiles } = useFiles();

  return (
    <>
      <button onClick={rescanFiles} disabled={loading}>Rescan</button>
      <h1>File List</h1>
      <FileList loading={loading} files={files} />
    </>
  )
}

export default App;
