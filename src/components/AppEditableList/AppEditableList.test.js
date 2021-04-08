import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppEditableList from './AppEditableList';


const setup = () => {
  const appEditableList = render(<AppEditableList />);
  const addItemButton = screen.getByText(/add item/i);
  const addItemInput = screen.getByTestId('addItemInput');
  return {
    appEditableList,
    addItemButton,
    addItemInput
  }
}

describe('App editable list', () => {
  it('renders correctly', () => {
    const { addItemButton, addItemInput } = setup();
    expect(addItemButton).toBeInTheDocument();
    expect(addItemInput).toBeInTheDocument();
  });

  it('lets you add a NEW item to the list', () => {
    const { addItemButton, addItemInput } = setup();
    userEvent.type(addItemInput, 'Hi im a new list item');
    userEvent.click(addItemButton);

    const appListItem = screen.getByTestId('appListItem');
    expect(appListItem).toBeInTheDocument();
  });

  it('lets you DELETE an item from the list', () => {
    const { addItemButton, addItemInput } = setup();
    userEvent.type(addItemInput, 'Hi im a new list item');
    userEvent.click(addItemButton);

    const appListItem = screen.getByTestId('appListItem');
    const deleteIcon = screen.getByTestId('delete');
    
    userEvent.click(deleteIcon);
    expect(appListItem).not.toBeInTheDocument();
  });

  it('lets you EDIT an item from the list', () => {
    const { addItemButton, addItemInput } = setup();

    userEvent.type(addItemInput, 'new list item');
    userEvent.click(addItemButton);

    const appListItem = screen.getByTestId('appListItem');
    const editIcon = screen.getByTestId('edit');
    
    userEvent.click(editIcon);
    const editInput = screen.getByTestId('editInput');
    
    expect(editInput).toBeInTheDocument();

    userEvent.type(editInput, 'hello');
    userEvent.click(appListItem);

    expect(editInput).not.toBeInTheDocument();

    const newListItemContet = screen.getByText(/new list itemhello/i);

    expect(newListItemContet).toBeInTheDocument();
  });
})

