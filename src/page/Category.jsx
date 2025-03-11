import React from 'react';
import { Link } from 'react-router-dom';

function Category() {
    return (
        <div className='p-4 sm:ml-64 bg-white'>
            <div className='p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700'>
                <div className='flex justify-between py-2 mr-2 md:mr-14'>
                    <div className='my-2'>
                        <Link to='/register' className='bg-blue-600 py-2 px-4 rounded-lg shadow-md'>Register</Link>
                    </div>
                    <div className="">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-2 bg-slate-100 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500" placeholder="Search Mockups, Logos..." required />
                        </div>
                    </div>
                </div>
                
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="pl-4 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                                <td className='pl-4 py-3'>1</td>
                                <td className="px-6 font-semibold">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Laptop
                                </td>
                                <td className="px-6">
                                    $2999
                                </td>
                                <td className="px-6 space-x-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">update</a>

                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                                <td className='pl-4 py-3'>1</td>
                                <td className="px-6 font-semibold">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Laptop
                                </td>
                                <td className="px-6">
                                    $2999
                                </td>
                                <td className="px-6 space-x-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">update</a>

                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                                <td className='pl-4 py-3'>1</td>
                                <td className="px-6 font-semibold">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Silver
                                </td>
                                <td className="px-6">
                                    Laptop
                                </td>
                                <td className="px-6">
                                    $2999
                                </td>
                                <td className="px-6 space-x-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">update</a>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-end py-4 px-8" aria-label="Table navigation">
                        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                            <li>
                                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                           
                            <li>
                                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                            </li>
                           
                            <li>
                                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Category;
