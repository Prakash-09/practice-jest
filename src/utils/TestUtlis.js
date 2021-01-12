import checkPropTypes from 'check-prop-types';

export const findTestAttr = (wrapped, val) => {
    return wrapped.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}