import React, { ReactNode } from 'react';
import { ButtonState } from './types';
type Props = {
    state: ButtonState;
    onClick: () => void;
    children: ReactNode;
    className?: string;
};
export default function Button({ state, onClick, children, className }: Props): React.JSX.Element;
export {};
