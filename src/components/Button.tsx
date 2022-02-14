import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> // Serve para repassar todas as propriedades do elemento button

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} /> // ao fazer ...props repassamos todas as propriedades que recebemos pelo Button
    )
}