import ExcelComponent from '../../core/ExcelComponent';

export default function Table(selector, options) {
    return {
        toHTML: function () {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="excel__table">
                    <div class="row">
                        <div class="row-info"></div>
                        <div class="row-data">
                            <div class="column">A</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row-info">1</div>
                        <div class="row-data">
                            <div class="cell selected" contenteditable></div>
                        </div>
                    </div>
                </div>
            `;
            
            return element;
        }
    }
}

Table.prototype = ExcelComponent;