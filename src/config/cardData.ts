
interface ICardData {
    title: string,
    headerCol: string[],
    content: string
}

export const cardData: ICardData[] = [
    {
        title: 'Изделие',
        headerCol: ['Заводской сериал', 'Артикул', 'Наименование'],
        content: 'lorem ipsum'
    },
    {
        title: 'Сборочная единица (Тип СБ)',
        headerCol: ['Артикул', 'Наименование', 'Кол-во СБ на изделие'],
        content: 'lorem ipsum'
    },
    {
        title: 'Деталь (Тип Д)',
        headerCol: ['Артикул', 'Наименование', 'Кол-во СБ на изделие'],
        content: 'lorem ipsum'
    },

]