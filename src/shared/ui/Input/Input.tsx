import React, {
    forwardRef,
    InputHTMLAttributes,
    memo,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange: (value: string) => void;
    autofocus?: boolean;
    label?: string;
}

export const Input = memo(forwardRef<HTMLInputElement, InputProps>(({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    label,
    ...otherProps
}, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => innerRef.current!);

    useEffect(() => {
        if (autofocus) {
            innerRef.current?.focus();
        }
    }, [autofocus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

    return (
        <div
            className={classNames(
                cls.InputWrapper,
                { [cls.filled]: value.length > 0 },
                [className],
            )}
        >
            {label && (
                <label htmlFor={otherProps.id} className={cls.label}>
                    {label}
                </label>
            )}
            <input
                {...otherProps}
                id={otherProps.id}
                ref={innerRef}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={cls.input}
            />
        </div>
    );
}));
