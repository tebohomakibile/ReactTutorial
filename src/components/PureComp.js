import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        return (
            <div>
                Pure Comp {this.props.name}
            </div>
        )
    }
}

export default PureComp
