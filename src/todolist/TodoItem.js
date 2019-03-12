import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends  Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
    render() {
        const { content, test } = this.props;
        return (
            <div onClick = {this.handleDelete}>
                {/* dangerouslySetInnerHTML = {{__html: content}}> */}
                {/* dangerouslySetInnerHTML <h1>标签</h1> 在输入后不转译 */}
                {test} - {content}
            </div>
        )
    }
}

// 检查从父组件传来的数据是否符合类型
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello'
}

export default TodoItem;