import React from 'react'
import PropTypes from 'prop-types'

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

export default class ColumnsPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.dir(value)

        return (
            <div style={{ padding: '10px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>TWO COLUMN LAYOUT</div >
                <h2 style={{ fontSize: '0.8em' }}>{value.title}</h2>
                <div style={{ fontSize: '0.8em', columnCount: '2', columnFill: 'balance', columnWidth: '50%' }}>
                    {value.columnContent && value.columnContent.content ? toPlainText(value.columnContent.content) : ''}
                </div>
            </div >
        )
    }
}