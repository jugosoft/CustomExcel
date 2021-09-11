import { Constants } from "@core/Constants";

export default function DomListener() {
    // Возвращает шаблон компонента
    return {
        toHTML: function () {
            return Constants.space;
        }
    }
}