import { Formik } from 'formik';
import React from 'react';
import Inputs from '../../Compoents/input/Inputs';
import { initialValues } from '../../Validations/Formik/initialValues';
import { validationSchema } from '../../Validations/Formik/validationsSchema';
import ButtonSubmit from '../../Compoents/Submit/Submit';
import {
	FormRegisterContainer,
	FormStyle,
	FormTitle,
} from './FormRegisterStyle';

const FormRegister = () => {
	return (
		<FormRegisterContainer>
			<FormTitle>Registrese para enviarle las novedades </FormTitle>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { resetForm }) => {
					console.log({ values });
					resetForm();
				}}
			>
				{({ touched, errors }) => {
					<FormStyle>
						<Inputs
							placeholder="Nombre"
							name="name"
							label="nombre"
							isError={touched.name && errors.name}
						/>
						<Inputs
							placeholder="Apellido"
							name="lastName"
							label="apellido"
							isError={touched.lastName && errors.lastName}
						/>
						<Inputs
							placeholder="Email"
							name="email"
							label="correo electronico"
							isError={touched.email && errors.email}
						/>
						<Inputs
							placeholder="Contraseña"
							name="password"
							label="constraseña"
							isError={touched.password && errors.password}
						/>
						<ButtonSubmit>Registrarse</ButtonSubmit>
					</FormStyle>;
				}}
			</Formik>
		</FormRegisterContainer>
	);
};

export default FormRegister;
