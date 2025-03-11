import React from 'react';

function ActionDelete({ show_names, showModal, deleteCategory, closeModal }) {
    if (!showModal) return null; // Don't render if modal is not shown
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 mx-4 rounded shadow-lg">
          <h3 className="text-lg font-semibold">
            តើអ្នកប្រាកដថាចង់លុប <span className="mt-2">{show_names}</span> ?
          </h3>
          <div className="mt-4 flex justify-end gap-2">
            <button
              className="text-white px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
              onClick={closeModal}
            >
              មិនលុប
            </button>
            <button
              className="text-white px-4 py-2 bg-red-500 rounded hover:bg-red-600"
              onClick={deleteCategory} // Call deleteCategory directly
            >
              លុប
            </button>
          </div>
        </div>
      </div>
    );
}

export default ActionDelete;
