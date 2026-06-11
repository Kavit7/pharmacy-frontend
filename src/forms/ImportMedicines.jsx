import React, { useState } from "react";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";

const ImportMedicines = () => {
  const [data, setData] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [lookupMap, setLookupMap] = useState({
    categories: {},
    manufacturers: {},
    dosage_forms: {},
    brands: {},
  });
  const [process, setProcess] = useState(true);
  const [upload, setUpload] = useState(false);
  const [status, setStatus] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const token = localStorage.getItem("token");

  // shared function
  const parseFile = (file) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const buffer = new Uint8Array(e.target.result);
      const workbook = XLSX.read(buffer, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const range = {
        s: { r: 0, c: 0 },
        e: { r: 200, c: 20 },
      };

      const rows = [];

      for (let R = range.s.r; R <= range.e.r; R++) {
        const row = [];

        for (let C = range.s.c; C <= range.e.c; C++) {
          const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
          const cell = sheet[cellAddress];

          row.push(cell ? cell.v : "");
        }

        rows.push(row);
      }

      setData(rows);
    };
  };
  //Lookup Kwanza
  const extractLookups = () => {
    const categories = new Set();
    const manufacturers = new Set();
    const dosageForms = new Set();
    const brands = new Set();

    data.slice(1).forEach((row) => {
      const category = row[0]; // A
      const dosage = row[7]; // H
      const manufacturer = row[11]; // J
      const brand = row[3]; // K (country for now)

      if (category) categories.add(category.toLowerCase().trim());
      if (manufacturer) manufacturers.add(manufacturer.toLowerCase().trim());
      if (dosage) dosageForms.add(dosage.toLowerCase().trim());
      if (brand) brands.add(brand.toLowerCase().trim());
    });

    return {
      categories: Array.from(categories),
      manufacturers: Array.from(manufacturers),
      dosage_forms: Array.from(dosageForms),
      brands: Array.from(brands),
    };
  };
  //Synchronize lookup
  const syncLookups = async () => {
    const lookups = extractLookups();

    setIsProcessing(true);
    setStatus("Processing medicine lookup data...");

    Swal.fire({
      title: "Processing lookups",
      text: "Please wait while medicine lookup data is synced.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch("http://localhost:8080/medicine/sync-lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(lookups),
      });

      const result = await res.json();
      setLookupMap(result.data);

      const message =
        result.message || "Lookup sync complete. Ready to upload medicines.";
      setTimeout(() => {
        setProcess(!process);
        setUpload(!upload);
        setIsProcessing(false);
        setStatus(message);
      }, 5000);

      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Lookup Synced",
        text: message,
      });

      console.log(result);
    } catch (error) {
      setIsProcessing(false);
      setStatus("Lookup sync failed. Check console for details.");
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Lookup Sync Failed",
        text: error.message || "Unable to sync lookups.",
      });
      console.error(error);
    }
  };

  // save Medicine

  const saveMedicine = async (e) => {
    e.preventDefault();

    const medicine = data.slice(1).map((row) => {
      const manufacturer = row[11]?.toLowerCase().trim(); // adjust index kama inahitajika
      const category = row[0]?.toLowerCase().trim();
      const dosage = row[7]?.toLowerCase().trim();
      const brand = row[3]?.toLowerCase().trim();
      return {
        generic_name: row[4]?.toLowerCase().trim(),
        description: row[5]?.toLowerCase().trim(),
        strength: row[6]?.toLowerCase().trim(),
        manufacturer_id: lookupMap.manufacturers[manufacturer] || null,
        category_id: lookupMap.categories[category] || null,
        dosage_form_id: lookupMap.dosage_forms[dosage] || null,
        branch_id: lookupMap.brands[brand] || null,
      };
    });
    //  console.log(medicine);
    // console.log(lookupMap);
    try {
      setIsUploading(true);
      setStatus("Uploading medicines to server...");

      Swal.fire({
        title: "Uploading medicines",
        text: "Please wait while the medicines are uploaded.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch(
        "http://localhost:8080/medicine/save-medicine",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(medicine),
        },
      );

      const result = response.ok
        ? await response.json()
        : { message: await response.text(), success: false };

      if (response.ok) {
        console.log("Medicine upload successful:", result);
        const message =
          result.message || "Upload complete. Medicines saved successfully.";
        setStatus(message);
        setData([]);
        setUpload(false);
        setProcess(true);
        setLookupMap({
          categories: {},
          manufacturers: {},
          dosage_forms: {},
          brands: {},
        });
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Upload Complete",
          text: message,
        });
      } else {
        console.error(
          "Failed to save medicine:",
          response.status,
          result.message,
        );
        setStatus("Upload failed. Check console for details.");
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text: result.message || "Unable to save medicines.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus("Upload failed. Check console for details.");
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: error.message || "Unable to save medicines.",
      });
    } finally {
      setIsUploading(false);
    }
  };
  // file input
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) parseFile(file);
  };

  // drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  // drag leave
  const handleDragLeave = () => {
    setDragActive(false);
  };

  // drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) parseFile(file);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-full">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Import Medicines</h1>

      {/* DROP AREA */}
      <div
        className={`border-2 border-dashed p-6 sm:p-8 rounded-lg text-center mb-6 transition ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-green-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="text-gray-600">Drag & Drop Excel File here</p>

        <p className="text-gray-400 mt-2">OR</p>

        {/* FILE INPUT */}
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFile}
          className="mt-2 w-full max-w-full border p-2 rounded text-sm sm:text-base"
        />
      </div>

      {/* PREVIEW */}
      {data.length > 0 && (
        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full w-full table-auto text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                {data[0].map((key, i) => (
                  <th key={i} className="p-2 text-left whitespace-nowrap">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.slice(1, 5).map((row, index) => (
                <tr key={index} className="border-t">
                  {row.map((val, i) => (
                    <td key={i} className="p-2 align-top whitespace-normal">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.length > 0 && (
        <div
          className={`mt-4 rounded-lg border px-4 py-3 ${
            isProcessing
              ? "bg-blue-50 border-blue-300 text-blue-800"
              : isUploading
                ? "bg-green-50 border-green-300 text-green-800"
                : "bg-gray-50 border-gray-300 text-gray-800"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block h-3 w-3 rounded-full ${
                  isProcessing
                    ? "bg-blue-600 animate-pulse"
                    : isUploading
                      ? "bg-green-600 animate-pulse"
                      : "bg-gray-500"
                }`}
              />
              <span className="font-medium">Status</span>
            </div>
            <p className="text-sm sm:text-base">
              {status ||
                (upload
                  ? "Ready to upload medicines."
                  : "Loaded file. Press Process & Upload to continue.")}
            </p>
          </div>
        </div>
      )}

      {/* BUTTON */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        {process && data.length > 0 && (
          <button
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-200 disabled:cursor-not-allowed"
            onClick={syncLookups}
            disabled={isProcessing || isUploading}
          >
            {isProcessing ? "Processing..." : "Process & Upload"}
          </button>
        )}
        {upload && (
          <button
            className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded disabled:bg-green-200 disabled:cursor-not-allowed"
            onClick={saveMedicine}
            disabled={isUploading || isProcessing}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ImportMedicines;
