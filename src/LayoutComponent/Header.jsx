import {
  Bell,
  LocateFixed,
  LogOutIcon,
  Monitor,
  User,
  Menu,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
const Header = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
          );

          const data = await res.json();

          // 🔥 unaweza customize hapa
          const addr = data.address;

          const place =
            addr.suburb || // mtaa
            addr.village || // kijiji
            addr.town || // town
            addr.city || // city
            addr.county || // wilaya
            addr.state; // region

          const country = addr.country;

          setAddress(`${place}, ${country}`);
        } catch (err) {
          setError("Failed to fetch address");
        }
      },
      (err) => {
        setError(err.message);
      },
    );
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    Swal.fire("Success", "LoggedOut successfully", "success");
    navigate("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwtDecode(token);
      setUser(decode.data);
    }
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full p-4 bg-white shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              className="md:hidden p-2 rounded-md bg-slate-100 hover:bg-slate-200"
              onClick={onToggleSidebar}
              aria-label="Open sidebar"
            >
              <Menu size={20} className="text-slate-700" />
            </button>

            <div className="flex items-center gap-3 flex-1 min-w-0">
              <LocateFixed className="text-blue-500" />

              <div className="text-sm text-gray-700 font-semibold truncate max-w-[200px] md:max-w-none">
                {address ? (
                  address
                ) : error ? (
                  <span className="text-red-500">{error}</span>
                ) : (
                  "Detecting location..."
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell size={24} />
                <span className="absolute -top-2 -right-2 text-xs bg-green-600 text-white rounded-full px-1.5 py-0.5">
                  7
                </span>
              </div>

              <div className="relative">
                <Monitor size={24} />
                <span className="absolute -top-2 -right-2 text-xs bg-indigo-600 text-white rounded-full px-1.5 py-0.5">
                  2
                </span>
              </div>
            </div>

            {/* USER */}
            <div
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <User className="bg-gray-300 rounded-full p-1" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-600 rounded-full animate-ping"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-700 rounded-full"></span>
                </div>

                {/* Hide name on small */}
                <h1 className="hidden md:block text-indigo-700 font-bold">
                  Kavit Paulo
                </h1>
              </div>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded p-3 w-48 z-50 border">
                  <p className="font-semibold">Kavit Paulo</p>
                  <p className="text-sm text-green-500 font-bold capitalize">
                    {user.role}
                  </p>

                  <hr className="my-2" />

                  <ul className="text-sm space-y-2">
                    <li className="hover:text-green-600 cursor-pointer">
                      Profile
                    </li>
                    <li className="flex gap-2 hover:text-red-500 cursor-pointer">
                      <button onClick={handleLogout}>
                        <LogOutIcon size={18} className="text-red-500" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <hr />
    </>
  );
};

export default Header;
