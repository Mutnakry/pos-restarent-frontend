import React from 'react';

function Pagination({ currentPage, totalPages, prevPage, nextPage }) {
    return (
        <div className="flex justify-end items-center mt-4 gap-1">
            <button
                onClick={prevPage}
                className="px-3 py-1 text-sm bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 disabled:opacity-50"
                disabled={currentPage === 1}
            >
                ថយក្រោយ
            </button>
            <span className="px-4 text-sm py-1 bg-gray-200  dark:bg-gray-500">
                ទំព័រ {currentPage} ទំព័រសរុប {totalPages}
            </span>
            <button
                onClick={nextPage}
                className="px-3 py-1 text-sm bg-gray-300  dark:bg-gray-500 hover:bg-gray-400 disabled:opacity-50"
                disabled={currentPage === totalPages}
            >
                បន្ទាប់
            </button>
        </div>
    );
}

export default Pagination;
