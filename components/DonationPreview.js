import React from 'react'
import PropTypes from 'prop-types'

export default class DonationPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.dir(value)
        return (
            <div style={{ padding: '10px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>DONATION WIDGET</div >
            </div>
        )
    }
}