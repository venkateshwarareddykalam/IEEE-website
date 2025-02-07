import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function MenuButton({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout
    }
    setIsOpen(true); // Open the dropdown immediately
  };

  const handleMouseLeave = () => {
    // Add a delay before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Delay of 200ms
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {data.label}
        </Button>
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
                name: "zIndex",
                enabled: true,
                phase: "afterWrite",
                fn: ({ state }) => {
                  state.elements.popper.style.zIndex = "9999"; // High z-index
                },
              },
            ]}
            style={{ zIndex: 9999 }} // Ensures it is above other elements
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                      
                    >
                      {data.submenu.map((item, index) => (
                        <MenuItem onClick={handleClose} key={index}>
                          <Link
                            to={item.url}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            {item.label}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        )}
      </div>
    </Stack>
  );
}
