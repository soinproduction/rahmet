import Choices from "../vendor/choise";
import vars from "../_vars";

const {customSelect} = vars;

customSelect.map((select) => {
  const choices = new Choices(select,{
    loadingText: 'Loading...',
    noResultsText: 'No results found',
    noChoicesText: 'No choices to choose from',
    itemSelectText: '',
    removeItemButton: true,
    placeholder: true,
    placeholderValue: 'test',
    maxItemCount: 3,
    classNames: {
      containerInner: 'choices-top',
      list: 'choices-list',
      listSingle: 'choices-top__button', // тело селекта
      itemSelectable: 'choices-button',
      placeholder: 'choices__placeholder'
    },
  });
});





