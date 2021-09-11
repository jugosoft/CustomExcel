import './scss/main.scss';
import Excel from './components/excel/excel';
import Header from './components/header/header';
import Toolbar from './components/toolbar/toolbar';
import Formula from './components/formula/formula';
import Table from './components/table/table';
// Надоело глазеть на стандартный вывод
console.clear();

// Всё равно не помогло
const excelApp = new Excel('#app', {
    components: [
        Header,
        Toolbar,
        Formula,
        Table
    ]
});

excelApp.display();

