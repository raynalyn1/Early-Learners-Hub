import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoModal from "../../components/VideoModal";
import { FiMoreVertical, FiEdit2, FiTrash2, FiX, FiCheck } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UploadVideos() {
  const [username, setUserName] = useState("");
  const [activeSection, setActiveSection] = useState("uploaded");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [showMenu, setShowMenu] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/video");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleUpload = async ({ name, description, file }) => {
    if (!file || !name || !description) {
      toast.warn("Please complete all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("description", description);

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/video/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setLoading(false);
      toast.success("Video uploaded successfully");
      fetchVideos();
      setIsModalOpen(false);
    } catch (error) {
      setLoading(false);
      toast.error("Error uploading video");
      console.error("Error uploading video:", error);
    }
  };

  const confirmDelete = (video) => {
    setVideoToDelete(video);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!videoToDelete) return;

    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/video/${videoToDelete.id}`);
      setLoading(false);
      toast.success("Video deleted successfully");
      fetchVideos();
      setDeleteModal(false);
      setShowMenu(null);
    } catch (error) {
      setLoading(false);
      toast.error("Error deleting video");
      console.error("Error deleting video:", error);
    }
  };

  const handleEdit = (video) => {
    setEditingVideo(video.id);
    setEditName(video.name);
    setEditDescription(video.description);
    setShowMenu(null);
  };

  const handleSaveEdit = async (id) => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:3000/video/${id}`, {
        name: editName,
        description: editDescription,
      });
      setLoading(false);
      toast.success("Video updated successfully");
      setEditingVideo(null);
      fetchVideos();
    } catch (error) {
      setLoading(false);
      toast.error("Error updating video");
      console.error("Error updating video:", error);
    }
  };

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setUserName(name);
    }
  }, []);

  const getInitials = (name) => {
    const nameParts = name.split(" ");
    return nameParts[0]?.charAt(0).toUpperCase() + nameParts[1]?.charAt(0).toUpperCase();
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white font-bold text-lg">Loading...</div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
            <p className="mb-4">Do you want to delete the video <strong>{videoToDelete?.name}</strong>?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setDeleteModal(false)}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard */}
      <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-md mb-6 border border-[#E9AF5E]">
        <div>
          <h2 className="text-gray-700 text-lg font-semibold">Dashboard</h2>
          <p className="text-sm text-gray-500">Wednesday, 06 November 2024</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
            {username ? getInitials(username) : "??"}
          </div>
          <p className="text-gray-700">{username}</p>
        </div>
      </div>

      {/* Sections */}
      <h2 className="text-[1.5rem] font-bold ml-9">Videos</h2>
      <div className="w-full bg-red-300 h-[8vh] flex gap-9 items-center pl-9">
        <h2 onClick={() => setActiveSection("uploaded")} className={`cursor-pointer ${activeSection === "uploaded" ? "font-bold underline" : ""}`}>Uploaded</h2>
        <h2 onClick={() => setActiveSection("upload")} className={`cursor-pointer ${activeSection === "upload" ? "font-bold underline" : ""}`}>Upload</h2>
      </div>

      {/* Uploaded Videos */}
      {activeSection === "uploaded" && (
        <div className="border border-black w-full h-[60vh] rounded-lg overflow-auto">
          <div className="grid grid-cols-3 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="bg-white shadow-md rounded overflow-hidden relative border border-[orange]">
                <video controls src={video.url} className="w-full h-48" />
                <div className="p-4">
                  {editingVideo === video.id ? (
                    <>
                      <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full mb-2 p-1 border rounded" />
                      <input type="text" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className="w-full mb-2 p-1 border rounded" />
                      <div className="flex justify-end gap-2">
                        <button onClick={() => setEditingVideo(null)} className="p-1 rounded hover:bg-gray-100"><FiX className="text-red-500" /></button>
                        <button onClick={() => handleSaveEdit(video.id)} className="p-1 rounded hover:bg-gray-100"><FiCheck className="text-green-500" /></button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-lg">{video.name}</h3>
                          <p className="text-gray-700">{video.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(video)} className="text-gray-500 hover:text-blue-500">
                            <FiEdit2 />
                          </button>
                          <button onClick={() => confirmDelete(video)} className="text-gray-500 hover:text-red-500">
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Section */}
      {activeSection === "upload" && (
        <div className="h-[60vh] flex items-center justify-center">
          <button onClick={() => setIsModalOpen(true)} className="bg-red-300 text-white py-2 px-4 rounded hover:bg-red-400">Upload Video</button>
        </div>
      )}

      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal
        isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpload={handleUpload}
        />
      )}
    </div>
  );
}

export default UploadVideos;
