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

function QAList(props) {
    const list = props.list;
    const listItems = list.map((item) =>
        <div>
            <div style={{ fontSize: '0.8em', fontStyle: 'italic', padding: '15px', marginBottom: '5px', marginTop: '5px', borderBottom: '1px solid black', borderTop: '1px solid black' }}>
                {item.question}
            </div>
            <div style={{ fontSize: '0.8em', padding: '5px' }}>
                {item.answer && item.answer.content ? toPlainText(item.answer.content) : ''}
            </div>
        </div>);
    return (
        <div>
            {listItems}
        </div>
    );
}

export default class FaqPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props

        return (
            <div style={{ padding: '10px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '1px' }}>FAQ</div >
                <h2 style={{ fontSize: '0.8em' }}>{value.title}</h2>
                <QAList list={value.questionAnswer} />
            </div >
        )
    }
}