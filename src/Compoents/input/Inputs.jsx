import { ErrorMessage, Field } from 'formik';
import React from 'react';
import {
	ErrorStyled,
	InputBoxStyled,
	InputStyled,
	LabelStyled,
} from './InputStyles';

const Inputs = (type, label, name, isError) => {
	return (
		<>
			<InputBoxStyled>
				<LabelStyled htmlFor={label}>{label}</LabelStyled>
				<Field
					as={InputStyled}
					type={type}
					name={name}
					id={label}
					error={isError}
				></Field>
			</InputBoxStyled>
			<ErrorMessage name={name} component={ErrorStyled} />
		</>
	);
};

export default Inputs;
