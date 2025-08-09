import { useLocation } from 'react-router-dom';
function App({ embed = false }) {
  const { pathname } = useLocation();
  const isEmbed = embed || pathname.startsWith('/embed');
  return <Pages embed={isEmbed} />;
}
