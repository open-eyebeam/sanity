import React from 'react'
import PropTypes from 'prop-types'

export default class DividerPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.dir(value)

        // const url = value.audio && value.audio.asset && value.audio.asset._ref ? 'https://cdn.sanity.io/files/1tpw92x3/production/' + value.audio.asset._ref
        //     .replace('file-', '')
        //     .replace('-mp3', '.mp3') : ''
        // {value.audio ? <audio src={url} controls style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'No audiofile selected'}

        return (
            <div style={{ padding: '10px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>DIVIDER</div >
                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <hr />
                </div>
            </div>
        )
    }
}