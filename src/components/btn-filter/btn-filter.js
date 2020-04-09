import React, {Component} from "react";
import './btn-filter.css';

export default class BtnFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'completed', label: 'Completed'}
    ]

    render() {
        const { count } = this.props;

        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const btnClassActive = isActive ? 'activeNow' : '';
            return (
                <button type='button'
                        className={ btnClassActive }
                        key={name}
                        onClick={(e)=> {
                            e.preventDefault();
                            onFilterChange(name)}}
                >
                        {label}
                </button>
            );
        });

        return (
            <footer className='footer'>
                <span className='counter'>
                    {count} items left
                </span>
                <div className='buttons'>
                    {buttons}
                    {/*<button type='button'*/}
                    {/*        className='showAll'>All</button>*/}
                    {/*<button type='button'*/}
                    {/*        className='showActive'>Active</button>*/}
                    {/*<button type='button'*/}
                    {/*        className='showCompleted'>Completed</button>*/}
                </div>
                <button type='button'
                        className='clear'>Clear completed</button>
            </footer>
        )
    }
}
//  const BtnFilter = ({ count }) => {
//
//
//         return (
//             <footer className='footer'>
//                 <span className='counter'>
//                     {count} items left
//                 </span>
//                 <div className='buttons'>
//                     <button type='button'
//                             className='showAll'>All</button>
//                     <button type='button'
//                             className='showActive'>Active</button>
//                     <button type='button'
//                             className='showCompleted'>Completed</button>
//                 </div>
//                 <button type='button'
//                         className='clear'>Clear completed</button>
//             </footer>
//         )
// }
// export  default BtnFilter;