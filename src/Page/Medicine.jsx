import { Download, Upload, Plus, FileDown, Edit, Trash2 } from "lucide-react";
import React, { useState } from "react";
import ImportMedicines from "../forms/ImportMedicines";

const Medicine = () => {
    const [importMedicine,setImportMedicine]=useState(false);

    const handleImport= (e)=>{
      e.preventDefault()
        setImportMedicine(!importMedicine);
    }


  return (
    <>
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        {/* LEFT ACTION */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 w-fit">
          <Plus size={18} />
          <span>Add Medicine</span>
        </button>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-wrap gap-3">
          {/* DOWNLOAD TEMPLATE */}
          <a
            href="/templates/medicine_template.xlsx"
            download
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Download size={18} />
            <span>Template</span>
          </a>

          {/* IMPORT */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2" onClick={handleImport}>
            <Upload size={18} />
            <span>Import</span>
          </button>

          {/* EXPORT */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-2">
            <FileDown size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {importMedicine && (
        <ImportMedicines/>
      )}

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[700px] w-full bg-white shadow-md rounded-lg overflow-hidden">
          {/* HEADER */}
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3 hidden sm:table-cell">
                Brand
              </th>
              <th className="text-left px-4 py-3 hidden md:table-cell">
                Category
              </th>
              <th className="text-left px-4 py-3">Price</th>
              <th className="text-left px-4 py-3">Stock</th>
              <th className="text-center px-4 py-3">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-gray-700">
            <tr className="border-b hover:bg-green-50 transition">
              <td className="px-4 py-3 font-semibold">Paracetamol</td>
              <td className="px-4 py-3 hidden sm:table-cell">GSK</td>
              <td className="px-4 py-3 hidden md:table-cell">Painkiller</td>
              <td className="px-4 py-3">2000</td>

              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                  50
                </span>
              </td>

              <td className="px-4 py-3 flex justify-center gap-2">
                <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded">
                  <Edit size={16} />
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Medicine;
