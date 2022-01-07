import React from 'react'
import PropTypes from 'prop-types'

export default class ApplicationButtonPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        return (
            <div style={{ padding: '10px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>APPLICATION BUTTON</div >
                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Size:</span> {value.size}</div>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Url:</span> {value.url}</div>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Short text:</span> {value.shortText}</div>
                </div>
            </div >
        )
    }
}