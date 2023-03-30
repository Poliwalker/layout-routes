import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
`;

export const LogoContainerStyle = styled.div`
	height: auto;
	padding: 0 15px;
`;

export const LogoImgStyle = styled.img`
	width: 80px;
	height: 80px;
`;

export const NavStyle = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavUlStyle = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const NavLiStyle = styled(NavLink)`
	text-decoration: none;
	font-size: 22px;
	font-weight: 700;
	background-color: ${(props) => (props.tareas ? 'red' : 'none')};
	padding: 5px 12px;
	border-radius: 10px;
`;
