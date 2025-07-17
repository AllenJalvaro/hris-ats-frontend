import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import {
  ConfigurationsIcon,
  ConfigurationsOutlineIcon,
} from "../../assets/icons/ConfigurationsIcon";
import EmployeesIcon, {
  EmployeesOutlineIcon,
} from "../../assets/icons/EmployeesIcon";
import BarsIcon from "../../assets/icons/BarsIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import ArrowHeadDownIcon, {
  ArrowHeadUpIcon,
} from "../../assets/icons/ArrowHeadIcon";
import ArrowLeftInCircleIcon, {
  ArrowRightInCircleIcon,
} from "../../assets/icons/ArrowInCircleIcon";
import DashboardIcon, {
  DashboardOutlineIcon,
} from "../../assets/icons/DashboardIcon";

const sidebarData = [
  {
    service: "HRIS",
    features: [
      {
        label: "Dashboard",
        path: "/hris",
        icon: (
          <DashboardOutlineIcon size={4} hover="group-hover:text-[#609899]" />
        ),
        iconActive: <DashboardIcon size={4} color="text-[#609899]" />,
      },
      {
        label: "Employees",
        path: "/hris-employees",
        icon: (
          <>
            <EmployeesOutlineIcon size={4} hover="group-hover:text-[#609899]" />
          </>
        ),
        iconActive: <EmployeesIcon size={4} color="text-[#609899]" />,
      },
      {
        label: "Configurations",
        path: "/hris-configurations",
        icon: (
          <ConfigurationsOutlineIcon
            size={4}
            hover="group-hover:text-[#609899]"
          />
        ),
        iconActive: <ConfigurationsIcon size={4} color="text-[#609899]" />,
      },
    ],
  },
  {
    service: "ATS",
    features: [
      {
        label: "Dashboard",
        path: "/ats",
        icon: (
          <DashboardOutlineIcon size={4} hover="group-hover:text-[#609899]" />
        ),
        iconActive: <DashboardIcon size={4} color="text-[#609899]" />,
      },
      {
        label: "Configurations",
        path: "/ats-configurations",
        icon: (
          <ConfigurationsOutlineIcon
            size={4}
            hover="group-hover:text-[#609899]"
          />
        ),
        iconActive: <ConfigurationsIcon size={4} color="text-[#609899]" />,
      },
    ],
  },
];

const Sidebar = () => {
  const [openIndexes, setOpenIndexes] = useState(
    sidebarData.map((_, idx) => idx)
  ); // open lahat initially
  const [collapsed, setCollapsed] = useState(false); // sidebar collapse toggle
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile drawer state
  const location = useLocation();
  const user = true;

  const handleAccordionClick = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      {/* menu icon sa mobile */}
      <div
        className="fixed top-4 left-4 z-50 sm:hidden bg-white rounded-full shadow p-2 cursor-pointer"
        onClick={handleDrawerToggle}
      >
        <BarsIcon size={5} color="text-[#609899]" />
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 sm:hidden"
          onClick={handleDrawerClose}
        />
      )}

      {/* mismong Sidebar - pinakaparent */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 bg-white transition-transform duration-300
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
          sm:static sm:translate-x-0 sm:flex
          ${collapsed ? "w-20 sm:w-20" : "w-60 sm:w-60"}
          p-4 flex flex-col sm:h-screen
        `}
        style={{
          boxShadow: drawerOpen ? "0 0 0 9999px rgba(0,0,0,0.0)" : undefined,
        }}
        onClick={(e) => e.stopPropagation()} // para 'di magsara pag nag click sa loob
      >
        {/* Collapse button - only sa desktop */}
        <div
          className={`${
            collapsed ? "self-center" : "self-end"
          } cursor-pointer hidden sm:block mb-6`}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ArrowRightInCircleIcon size={5} color="text-[#609899]" />
          ) : (
            <ArrowLeftInCircleIcon size={5} color="text-[#609899]" />
          )}
        </div>

        <div
          className={`self-end  block sm:hidden cursor-pointer`}
          onClick={handleDrawerToggle}
        >
          <CloseIcon size={5} color="text-[#609899]" />
        </div>

        {/* User Profile */}
        <div
          className={`flex items-center mb-10  ${collapsed && "self-center"}`}
        >
          <div
            className={`${
              collapsed ? "h-9 w-9" : "h-11 w-11"
            } rounded-full border-2 border-gray-300 overflow-hidden`}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQE9_e2ch1jbPQ/profile-displayphoto-shrink_200_200/B4EZcaXxzwHsAY-/0/1748494130866?e=2147483647&v=beta&t=5v8OZvy7SDPiHXtuukKAa6UNTG6bBfiCe2TV3bf3kX4"
              alt="User Profile"
              className="h-full w-full object-cover"
            />
          </div>
          {!collapsed && user && (
            <div className="overflow-hidden ml-3">
              <p className="text-[#609899] truncate text-xs">SUPERADMIN</p>

              <h3 className="font-medium text-gray-900 truncate text-medium">
                Benz Atencion
              </h3>
              <p className="text-gray-400 truncate text-xs">@benz.atencion</p>
            </div>
          )}
        </div>

        {/* Sidebar Menu Items */}
        <div className="flex-1 flex flex-col gap-2">
          {sidebarData.map((section, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div key={section.service} className="text-gray-500 !text-sm">
                {/* Section service header - accordion  */}
                <div
                  className={`cursor-pointer py-2 flex items-center gap-2 ${
                    collapsed ? "justify-center" : "justify-between"
                  } w-full select-none`}
                  onClick={() => handleAccordionClick(idx)}
                >
                  <span className="font-semibold">{section.service}</span>
                  <span className={collapsed ? "" : "mr-2"}>
                    {isOpen ? (
                      <ArrowHeadUpIcon size={4} />
                    ) : (
                      <ArrowHeadDownIcon size={4} />
                    )}
                  </span>
                </div>

                {/* Accordion content tabss */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
                    isOpen ? "max-h-96 translate-y-0" : "max-h-0 -translate-y-2"
                  } ${collapsed ? "pl-0" : "pl-5"}`}
                >
                  <div className="py-1">
                    {section.features.map((feature) => {
                      const isActive = location.pathname === feature.path;
                      return (
                        <Link
                          to={feature.path}
                          key={feature.label}
                          className={`flex items-center gap-2 my-2 cursor-pointer group ${
                            collapsed ? "justify-center" : ""
                          }`}
                          onClick={handleDrawerClose} // sa mobile, close drawer after click
                        >
                          <span>
                            {isActive ? feature.iconActive : feature.icon}
                          </span>
                          {!collapsed && (
                            <span
                              className={`${
                                isActive
                                  ? "font-bold text-[#609899]"
                                  : "font-normal group-hover:text-[#609899]"
                              }`}
                            >
                              {feature.label}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Logout Button */}
        <Link
          to="#"
          className={`flex flex-row items-center gap-2 group ${
            collapsed ? "justify-center" : "justify-end"
          } mt-auto mb-auto`}
        >
          {!collapsed && (
            <span className="text-gray-500 text-xs group-hover:text-[#609899]">
              LOGOUT
            </span>
          )}
          <LogoutIcon size={4} hover="group-hover:text-[#609899]" />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
