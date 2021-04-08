import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
    
    const container = screen.getByTestId('container');
    const AppEditableList = screen.getByTestId('appEditableList');

    expect(AppEditableList).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  })
})
