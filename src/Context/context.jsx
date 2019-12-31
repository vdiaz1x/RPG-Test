import React from 'react';
import values from './values';

const Context = React.createContext(values);

export const Provider = Context.Provider
export const Consumer = Context.Consumer
export default Context;