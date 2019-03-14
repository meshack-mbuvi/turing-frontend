import * as React from "react";

interface IProps {
    className?: string;
    htmlFor?: string;
}
export const Label: React.SFC<IProps> = ({
    className = "",
    htmlFor = "",
}) => {
    return (
        <div className="input-group mb-3">
            {" "}
            <label
                className={className}
                htmlFor={htmlFor}
            />
        </div>
    );
};

export default Label;
