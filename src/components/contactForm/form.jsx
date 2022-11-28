import PropTypes from 'prop-types';
import { FormStyle, Label, FormInput, FormButton } from './form.styled';
export const Form = ({
    onSubmitForm,
    onChangeName,
    onChangePhone,
    name,
    number,
}) => {
    return (
        <FormStyle onSubmit={onSubmitForm}>
            <Label>
                Name
            <FormInput 
                type='text'
                placeholder='Please enter the name'
                value={name}
                onChange={onChangeName}
                required
                />
            </Label>
            <Label>
                Phone
            <FormInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder='Please enter phone number'
                value={number}
                onChange={onChangePhone}
                minlength="7"
                maxLength="10"
                />
            </Label>
            <FormButton type='submit'>Add contact</FormButton>
        </FormStyle>
    )
}

Form.propTypes = {
    onChangeName: PropTypes.func.isRequired,
    onChangePhone: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}