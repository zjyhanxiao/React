import React from 'react'
import InfoPages from '../components/infoPages/index'
class IdentityConfirmation extends React.Component {
    constructor(prpos) {
        super(prpos)
    }

    render() {
        return (
            <div>
                <InfoPages></InfoPages>
            </div>
        )
    }
}

IdentityConfirmation.defaultProps = {}

export default IdentityConfirmation;
