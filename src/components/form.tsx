import * as React from 'react'

interface IProps {
    title?: string;
    children: any;
    handleSubmit: any;
}
export class Form extends React.Component<IProps> {
    public render() {
        const { title, children, handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h4 className="text-center mt-4">{title}</h4>
                    {children}
                </div>
            </form>
        )
    }
}
