import React from 'react';
import Layout from '../Compoents/Layout/Layout';
import FetchApi from '../Pages/FetchApi/FetchApi';
import Home from '../Pages/Home/Home';
import TodoList from '../Pages/TodoList/TodoList';
import FormRegister from '../Pages/FormRegister/FormRegister';
import Error404 from '../Pages/Error404/Error404';
import {
	BrowserRouter,
	Route,
	Routes as ReactDomRoutes,
} from 'react-router-dom';

const Routes = () => {
	return (
		<BrowserRouter>
			<Layout>
				<ReactDomRoutes>
					<Route path="/" element={<Home />} />
					<Route path="todo" element={<TodoList />} />
					<Route path="info-marvel" element={<FetchApi />} />
					<Route path="registration" element={<FormRegister />} />
					<Route path="*" element={<Error404 />} />
				</ReactDomRoutes>
			</Layout>
		</BrowserRouter>
	);
};

export default Routes;
