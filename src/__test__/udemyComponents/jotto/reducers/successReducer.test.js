import { actionTypes } from '../../../../components/udemyComponents/jotto/actions/index';
import success from '../../../../components/udemyComponents/jotto/reducers/successReducer';

test('returns default initial state of `false` when no action types passed', () => {
    const newState = success(undefined, {});
    expect(newState).toBe(false);
});
test('returns state of true upon reciving an option of types', () => {
    const newState = success(undefined, { type: actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true)
})