import React from 'react'
import PropTypes from 'prop-types'

export default class VideoPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.log('video', value)
        return (
            <div style={{ padding: '10px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>VIDEO</div >
                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Title:</span> {value.title}</div>
                </div >
            </div >
        )
    }
}