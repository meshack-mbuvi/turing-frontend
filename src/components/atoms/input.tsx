import * as React from "react";

interface IProps {
    className?: string;
    placeholder?: string;
    type?: string;
    id?: string;
    required?: boolean;
    onChange?: (e: any) => void;
}
export const Input: React.SFC<IProps> = ({
    className = "",
    placeholder = "",
    type = "text",
    id = "",
    onChange,
    required = false
}) => {
    return (
        <div className="input-group mb-3">
            { " " }
            <input
                id={ id }
                type={ type }
                className={ className }
                placeholder={ placeholder }
                required={ required }
                onChange={ onChange }
            />
        </div>
    );
};
