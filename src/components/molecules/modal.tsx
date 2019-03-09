import * as React from "react";

interface IProps {
    title?: any;
    tabindex?: string;
    id?: string;
    footer?: boolean;
}
export class Modal extends React.Component<IProps> {
    public render() {
        const footer = this.props.footer ? true : false;
        return (
            <div
                className="modal fade"
                role="dialog"
                id={this.props.id}
                aria-hidden="true"
                tabIndex={-1}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title m-auto">{this.props.title}</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">{this.props.children}</div>
                        {footer ? (
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                </button>
                            </div>
                        ) : (
                                ""
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
