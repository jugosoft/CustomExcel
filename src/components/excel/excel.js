export default function Excel(selector, options) {
    return {
        $selector: document.querySelector(selector) || {},
        $options: options || [],
        getRoot: function () {
            const $root = document.createElement('div');
            this.$options.components.forEach(function (Component) {
                const component = new Component();
                $root.insertAdjacentElement('afterbegin', component.toHTML());
            });
            return $root;
        },
        display: function () {
            this.$selector.appendChild(this.getRoot());
        }
    };
}