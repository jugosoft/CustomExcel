import ExcelComponent from '../../core/ExcelComponent';

export default function Formula(selector, options) {
    return {
        toHTML: function () {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="excel__formula">
                    <div class="info">Fx</div>
                    <div class="input" contenteditable></div>
                </div>
            `;
            return element;
        }
    }
}

Formula.prototype = ExcelComponent;
