import { render, screen } from '@testing-library/react';
import AppListItem from './AppListItem';

describe('App list item', () => {
  it('renders correctly', () => {
    render(<AppListItem content="list item" />);

    const appListItem = screen.getByTestId('appListItem');
    const controls = screen.getByTestId('controls');
    const content = screen.getByText(/list item/i);
    
    expect(appListItem).toBeInTheDocument();
    expect(controls).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
})