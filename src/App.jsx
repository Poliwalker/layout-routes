import { useContext } from 'react';
import { TodoContext } from './context/Context';
import Routes from './Routes/Routes';
import { GlobalStyles } from './Styles/GlobalStyles';

function App() {
	const { isDark } = useContext(TodoContext);

	return (
		<>
			<GlobalStyles isDark={isDark} />

			<Routes />
		</>
	);
}

export default App;
