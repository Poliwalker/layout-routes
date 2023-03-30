import React, { useContext } from 'react';
import { TodoContext } from '../../context/Context';
import {
	HeaderStyle,
	LogoContainerStyle,
	LogoImgStyle,
	NavLiStyle,
	NavStyle,
	NavUlStyle,
} from './NavbarStyle';
import { BsMoonFill } from 'react-icons/bs';

export const Navbar = () => {
	const ctx = useContext(TodoContext);
	const { isDark, setIsDark } = useContext(TodoContext);

	return (
		<HeaderStyle>
			<LogoContainerStyle>
				<LogoImgStyle src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/RHCP_logo.svg/2048px-RHCP_logo.svg.png" />
			</LogoContainerStyle>
			<NavStyle>
				<NavUlStyle isDark={isDark}>
					<NavLiStyle to="/">Home</NavLiStyle>
					<NavLiStyle to="todo" tareas={ctx.todos.length}>
						Task List
					</NavLiStyle>
					<NavLiStyle to="info-marvel">Info Marvel</NavLiStyle>
					<NavLiStyle to="registration">Registrarse</NavLiStyle>
					<BsMoonFill onClick={() => setIsDark(!isDark)} />
				</NavUlStyle>
			</NavStyle>
		</HeaderStyle>
	);
};
