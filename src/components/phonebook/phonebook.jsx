import PropTypes from 'prop-types';
import {StyledDiv, Label, Input, List, ListItem, ListButton} from "./phonebook.style"
export const Phonebook = ({
    data,
    onFindContact,
    filter,
    onDelete,
}) => {
    if (filter !== undefined) {
        data = filter;
    }
    return (
        <StyledDiv>
            <Label>
                Fint contacts by name
                <Input
                    type="text"
                    onChange={onFindContact}
                >
                </Input>
            </Label>
            <List>
                {data.map(contact => (
                    <ListItem key={contact.id}>
                        <span>{contact.name}: {contact.number.substr(0,3)+"-"+contact.number.substr(3,3)+"-"+contact.number.substr(6,4)}</span>
                        <ListButton onClick={() => onDelete(contact.id)} type="button">Delete</ListButton>
                    </ListItem>
                ))}
            </List>
        </StyledDiv>
    )
};

Phonebook.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onFindContact: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    filter: PropTypes.array.isRequired,
};

