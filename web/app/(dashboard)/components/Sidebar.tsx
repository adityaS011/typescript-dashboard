import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { BiPlus } from "react-icons/bi";
import {
  PeopleAltOutlined,
  Settings,
  TaskAlt,
  Timer,
} from "@mui/icons-material";

const SiderbarItem = [
  {
    icon: <TaskAlt color="primary" />,
    text: "My Tasks",
  },
  {
    icon: <PeopleAltOutlined color="primary" />,
    text: "Shared Tasks",
  },
  {
    icon: <Timer color="primary" />,
    text: "Scheduled Tasks",
  },
];
const Sidebar = () => {
  return (
    <div className="w-60 p-1 h-full bg-slate-100 border-r border-gray-200 items-center">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <ListItem>
            <Button
              variant="contained"
              endIcon={<BiPlus />}
              color="primary"
              className="w-full"
            >
              Create New
            </Button>
          </ListItem>
          <Divider />
          {SiderbarItem.map((item) => {
            return (
              <ListItemButton key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText secondary={item.text} />
              </ListItemButton>
            );
          })}
        </div>

        <div className="mt-auto mb-4">
          <ListItemButton>
            <ListItemIcon>
              <Settings color="primary" />
            </ListItemIcon>
            <ListItemText secondary="Settings" />
          </ListItemButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
