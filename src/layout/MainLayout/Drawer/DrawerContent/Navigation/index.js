import { Box } from '@mui/material';
import menuItem from '../../../../../menus/menus';
import NavGroup from './NavGroup';

const Navigation = () => {
    const navGroups = menuItem.items.map((item) => {
        return <NavGroup key={item.id} item={item} />;
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
