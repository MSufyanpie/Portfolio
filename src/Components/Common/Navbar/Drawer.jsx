import { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

export default function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem>
            <ListItemText>
             
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Home
                </Button>
              
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
             
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                 About
                </Button>
              
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
             
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Services
                </Button>
              
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Skills
                </Button>
              
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
             
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Projects
                </Button>
            
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
             
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                 Contact
                </Button>
              
            </ListItemText>
          </ListItem>
        
         
        </List>
      </Drawer>
      <IconButton sx={{backgroundColor:'white'}} onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu sx={{color:'black'}} />
      </IconButton>
    </div>
  );
}
