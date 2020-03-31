import configureMockStore from 'redux-mock-store'
import * as fromActions from '../actions'

// Create a mock store
const mockStore = configureMockStore()
const store = mockStore({})

describe('action creators', () => {
  it('creates ADD_X when add was successful', () => {
    store.dispatch(fromActions.addX(15));
    expect(store.getActions()).toMatchSnapshot();
  });
});