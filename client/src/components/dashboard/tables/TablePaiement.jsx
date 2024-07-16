import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiSearch } from "../../../assets/icons";

const LINK = "http://localhost:8000/api/admin";

function TablePaiement({ paiements, setDeleted }) {
    const deleteClient = (id) => {
        axios
          .delete(LINK + "/client/" + id)
          .then(() => setDeleted((prev) => !prev));
      };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Liste Paiements</h1>
        <div className="flex flex-row gap-2">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered  text-black"
              />
              <button className="btn btn-square ">
                <BiSearch size={24} />
              </button>
            </div>
          </div>
          <Link
            to={"/dashboard/formaddclient"}
            className="btn btn-active border-none hover:bg-color-primary"
          >
            Ajouter Client
          </Link>
        </div>
      </div>
      <div className="overflow-auto bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>CIN</th>
              <th>Appartement</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {paiements.map((paiements) => (
              <tr>
                <td>{paiements._id}</td>
                <td>{paiements.CIN}</td>
                <td>{paiements.Number_Appartement}</td>
                <td className="flex flex-row gap-2">
                  <Link
                    to={"/dashboard/paiement/" + paiements._id}
                    className="btn btn-ghost btn-xs bg-color-secondary text-white"
                  >
                    Paiement
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablePaiement
