import React, { Component } from 'react'


export default class TodoItem extends Component {
  render() {
    const { title, deleteItem, editItem } = this.props;
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <h5>{ title }</h5>
            <div>
              <button className='mx-3' onClick={ editItem }>
                <i className="fas fa-pen"></i> Edit Me
              </button>
              <button className='' onClick={ deleteItem }>
                <i className="fas fa-trash"></i> Delete me
              </button>
            </div>
        </li>
    )
  }
}