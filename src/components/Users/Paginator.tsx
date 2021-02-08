import { useState } from "react";

type PaginatorPropsType = { 
    totalUsersCount: number
    pageSize: number
    changeCurrentPage: (page: number) => void
    currentPage: number
    portionSize: number
    styles: any 
} 
let Paginator: React.FC<PaginatorPropsType> = ({ totalUsersCount, pageSize, changeCurrentPage, currentPage, portionSize, styles }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = pagesCount / portionSize
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={styles.pagCont}>
            { portionNumber > 1 && <button className={styles.pagBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <span
                            key={page}
                            onClick={() => { changeCurrentPage(page) }}
                            className={(currentPage === page) ? `${styles.selectedPage} ${styles.pagBtn}` : `${styles.pagBtn}`}>{page}
                        </span>
                    )
                })}
            { portionNumber < portionCount && <button className={styles.pagBtn} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
    )
}

export default Paginator