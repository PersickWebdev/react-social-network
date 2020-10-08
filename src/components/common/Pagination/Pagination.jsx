import React, {useState} from "react";
import style from '../Pagination/Pagination.module.css';

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const [portionSize, setPortionSize] = useState(10);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={style.paginationBox}>
            <button className={style.pagination__button}
                    onClick={() => setPortionNumber(portionNumber - 1)}
                    disabled={portionNumber === 1 ? true : false}>
                prev
            </button>

            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
            }

            <button className={style.pagination__button}
                    onClick={() => setPortionNumber(portionNumber + 1)}
                    disabled={portionCount > portionNumber ? false : true}>
                next
            </button>
        </div>
    )
}

export default Pagination;