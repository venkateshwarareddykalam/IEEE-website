import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function MenuListComposition({ data }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = (event) => {
    if (
      anchorRef.current &&
      !anchorRef.current.contains(event.relatedTarget)
    ) {
      setOpen(false);
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        {/* Main Button */}
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          className="text-gray-700 font-medium hover:text-gray-900"
        >
          {data.label}
        </Button>

        {/* Dropdown Menu */}
        {data.type === "menu" && data.submenu && (
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            modifiers={[
              {
                name: "preventOverflow",
                options: {
                  boundary: "viewport",
                },
              },
            ]}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: "left top",
                }}
              >
                <Paper
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                  className="z-50"
                >
                  <MenuList autoFocusItem={open} id="composition-menu">
                    {data.submenu.map((item, index) => (
                      <MenuItem key={index}>
                        <Link
                          to={item.url}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          {item.label}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Paper>
              </Grow>
            )}
          </Popper>
        )}
      </div>
    </Stack>
  );
}
