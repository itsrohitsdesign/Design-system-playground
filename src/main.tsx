import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { antdTheme } from '@/lib/tokens/antdTheme';
import '@/lib/tokens/figma-export.tokens-bound.css';
import '@/index.css';
import App from '@/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
);
