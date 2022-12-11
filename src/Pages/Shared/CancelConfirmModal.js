import React from "react";
import { toast } from "react-hot-toast";

const CancelConfirmModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
  const { toolName, _id } = deletingOrder;

  const handleDelete = () => {
    fetch(`https://drohnenkomponenten-server.onrender.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast(`Order for ${toolName} is Canceled`);
          setDeletingOrder(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="cancel-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to Cancel order for {toolName}?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDelete()} className="btn btn-error">
              Cancel
            </button>
            <label htmlFor="cancel-confirm-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelConfirmModal;
