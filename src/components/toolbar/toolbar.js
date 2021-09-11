import ExcelComponent from '../../core/ExcelComponent';

export default function Toolbar(selector, options) {
    return {
        toHTML: function () {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="excel__toolbar">
                    <div>
                        <div class="button">
                            <i class="material-icons">format_align_left</i>
                        </div>
                        <div class="button">
                            <i class="material-icons">format_align_center</i>
                        </div>
                        <div class="button">
                            <i class="material-icons">format_align_right</i>
                        </div>
                        <div class="button">
                            <i class="material-icons">format_bold</i>
                        </div>
                        <div class="button">
                            <i class="material-icons">format_italic</i>
                        </div>
                        <div class="button">
                            <i class="material-icons">format_underline</i>
                        </div>
                    </div>
                </div>
            `;
            return element;
        }
    }
}

Toolbar.prototype = ExcelComponent;