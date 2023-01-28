import ScrollTop from 'components/ScrollTop';
import ThemeCustomization from 'themes';
import Routes from './menus/routes';

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
