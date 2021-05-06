import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { ContentContextProvider } from './contexts/ContentContext';

import './styles/global.scss';

export function App() {
  return (
    <ContentContextProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </ContentContextProvider>
  )
}