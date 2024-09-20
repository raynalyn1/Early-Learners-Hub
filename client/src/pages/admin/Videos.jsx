import React, { useState } from 'react';
import Modal from '../../components/Modal'; // Adjust path as needed

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalAction, setModalAction] = useState('');

  const openModal = (action, content) => {
    setModalAction(action);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
    setModalAction('');
  };

  const handleConfirm = () => {
    // Handle confirm action based on modalAction
    console.log(`${modalAction} confirmed for:`, modalContent);
    closeModal();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">Videos</h1>
      <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Manage Videos</h2>
        <button 
          onClick={() => openModal('Edit', 'Video Title')} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Edit
        </button>
        <button 
          onClick={() => openModal('Delete', 'Video Title')} 
          className="ml-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
        >
          Delete
        </button>
        <table className="mt-6 w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Video Title</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Category</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-200 px-4 py-2">Learning Numbers</td>
              <td className="border-b border-gray-200 px-4 py-2">Numbers</td>
              <td className="border-b border-gray-200 px-4 py-2">
                <button 
                  onClick={() => openModal('Edit', 'Learning Numbers')} 
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button> | 
                <button 
                  onClick={() => openModal('Delete', 'Learning Numbers')} 
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 px-4 py-2">Alphabet Songs</td>
              <td className="border-b border-gray-200 px-4 py-2">Alphabet</td>
              <td className="border-b border-gray-200 px-4 py-2">
                <button 
                  onClick={() => openModal('Edit', 'Alphabet Songs')} 
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button> | 
                <button 
                  onClick={() => openModal('Delete', 'Alphabet Songs')} 
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={`${modalAction} Video`}
        onConfirm={handleConfirm}
      >
        <p>
          Are you sure you want to {modalAction.toLowerCase()} the video titled "{modalContent}"?
        </p>
      </Modal>
    </div>
  );
};

export default Videos;
