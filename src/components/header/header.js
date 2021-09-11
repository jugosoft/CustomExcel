import ExcelComponent from '../../core/ExcelComponent';

export default function Header(selector, options) {
    return {
        toHTML: function () {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="excel__header">
                    <div>
                        <input type="text" class="input" value="Placeholder" />
                    </div>
                    <div>
                        <div class="button">
                            <i class="material-icons">delete</i>
                        </div>
                        <div class="button">
                            <i class="material-icons">exit_to_app</i>
                        </div>
                    </div>
                </div>
            `;
            return element;
        }
    }
}

Header.prototype = ExcelComponent;