import React, { useState } from 'react';
import Navbar from '../conponent/Navbar';
import Pagination from '../conponent/pagination/Pagination';
import ActionDelete from '../conponent/action/ActionDelete';

const categories = [
    { id: 1, cat_name: "food", create_at: '12:00' },
    { id: 2, cat_name: "Apple", create_at: '12:100' },
    { id: 3, cat_name: "Bannan", create_at: '12:010' },
    { id: 4, cat_name: "Items", create_at: '12:020' },
    { id: 5, cat_name: "ppenda", create_at: '12:100' },
    { id: 6, cat_name: "Vegetables", create_at: '12:030' },
    { id: 7, cat_name: "Electronics", create_at: '12:040' },
    { id: 8, cat_name: "Clothing", create_at: '12:050' },
    { id: 9, cat_name: "Furniture", create_at: '12:060' },
    { id: 10, cat_name: "Books", create_at: '12:070' },
    { id: 11, cat_name: "Toys", create_at: '12:080' },
    { id: 12, cat_name: "Sports", create_at: '12:090' },

    { id: 92, cat_name: "Furniture", create_at: '12:060' },
    { id: 130, cat_name: "Books", create_at: '12:070' },
    { id: 1221, cat_name: "Toys", create_at: '12:080' },
    { id: 1322, cat_name: "Sports", create_at: '12:090' },
    { id: 922, cat_name: "Furniture", create_at: '12:060' },
    { id: 1540, cat_name: "Books", create_at: '12:070' },
    { id: 1231, cat_name: "Toys", create_at: '12:080' },
    { id: 1232, cat_name: "Sports", create_at: '12:090' },
];

function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [ItemsToDelete, setItemsToDelete] = useState(null);
    const itemsPerPage = 25;

    const filteredCategories = categories.filter((Items) =>
        Items.cat_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItems = currentPage * itemsPerPage;
    const indexOfFirstItems = indexOfLastItems - itemsPerPage;
    const currentCategories = filteredCategories.slice(indexOfFirstItems, indexOfLastItems);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

    const handleDeleteClick = (Items) => {
        setItemsToDelete(Items);
        setShowDeleteModal(true);
    };

    const deleteItems = (id) => {
        const updatedCategories = categories.filter((Items) => Items.id !== id);
        setShowDeleteModal(false);
        setItemsToDelete(null);
    };

    return (
        <div>
            <Navbar />
            <div className='pt-16 p-2 md:ml-64 bg-white dark:bg-gray-900'>
                <div className='p-2 border-2 mt-4 border-gray-200 border-dashed dark:border-gray-700 '>
                    <div className='flex justify-between py-2 mr-2 md:mr-14'>
                        <div className='my-2'>
                            <button className='button_only_submit'>បន្ងែមថ្មី</button>
                        </div>
                        <div className="my-2">
                            <input
                                type="search"
                                className="input_text text-sm"
                                placeholder="ស្វែងរក​ . . . . ."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:text-white dark:bg-gray-600">
                                <tr>
                                    <th scope="col" className="pl-4 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Items Name</th>
                                    <th scope="col" className="px-6 py-3">Creation Time</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCategories.length > 0 ? (
                                    currentCategories.map((Items,index) => (
                                        <tr key={Items.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                                            <td className='pl-4 py-3'>{index + 1}</td>
                                            <td className="px-6 font-semibold">{Items.cat_name}</td>
                                            <td className="px-6">{Items.create_at}</td>
                                            <td className="px-6">
                                                <button onClick={() => handleDeleteClick(Items)}>
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-3">No categories found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />
                </div>
            </div>
            <ActionDelete
                showModal={showDeleteModal}
                show_names={ItemsToDelete?.cat_name}
                deleteItems={deleteItems}
                closeModal={() => setShowDeleteModal(false)}
            />
        </div>
    );
}

export default Dashboard;
