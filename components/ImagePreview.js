import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from 'part:@sanity/base/client'

export const toPlainText = (blocks = []) => {
    return (
        blocks
            .map(block => {
                if (block._type !== 'block' || !block.children) {
                    return ''
                }
                return block.children.map(child => child.text).join('')
            })
            .join('\n\n')
    )
}

export default class ImagePreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        const imageBuilder = imageUrlBuilder(sanityClient)
        console.log('image', value)
        return (
            <div style={{ padding: '10px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>IMAGE</div >
                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Full width:</span> {value.fullWidth ? 'Yes' : 'No'}</div>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Cover & crop:</span> {value.coverAndCrop ? 'Yes' : 'No'}</div>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Layout:</span> {value.layout ? value.layout : 'Left (default)'}</div>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Alt-text:</span> {value.alt}</div>
                    <div style={{ fontSize: '0.8em' }}><span style={{ fontWeight: 'bold' }}>Caption:</span> {value.caption && value.caption.content ? toPlainText(value.caption.content) : ''}</div>
                </div>
                {value.image ? <img src={imageBuilder
                    .image(value.image)
                    .height(200)
                    .quality(100)
                    .url()} /> : 'No image selected'}
            </div >
        )
    }
}